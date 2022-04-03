<template>
  <content-wrapper class="pt-16">
    <community-discord />
    <community-cards />
    <community-contributors :contributors="contributors" :error="error" />
  </content-wrapper>
</template>

<script>
import {checkRateLimit} from '@/lib/github'

export default {
  async asyncData() {
    let error = null

    try {
      const response = await fetch('https://api.github.com/repos/lostdesign/linked/contributors')
      const isRateLimited = checkRateLimit(response)

      if (isRateLimited.error) {
        error = isRateLimited
        throw new Error(isRateLimited.message)
      }

      return {
        contributors: await response.json(),
        error: null
      }
    } catch (e) {
      return {
        contributors: null,
        error,
      }
    }
  }
}
</script>
