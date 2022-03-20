<template>
  <content-wrapper class="pt-16">
    <page-heading title="Changelog"/>
    <template v-if="releaseList" v-for="release in releaseList">
      <div v-if="!release.draft" class="mb-4 md:mb-8 bg-gray-100 border-gray-200 border-2 px-6 md:px-8 pb-8 rounded-lg" :key="release.id">
        <header class="block md:flex justify-between items-center">
          <h2 class="text-md mb-4 mt-8">
            <nuxt-link :to="localePath(`/download/${release.name}`)" class="flex flex-col">
              <span class="text-3xl font-bold rounded-lg text-bright-pink"> {{ release.name }}</span>
              <span class="text-sm font-regular">{{ getLocaleDate(release.published_at) }}</span>
            </nuxt-link>
          </h2>
          <nav class="flex justify-between md:justify-center items-center space-x-6 my-6 md:my-0">
            <nuxt-link :to="localePath(`/download/${release.name}`)" class="flex justify-center items-center space-x-2 link-hover">
              <download-icon class="w-5 h-5"/>
              <span>Download</span>
            </nuxt-link>
            <goto-github :page="`https://github.com/lostdesign/linked/releases/${release.tag}`"/>
          </nav>
        </header>
        <article class="prose prose-sm md:prose-base" style="max-width:100%!important" v-html="release.body"></article>
      </div>
    </template>
    <github-error :error="error"/>
  </content-wrapper>
</template>

<script>
import DownloadIcon from '@/assets/svg/download.svg?inline=true'
import { checkRateLimit } from '@/lib/github'
import { DateTime } from 'luxon'
import { marked } from 'marked'


export default {
  components: { DownloadIcon },
  async asyncData() {
    let error = null

    try {
      const response = await fetch('https://api.github.com/repos/lostdesign/linked/releases?per_page=100')
      const isRateLimited = checkRateLimit(response)

      if (isRateLimited.error) {
        error = isRateLimited
        throw new Error(isRateLimited.message)
      }

      const releases = await response.json()
      const releaseList = releases.map(release => {
        return {
          id: release.id,
          name: release.name,
          tag: release.tag_name,
          body: marked(release.body ?? ''),
          url: release.html_url,
          published_at: release.published_at,
          prerelease: release.prerelease
        }
      })

      return {
        releaseList,
        error: null
      }
    } catch (e) {
      return {
        releaseList: null,
        error,
      }
    }
  },
  methods: {
    getLocaleDate(date) {
      return DateTime
        .fromISO(date)
        .setLocale(this.$i18n.locale)
        .toLocaleString({day: 'numeric', month: 'long', year: 'numeric'})
    }
  }
}
</script>
