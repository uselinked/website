<template>
  <main>
    <section-hero class="pt-16" />
    <section-testimonial />
    <section-features />
    <section-research />
    <section-start-journaling :assets="assets" />
    <section-faq />
  </main>
</template>

<script>
import ItsFree from '@/assets/svg/its-free.svg?inline'
import { fetchRelease } from '@/lib/github'

export default {
  name: 'IndexPage',
  components: { ItsFree },
  async asyncData() {
    const { release, error, fallbackUrl} = await fetchRelease()

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
  }
}
</script>
