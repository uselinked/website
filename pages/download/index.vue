<template>
  <download-page
    :release="release"
    :error="error"
  />
</template>

<script>
import { fetchRelease } from '@/lib/github'

export default {
  async asyncData({ $config: { githubToken }}) {
    const { release, error, fallbackUrl } = await fetchRelease(githubToken)

    return {
      release,
      error,
      fallbackUrl,
    }
  },
  head() {
    const domain = 'https://uselinked.com'

    return {
      title: `Get linked ${this.release.tag_name}`,
      link: [
        {
          rel: 'canonical',
          href: domain + this.$i18n.locale === 'de' ? '/de' : '' + this.$route.path
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Download linked for your operating system, for free ✨`
        },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.release.published_at
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Get linked ${this.release.tag_name}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Download linked for your operating system, for free ✨'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://uselinked.com/download'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://uselinked.com/images/linked-banner.jpg'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Preview image of linked.'
        }
      ]
    }
  }
}
</script>
