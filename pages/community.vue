<template>
  <content-wrapper class="pt-16">
    <community-discord />
    <community-contributors :contributors="contributors" :error="error" />
  </content-wrapper>
</template>

<script>
import { getContributorsOfAllLinkedRepos } from "@/lib/github";



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
