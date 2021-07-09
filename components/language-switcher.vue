<template>
  <div class='flex justify-center items-center align-center'>
    <language-icon />
    <nuxt-link
      class='text-xs ml-1'
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ locale.code.toUpperCase() }}</nuxt-link>
  </div>
</template>

<script>
import LanguageIcon from '@/assets/icons/language.svg'
export default {
  components: { LanguageIcon },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
}
</script>
