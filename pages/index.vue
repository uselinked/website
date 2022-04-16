<template>
  <main>
    <section-hero class="pt-16"/>
    <section-testimonial/>
    <section-features/>
    <section-research/>
    <section-start-journaling :assets="assets"/>
    <section-faq/>
  </main>
</template>

<script>
import ItsFree from '@/assets/svg/its-free.svg?inline'
import {fetchRelease} from '@/lib/github'

export default {
  name: 'IndexPage',
  components: {ItsFree},
  async asyncData({$config: {githubToken}}) {
    const {release, error, fallbackUrl} = await fetchRelease(githubToken)

    let assets

    if (release?.assets) {
      assets = {
        windows: release.assets
          .filter(asset => asset.name.includes('Setup'))
          .filter(asset => !asset.name.includes('blockmap')),
        macos: release.assets
          .filter(asset => asset.name.includes('dmg'))
          .filter(asset => !asset.name.includes('blockmap')),
        linux: release.assets
          .filter(asset => asset.name.includes('AppImage'))
      }
    }

    return {
      assets: assets ?? null,
      error,
      fallbackUrl,
    }
  },
  head() {
    return {
      title: 'Get linked and start journaling 📚',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://uselinked.com'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Get linked and start journaling 📚'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Daily journaling, without distraction! An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.'
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Daily journaling, without distraction! An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://uselinked.com/images/linked-banner.jpg'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Preview image of linked.'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://uselinked.com/images/logo.png',
        },
      ]
    }
  }
}
</script>
