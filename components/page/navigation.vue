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
          <!--<nuxt-link
            @click.native="trackClick('QFYXOLNL')"
            :to="localePath('changelog')"
            class="link-hover"
          >
            Changelog
          </nuxt-link>-->
          <nuxt-link
            @click.native="trackClick('9N6TIFUD', 0)"
            :to="localePath('donate')"
            class="hover:bg-black/5 hover:text-linked space-x-2 transition-all duration-300 inline-flex items-center justify-center py-2 px-3 rounded-lg"
          >
            <icon-donate />
            <span>Donate</span>
          </nuxt-link>
          <nuxt-link
            @click.native="trackClick('LCNP5VTH', 0)"
            :to="localePath('download')"
            class="hover:bg-black/5 hover:text-linked space-x-2 transition-all duration-300 inline-flex items-center justify-center py-2 px-3 rounded-lg"
          >
            <icon-download-cloud />
            <span>Download</span>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/svg/logo.svg?inline=true'
import IconDownloadCloud from "@/assets/svg/download-cloud.svg?inline=true";
import IconDonate from "@/assets/svg/donate.svg?inline=true";

export default {
  components: { Logo, IconDownloadCloud, IconDonate },
  methods: {
    trackClick(goal) {
      if (process.client) {
        this.$fathom.trackGoal(goal, 0)
      }
    }
  }
}
</script>
