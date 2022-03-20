<template>
  <nav class="sticky top-0 z-50 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white/95">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <nuxt-link :to="localePath('index')" class="flex justify-center items-center space-x-4">
            <logo class="w-10 h-10 rounded" />
            <p class="text-xl font-bold">linked</p>
          </nuxt-link>
        </div>
        <ul class="space-x-6">
          <nuxt-link
            @click.native="trackClick('QFYXOLNL')"
            :to="localePath('changelog')"
            class="link-hover"
          >
            Changelog
          </nuxt-link>
          <nuxt-link
            @click.native="trackClick('LCNP5VTH', 0)"
            :to="localePath('download')"
            class="link-hover"
          >
            Download
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/svg/logo.svg?inline'

export default {
  components: { Logo },
  methods: {
    trackClick(goal) {
      if (process.client) {
        this.$fathom.trackGoal(goal, 0)
      }
    }
  }
}
</script>
