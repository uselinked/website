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
  },
  head() {
    return {
      title: `Get linked ${this.release.tag_name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Download linked for your operating system, for free ✨`
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          content: this.release.published_at
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://uselinked.com/download/${this.release.name}`
        }
      ]
    }
  }
}
</script>
