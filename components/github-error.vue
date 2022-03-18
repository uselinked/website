<template>
  <div v-if="error" class="bg-linked-700 text-white p-12">
    <h1 class="text-6xl font-black mb-4 block">Oops.</h1>
    <p class="mb-8 text-2xl">{{ error.message }}</p>
    <goto-github :page="error.fallbackUrl" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
