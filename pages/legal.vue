<template>
  <content-wrapper class="pt-16">
    <page-heading :title="page.title"/>
    <nuxt-content class="prose prose-base" :document="page" />
  </content-wrapper>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    return {
      page: await $content(`${app.i18n.locale}/legal`).fetch()
    }
  }
}
</script>
