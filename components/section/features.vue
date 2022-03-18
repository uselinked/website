<template>
  <section>
    <content-wrapper>
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Power and simplicity</h2>
        <p class="mt-4 text-lg text-gray-500">
          The features you want, the easy-to-use interface you need. Daily Journaling done right.
        </p>
      </div>
      <div class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <template v-for="(feature, index) in features">
          <div class="relative" :key="index">
            <div>
              <component :is="feature.icon" class="absolute h-6 w-6 text-linked"></component>
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.title }}</p>
              <div class="mt-2 ml-9 text-base text-gray-500">{{ feature.detail }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="mb-24 mt-16">
        <h2 class="text-3xl font-extrabold text-gray-900">And much more...</h2>
        <p class="mt-4 text-lg text-gray-500">
          We're working hard to make linked even better. So if there is a feature you'd like to see in the app, we'd like to hear about it.
        </p>
      </div>
    </content-wrapper>
  </section>
</template>

<script>
import EditorIcon from '@/assets/svg/editor.svg?inline=true'
import ThemeIcon from '@/assets/svg/theme.svg?inline=true'
import KeyboardIcon from '@/assets/svg/keyboard.svg?inline=true'
import OfflineIcon from '@/assets/svg/offline.svg?inline=true'
import EarthIcon from '@/assets/svg/earth.svg?inline=true'
import DesignIcon from '@/assets/svg/design.svg?inline=true'
import SearchIcon from '@/assets/svg/search.svg?inline=true'
import HeartIcon from '@/assets/svg/heart.svg?inline=true'
import BulbIcon from '@/assets/svg/bulb.svg?inline=true'

export default {
  data() {
    return {
      features: [
        { title: 'The editor you need', icon: EditorIcon, detail: 'Complete control over the appearance of your writing, with extras like lists and todos.' },
        { title: 'Custom themes', icon: ThemeIcon, detail: 'Choose dark or light mode and easily switch between.' },
        { title: 'Keyboard shortcuts', icon: KeyboardIcon, detail: 'Complete keyboard control to navigate through the app.' },
        { title: 'Offline first', icon: OfflineIcon, detail: 'There is no need for an internet connection - your data is stored locally (take that Notion).' },
        { title: 'We speak your language', icon: EarthIcon, detail: 'The linked interface has been translated into 11 languages, with more coming soon.' },
        { title: 'Minimal design', icon: DesignIcon, detail: 'Linked\'s minimal design helps you focus on writing, with the other features available only when you need them.' },
        { title: 'Search it all', icon: SearchIcon, detail: 'Use the full-text search to find what was once written down, lightning-fast.' },
        { title: 'Community driven', icon: HeartIcon, detail: 'Shape how linked will look like in the future, together as a community.' },
        // { title: 'Links days and notes', icon: SearchIcon, detail: 'Want to reference a day in the future or past? Quickly jump between connected days.' },
        // { title: 'Cross-platform sync', icon: SearchIcon, detail: 'Keep your notes synced between your devices, and always have your notes with you.' },
        // { title: 'Shared notes', icon: SearchIcon, detail: 'Collaborate and share notes with your team, your friends or your family.' },
        // { title: 'Desktop, Mobile and web', icon: SearchIcon, detail: 'Use Linked wherever you are.' },
        // { title: 'And much more...', icon: BulbIcon, detail: 'We\'re working hard to make linked even better. So if there is a feature you\'d like to see in the app, we\'d like to hear about it.' },
      ]
    }
  },
  components: {
    EditorIcon,
    ThemeIcon,
    KeyboardIcon,
    OfflineIcon,
    EarthIcon,
    DesignIcon,
    SearchIcon,
    HeartIcon,
    BulbIcon,
  }
}
</script>
