<template>
  <download-page
    :release="release"
    :error="error"
  />
</template>

<script>
import { fetchRelease } from '@/lib/github'

export default {
  async asyncData({ route }) {
    const { release, error, fallbackUrl} = await fetchRelease(route.params.version)

    return {
      release,
      error,
      fallbackUrl,
    }
  }
}
</script>
