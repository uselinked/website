<template>
  <a
    :href="href"
    @click="trackDownloadClick"
    class="
      mt-8
      inline-flex
      items-center
      px-6
      py-3
      border border-transparent
      shadow-sm
      text-base
      font-medium
      rounded-md
      text-white
      bg-red-500
      hover:bg-red-400
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-red-500
      cursor-pointer
    "
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['href'],
  methods: {
    trackDownloadClick() {
      window.fathom.trackGoal('YBMRKIDP', 0)
    }
  }
}
</script>
