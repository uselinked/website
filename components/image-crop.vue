<template>
  <div class="flex justify-center">
    <nuxt-img :src="source" :alt="alt" lazy />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>
