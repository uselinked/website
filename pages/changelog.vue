<template>
  <content-wrapper class="pt-16">
    <page-heading title="Changelog"/>
    <div class="flow-root mt-12">
      <ul role="list" class="-mb-8">
        <template v-if="releaseList" v-for="(release, index) in releaseList">
          <li :key="index">
            <div class="relative pb-8">
              <span v-if="releaseList.length-1 !== index" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 hidden md:block" aria-hidden="true"></span>
              <div class="relative flex space-x-0 md:space-x-3">
                <icon-github class="h-8 w-8 rounded-full bg-linked 400 flex items-center justify-center ring-8 ring-white text-white hidden md:block" />
                <div class="min-w-0 flex-1 block md:flex justify-between space-x-0 md:space-x-4">
                  <div>
                    <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-3 sm:space-y-0 mb-2 sm:mb-0">
                      <nuxt-link :to="localePath(`/download/${release.name}`)" class="link-hover">
                        <span class="text-3xl font-bold text-gray-900">{{ release.name }}</span>
                      </nuxt-link>
                      <nuxt-link :to="localePath(`/download/${release.name}`)" class="flex items-center space-x-2 link-hover">
                        <icon-download class="w-5 h-5"/>
                        <span>Download</span>
                      </nuxt-link>
                      <goto-github :page="`https://github.com/lostdesign/linked/releases/${release.tag}`"/>
                    </div>
                    <div class="text-lg font-regular whitespace-nowrap text-gray-500 block md:hidden">
                      <time :datetime="getLocaleDate(release.published_at)">{{ getLocaleDate(release.published_at) }}</time>
                    </div>
                    <article class="mt-4 mb-6 prose prose-sm md:prose-base" style="max-width:100%!important" v-html="release.body"></article>
                  </div>
                  <div class="text-lg font-regular text-right whitespace-nowrap text-gray-500 hidden md:block">
                    <time :datetime="getLocaleDate(release.published_at)">{{ getLocaleDate(release.published_at) }}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <github-error :error="error"/>
  </content-wrapper>
</template>

<script>
import IconDownload from '@/assets/svg/download.svg?inline=true'
import IconGithub from '@/assets/svg/logos/github.svg?inline=true'
import { checkRateLimit } from '@/lib/github'
import { DateTime } from 'luxon'
import { marked } from 'marked'


export default {
  components: { IconDownload, IconGithub },
  async asyncData({ $config: { githubToken }}) {
    let error = null

    try {
      const response = await fetch('https://api.github.com/repos/lostdesign/linked/releases?per_page=100', {
        headers: {
          Authorization: 'Bearer ' + githubToken
        }
      })
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
        .toLocaleString({day: '2-digit', month: 'short', year: '2-digit'})
    }
  }
}
</script>
