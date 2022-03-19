<template>
  <h1 class="-ml-1.5 mb-4 p-1 text-4xl sm:text-5xl lg:text-6xl font-bold">
    {{ $props.title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
