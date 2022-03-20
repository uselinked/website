<template>
  <download-page
    :release="release"
    :error="error"
  />
</template>

<script>
import { fetchRelease } from '@/lib/github'

export default {
  async asyncData() {
    const { release, error, fallbackUrl } = await fetchRelease()

    return {
      release,
      error,
      fallbackUrl,
    }
  }
}
</script>
