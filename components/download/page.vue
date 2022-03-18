<template>
  <content-wrapper class="pt-16">
    <page-heading :title="`Download`"/>
    <download-cards v-if="release" :release="release" />
    <github-error :error="error" />
  </content-wrapper>
</template>

<script>
export default {
  props: {
    release: {
      type: Object,
      required: true
    },
    error: {
      type: Object,
      default: () => {}
    },
  },
}
</script>
