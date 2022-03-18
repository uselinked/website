<template>
  <a :href="page" class="flex items-center space-x-2 link-hover" target="_blank" ref="norel noopener">
    <icon-github class="w-5 h-5" />
    <span>Check on Github</span>
    <icon-external class="w-4 h-4" />
  </a>
</template>

<script>
import IconGithub from '@/assets/svg/logos/github.svg?inline=true'
import IconExternal from '@/assets/svg/external.svg?inline=true'

export default {
  props: {
    page: {
      type: String,
      default: 'https://github.com/lostdesign/linked'
    }
  },
  components: { IconGithub, IconExternal }
}
</script>
