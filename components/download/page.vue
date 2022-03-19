<template>
  <content-wrapper class="pt-16 mb-24">
    <page-heading :title="`Download`"/>
    <download-cards v-if="$props.release" :release="$props.release" />
    <github-error :error="$props.error" />
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
