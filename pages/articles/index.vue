<template>
  <content-wrapper class="pt-16">
    <page-heading :title="$t('title')" />
    <template v-for="post in posts">
      <nuxt-link class="block" :to="localePath(`/articles/${post.slug}`)">{{post.title}}</nuxt-link>
      <pre>{{post}}</pre>
    </template>
  </content-wrapper>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    return {
      posts: await $content(`/articles/${app.i18n.locale}`)
        .only(['title', 'slug', 'readingTime', 'readingWords', 'readingMinutes'])
        .where({ published: true })
        .sortBy('date', 'desc')
        .fetch()
    }
  }
}
</script>


<i18n>
{
  "en": {
    "title": "Articles"
  },
  "de": {
    "title": "Artikel"
  }
}
</i18n>
