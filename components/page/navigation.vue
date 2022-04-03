<template>
  <content-wrapper>
    <nav class="bg-white mt-4">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link :to="localePath('index')" class="flex justify-center items-center space-x-4">
              <logo class="w-10 h-10 rounded" />
              <p class="text-xl font-bold">linked</p>
            </nuxt-link>
          </div>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <nuxt-link
              @click.native="trackClick('9N6TIFUD', 0)"
              :to="localePath('sponsor')"
              class="hover:bg-black/5 hover:text-linked font-medium text-lg text-gray-900 space-x-3 transition-all duration-300 inline-flex items-center justify-center py-2 px-3 rounded-lg"
            >
              <icon-donate />
              <span>Sponsor</span>
            </nuxt-link>
            <nuxt-link
              @click.native="trackClick('LCNP5VTH', 0)"
              :to="localePath('download')"
              class="hover:bg-black/5 hover:text-linked font-medium text-lg text-gray-900 space-x-3 transition-all duration-300 inline-flex items-center justify-center py-2 px-3 rounded-lg"
            >
              <icon-download-cloud />
              <span>Download</span>
            </nuxt-link>
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-linked focus:outline-none focus:ring-2 focus:ring-inset focus:ring-linked" aria-controls="mobile-menu" aria-expanded="false" @click="navOpen = !navOpen">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!navOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-if="navOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div class="sm:hidden" id="mobile-menu" v-if="navOpen">
        <div class="pl-0 px-2 pt-2 pb-3 space-y-2">
          <nuxt-link
            @click.native="trackClick('9N6TIFUD', 0)"
            :to="localePath('sponsor')"
            class="hover:bg-black/5 hover:text-linked font-medium text-lg text-gray-900 space-x-3 transition-all duration-300 inline-flex items-center pl-0 py-2 px-3 rounded-lg w-full"
          >
            <icon-donate />
            <span>Sponsor</span>
          </nuxt-link>
          <nuxt-link
            @click.native="trackClick('LCNP5VTH', 0)"
            :to="localePath('download')"
            class="hover:bg-black/5 hover:text-linked font-medium text-lg text-gray-900 space-x-3 transition-all duration-300 inline-flex items-center pl-0 py-2 px-3 rounded-lg w-full"
          >
            <icon-download-cloud />
            <span>Download</span>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </content-wrapper>
</template>

<script>
import Logo from '@/assets/svg/logo.svg?inline=true'
import IconDownloadCloud from "@/assets/svg/download-cloud.svg?inline=true";
import IconDonate from "@/assets/svg/donate.svg?inline=true";

export default {
  components: {Logo, IconDownloadCloud, IconDonate},
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    trackClick(goal) {
      if (process.client) {
        this.$fathom.trackGoal(goal, 0)
      }
    }
  }
}
</script>
