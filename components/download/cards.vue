<template>
  <div>
    <div class="block space-y-4 md:space-y-0 md:flex justify-between items-center mb-12">
      <p>
        <span class="text-md rounded bg-linked text-white py-1 px-2 mr-4">Version {{ $props.release.name }}</span>
        <i18n path="released" tag="span" class="text-gray-600">
          <template v-slot:date>
            {{ daysSince($props.release.published_at) }}
          </template>
        </i18n>
      </p>
      <goto-github :page="$props.release.html_url" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
      <template v-for="asset in getFilteredAssets($props.release.assets)">
        <a :href="asset.browser_download_url" class="bg-gray-50 border-gray-200 border-2 p-4 md:p-8 rounded-lg flex items-center space-x-4 group hover:border-linked hover:text-bright-pink" :key="asset.id">
          <download-icon class="w-5 h-5"/>
          <div>
            <h2 class="text-xl">{{ getOperatingSystemName(asset.name) }}</h2>
            <p class="text-xs">{{ getHumanFileSize(asset.size) }} • {{ asset.name }}</p>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import DownloadIcon from '@/assets/svg/download.svg?inline=true'

export default {
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  methods: {
    getHumanFileSize(bytes, si = true, dp = 1) {
      const thresh = si ? 1000 : 1024;

      if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
      }

      const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
      let u = -1;
      const r = 10 ** dp;

      do {
        bytes /= thresh;
        ++u;
      } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


      return bytes.toFixed(dp) + ' ' + units[u];
    },
    getOperatingSystemName(fileName) {
      const extension = fileName.split('.')
      const extensions = {
        'dmg': 'MacOS',
        'exe': 'Windows Portable',
        'deb': 'Debian',
        'AppImage': 'Linux',
        'rpm': 'Fedora',
        'pacman': 'Arch',
      }

      if(extension[0].includes('Setup')) {
        return 'Windows Installer'
      }

      return extensions[extension[extension.length-1]]
    },
    sumArray(array) {
      if (array.length === 0) return 0
      return array.reduce((accumulator, curr) => accumulator + curr)
    },
    daysSince(date) {
      return DateTime
        .fromISO(date)
        .toRelative({locale: this.$i18n.locale})
    },
    localeDate(date) {
      return DateTime
        .fromISO(date)
        .setLocale(this.$i18n.locale)
        .toLocaleString({day: 'numeric', month: 'long', year: 'numeric'})
    },
    getFilteredAssets(assets) {
      return assets
        .filter(asset => !asset.name.includes('.yml'))
        .filter(asset => !asset.name.includes('.blockmap'))
        .filter(asset => !asset.name.includes('.zip'))
    }
  },
  components: { DownloadIcon }
}
</script>

<i18n>
{
  "en": {
    "released": "released {date}"
  },
  "de": {
    "released": "{date} veröffentlicht"
  }
}
</i18n>
