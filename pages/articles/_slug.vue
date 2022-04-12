<template>
  <content-wrapper class="pt-16">
    <page-heading :title="post.title"/>
    <nuxt-content class="prose prose-base" :document="post" />
    <pre>{{ post }}</pre>
  </content-wrapper>
</template>

<script>
export default {
  async asyncData({ $content, app, route }) {
    return {
      post: await $content(`/articles/${app.i18n.locale}/${route.params.slug}`).fetch()
    }
  },
  head() {
    const ogImage = (title, description, readTime) => `https://og.uselinked.com/**${title}**.png?description=${description}&readTime=${readTime}&theme=light&md=1&images=https%3A%2F%2Fuselinked.com%2Fimages%2Flogo.png`
    const domain = 'https://uselinked.com'

    return {
      title: this.post.title,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      link: [
        {
          rel: 'canonical',
          href: domain + this.$i18n.locale === 'de' ? '/de' : '' + this.$route.path
        }
      ],
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          content: domain + this.$route.fullPath
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          value: this.post.createdAt
        },
        {
          hid: 'article:modified_time',
          name: 'article:modified_time',
          value: this.post.updatedAt
        },
        {
          hid: 'article:author',
          name: 'article:author',
          value: '@lostdesign'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage(this.post.title, this.post.description, Math.ceil(this.post.readingMinutes)),
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ]
    }
  }
}
</script>
