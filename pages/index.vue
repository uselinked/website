<template>
  <main>
    <section-hero class="pt-16" />
    <section-testimonial />
    <section-features />
    <section-research />
    <section-start-journaling />
    <section-faq />
  </main>
</template>

<script>
import ItsFree from '@/assets/svg/its-free.svg?inline'

export default {
  name: 'IndexPage',
  components: {ItsFree},
  head() {
    return {
      title: this.$t('title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        },
      ]
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "linked - daily journaling without distraction",
    "description": "An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember."
  },
  "de": {
    "title": "linked - Tägliches journaling ohne Ablenkung",
    "description": "Eine einfache, ablenkungsfreie Möglichkeit, Ihre Gedanken festzuhalten, zu ordnen und die Dinge zu behalten, an die Sie sich erinnern wollen."
  }
}
</i18n>
