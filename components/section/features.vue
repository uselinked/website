<template>
  <section>
    <content-wrapper>
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">{{ $t('title') }}</h2>
        <p class="mt-4 text-lg text-gray-500">{{ $t('subline') }}</p>
      </div>
      <div
        class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <template v-for="(feature, index) in features">
          <div class="relative" :key="index">
            <div>
              <component :is="feature.icon" class="absolute h-6 w-6 text-linked"></component>
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ $t(`feature.${feature.translationKey}.title`) }}</p>
              <div class="mt-2 ml-9 text-base text-gray-500">{{ $t(`feature.${feature.translationKey}.detail`) }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="mb-24 mt-16">
        <h2 class="text-3xl font-extrabold text-gray-900">{{ $t('much_more') }}</h2>
        <p class="mt-4 text-lg text-gray-500">{{ $t('improving') }}</p>
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
        {translationKey: 'editor', icon: EditorIcon},
        {translationKey: 'search', icon: SearchIcon},
        {translationKey: 'offline', icon: OfflineIcon},
        {translationKey: 'keyboard', icon: KeyboardIcon},
        {translationKey: 'themes', icon: ThemeIcon},
        {translationKey: 'language', icon: EarthIcon},
        {translationKey: 'design', icon: DesignIcon},
        {translationKey: 'community', icon: HeartIcon},
        // { title: 'Links days and notes', icon: SearchIcon, detail: 'Want to reference a day in the future or past? Quickly jump between connected days.' },
        // { title: 'Cross-platform sync', icon: SearchIcon, detail: 'Keep your notes synced between your devices, and always have your notes with you.' },
        // { title: 'Shared notes', icon: SearchIcon, detail: 'Collaborate and share notes with your team, your friends or your family.' },
        // { title: 'Desktop, Mobile and web', icon: SearchIcon, detail: 'Use Linked wherever you are.' },
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

<i18n>
{
  "en": {
    "title": "Power and simplicity",
    "subline": "The features you want, the easy-to-use interface you need. Daily Journaling done right.",
    "much_more": "And much more...",
    "improving": "We're working hard to make linked even better. So if there is a feature you'd like to see in the app, we'd like to hear about it.",
    "feature": {
      "editor": {
        "title": "The editor you need",
        "detail": "Complete control over the appearance of your writing, with extras like lists and todos."
      },
      "themes": {
        "title": "Custom themes",
        "detail": "Choose dark or light mode and easily switch between."
      },
      "keyboard": {
        "title": "Keyboard shortcuts",
        "detail": "Complete keyboard control to navigate through the app."
      },
      "offline": {
        "title": "Offline first",
        "detail": "There is no need for an internet connection - your data is stored locally."
      },
      "language": {
        "title": "We speak your language",
        "detail": "The linked interface has been translated into 11 languages, with more coming soon."
      },
      "design": {
        "title": "Minimal design",
        "detail": "Linked's minimal design helps you focus on writing, with the other features available only when you need them."
      },
      "search": {
        "title": "Search it all",
        "detail": "Use the full-text search to find what was once written down, lightning-fast."
      },
      "community": {
        "title": "Community driven",
        "detail": "Shape how linked will look like in the future, together as a community."
      }
    }
  },
  "de": {
    "title": "Schlicht und Stark",
    "subline": "Die Funktionen, die Du brauchst, in einer benutzerfreundlichen Oberfläche. Daily Journaling in gut.",
    "much_more": "Und vieles mehr...",
    "improving": "Wir arbeiten hart daran, linked noch besser zu machen. Wenn es also eine Funktion gibt, die Du gerne in der App sehen würdest, würden wir uns freuen, davon zu hören.",
    "feature": {
      "editor": {
        "title": "Der Editor den du brauchst",
        "detail": "Vollständige Kontrolle über das Erscheinungsbild deiner Notizen, mit Extras wie Listen, ToDos, Text Formatierung und mehr."
      },
      "themes": {
        "title": "Benutzerdefinierte Designs",
        "detail": "Dunkel oder Hell? Wechsel einfach zwischen den Design Modis."
      },
      "keyboard": {
        "title": "Tastenkürzel",
        "detail": "Vollständige Tastatursteuerung für die Navigation durch die App. Maximale Effizienz."
      },
      "offline": {
        "title": "Offline zuerst und völlig privat",
        "detail": "Es ist keine Internetverbindung erforderlich - Deine Daten werden lokal gespeichert."
      },
      "language": {
        "title": "Wir sprechen deine Sprache",
        "detail": "Die Oberfläche wurde in 11 Sprachen übersetzt, und weitere werden folgen."
      },
      "design": {
        "title": "Minimalistisches design",
        "detail": "Das minimale Design hilft Dir, sich auf das wesentliche zu konzentrieren, während anderen Funktionen nur dann zur Verfügung stehen, wenn Du sie brauchst."
      },
      "search": {
        "title": "Durchsuche alles",
        "detail": "Nutze die Volltextsuche, um blitzschnell zu finden, was einmal aufgeschrieben wurde. Nichts geht verloren."
      },
      "community": {
        "title": "Community gesteuert",
        "detail": "Gestalte gemeinsam die Zukunft von linked als Gemeinschaft - denn linked ist für dich."
      }
    }
  }
}
</i18n>
