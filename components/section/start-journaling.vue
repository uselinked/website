<template>
  <content-wrapper>
    <div class="flex flex-col md:flex-row space-y-2 md:space-x-16 justify-between items-center">
      <div class="w-full md:w-3/5">
        <h2 class="text-4xl font-extrabold text-gray-900">{{ $t('title')}}</h2>
        <p class="mt-4 text-lg leading-9 text-gray-500">{{ $t('subline')}}</p>
      </div>
      <div class="w-full md:w-2/5">
        <div class="flex flex-col items-center space-y-4 mt-8 self-end">
          <template v-for="(os, index) in downloadButtons">

            <template v-if="os.link">
              <a
                @click="trackIndexOsDownloadButton(os.name)"
                :href="os.link"
                class="flex w-full justify-center items-center space-x-2 text-center col-start-2 self-start bg-linked pl-6 pr-8 py-2 rounded-lg text-lg font-bold text-white hover:bg-linked-600"
                download
              >
                <component :is="os.icon" :class="os.iconFix" />
                <span>{{ os.name }}</span>
              </a>

            </template>
            <template v-else>
              <nuxt-link
                @click="trackIndexOsDownloadButton(os.name)"
                :to="localePath('download')"
                class="flex w-full justify-center items-center space-x-2 text-center col-start-2 self-start bg-linked pl-6 pr-8 py-2 rounded-lg text-lg font-bold text-white hover:bg-linked-600"
                download
              >
                <component :is="os.icon" :class="os.iconFix" />
                <span>{{ os.name }}</span>
              </nuxt-link>
            </template>
          </template>
        </div>
        <i18n path="missing" tag="p" class="mt-2 text-gray-500">
          <nuxt-link class="link-hover font-bold" :to="localePath('download')">{{ $t('find')}}</nuxt-link>
        </i18n>
      </div>
    </div>
  </content-wrapper>
</template>

<script>
import IconLinux from '@/assets/svg/operating-systems/linux.svg?inline=true'
import IconMacOs from '@/assets/svg/operating-systems/macos.svg?inline=true'
import IconWindows from '@/assets/svg/operating-systems/windows.svg?inline=true'

export default {
  components: { IconLinux, IconMacOs, IconWindows },
  props: {
    assets: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      downloadButtons: [
        { name: 'MacOS', icon: IconMacOs, iconFix: '-mt-1', link: this.$props.assets?.macos[0]?.browser_download_url ?? null },
        { name: 'Windows', icon: IconWindows, iconFix: '-mt-0.5', link: this.$props.assets?.windows[0]?.browser_download_url ?? null },
        { name: 'Linux' , icon: IconLinux, iconFix: '-mt-0.5', link: this.$props.assets?.linux[0]?.browser_download_url ?? null }
      ]
    }
  },
  methods: {
    trackIndexOsDownloadButton(os) {
      const osButtons = {
        'MacOS': 'HMRC99CJ',
        'Windows': 'BQN6MIYU',
        'Linux': 'XRNNC7PG'
      }
      this.$fathom.trackGoal(osButtons[os], 0)
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Download linked and start reaping the benefits of daily journaling",
    "subline": "Journaling is fundamentally an organizational system. Keeping a journal can help us organize an event in our minds and make sense of our days. By writing things down, our working memory improves because our brains are relieved of the arduous task of processing too much information.",
    "missing": "Missing yours? {0}",
    "find": "Find more downloads here."
  },
  "de": {
    "title": "Lade linked herunter und profitiere von den Vorteilen des täglichen Journaling",
    "subline": "Das Führen eines Tagebuchs ist im Grunde ein Organisationssystem. Das Führen eines Tagebuchs kann uns helfen, ein Ereignis im Kopf zu ordnen und unserem Tag einen Sinn zu geben. Wenn wir Dinge aufschreiben, verbessert sich unser Arbeitsgedächtnis, weil unser Gehirn von der mühsamen Aufgabe entlastet wird, zu viele Informationen zu verarbeiten.",
    "missing": "Vermisst du etwas? {0}",
    "find": "Mehr Downloads findest Du hier."
  }
}
</i18n>
