import { DateTime } from 'luxon'
const LATEST_RELEASE = 'latest'

export const checkRateLimit = (response) => {
  const usedRequests = Number(response.headers.get('x-ratelimit-used'))

  if (!response.ok && usedRequests === 60) {
    const resettingIn = DateTime
      .fromSeconds(Number(response.headers.get('x-ratelimit-reset')))
      .toRelative({ locale: 'en-US' })

    return {
      error: true,
      resettingIn,
      message: `You've exceeded the request count for the Github API, please retry ${resettingIn}.`
    }
  }

  return {
    error: false
  }
}

const getApiTag = (version) => {
  return version === LATEST_RELEASE ? LATEST_RELEASE : `tags/v${version}`
}

export const fetchRelease = async (githubToken, version = LATEST_RELEASE) => {
  let error = null
  const fallbackUrl = `https://github.com/lostdesign/linked/releases/${getApiTag(version)}`
  const API_URL = `https://api.github.com/repos/lostdesign/linked/releases/${getApiTag(version)}`

  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: 'Bearer ' + githubToken
      }
    })
    const isRateLimited = checkRateLimit(response)

    if (isRateLimited.error) {
      error = isRateLimited
      throw new Error(isRateLimited.message)
    }

    return {
      release: await response.json(),
      error,
      fallbackUrl
    }
  } catch (e) {
    return {
      release: null,
      error,
      fallbackUrl
    }
  }
}

async function fetchContributorsOfRepo(orgname, reponame, requestOptions) {
  return fetch(
    `https://api.github.com/repos/${orgname}/${reponame}/contributors`,
    requestOptions
  );
}

export async function getContributorsOfAllLinkedRepos(githubToken) {
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
