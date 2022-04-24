<template>
  <content-wrapper class="pt-16">
    <community-discord />
    <community-contributors :contributors="contributors" :error="error" />
  </content-wrapper>
</template>

<script>
import { checkRateLimit } from "@/lib/github";

async function fetchContributorsOfRepo(orgname, reponame, requestOptions) {
  return fetch(
    `https://api.github.com/repos/${orgname}/${reponame}/contributors`,
    requestOptions
  );
}

async function getContributorsOfAllLinkedRepos(githubToken) {
  const requestOptions = githubToken
    ? { headers: { Authorization: `Bearer ${githubToken}` } }
    : {};
  const responses = [
    fetchContributorsOfRepo("lostdesign", "linked", requestOptions),
    fetchContributorsOfRepo("uselinked", "website", requestOptions),
    fetchContributorsOfRepo("uselinked", "discord", requestOptions),
  ];
  const awaitedResponses = await Promise.all(responses);
  const isRateLimited = awaitedResponses.reduceRight(
    (alreadyRatelimited, response) =>
      alreadyRatelimited || checkRateLimit(response),
    false
  );
  if (isRateLimited) {
    return { isRateLimited, contributors: [] };
  }
  const contributorJsons = await Promise.all(
    awaitedResponses.map((response) => response.json())
  );
  const contributorMap = new Map();
  contributorJsons.forEach((arrayOfContributors) => {
    arrayOfContributors.forEach((contributor) => {
      if (contributor.type !== "User") {
        // don't count bots and potentially other non-user accounts
        return;
      }
      const existingContributor = contributorMap.get(contributor.login);
      if (existingContributor) {
        contributorMap.set(contributor.login, {
          ...contributor,
          contributions:
            existingContributor.contributions + contributor.contributions,
        });
      } else {
        contributorMap.set(contributor.login, contributor);
      }
    });
  });
  return {
    isRateLimited,
    contributors: Array.from(contributorMap.values()),
  };
}

export default {
  async asyncData({ $config: { githubToken } }) {
    let error = null;

    try {
      const { isRateLimited, contributors } =
        await getContributorsOfAllLinkedRepos(githubToken);
      if (isRateLimited.error) {
        error = isRateLimited;
        throw new Error(isRateLimited.message);
      }
      return {
        contributors,
        error: null,
      };
    } catch (e) {
      return {
        contributors: null,
        error,
      };
    }
  },
};
</script>
