<template>
  <footer class="bg-linked-600 mt-12" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="mb-8 pb-8 md:flex md:items-center md:justify-between">
        <social-buttons/>
        <p class="mt-8 text-base text-gray-100 md:mt-0 md:order-1">&copy; 2022 linked - All rights reserved.</p>
      </div>
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-4">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">{{ $t('title.project') }}</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.project">
                  <li>
                    <nuxt-link :to="localePath(link)" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                      {{ $t(`link.${link}`) }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">{{ $t('title.support') }}</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.support">
                  <li>
                    <nuxt-link :to="localePath(link)" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                      {{ $t(`link.${link}`) }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">{{
                  $t('title.contribution')
                }}</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.contribution">
                  <li>
                    <template v-if="typeof link === 'object'">
                      <nuxt-link
                        :to="localePath(link.route)"
                        @click.native="trackClick(link.code)"
                        class="text-base text-gray-200 hover:text-linked-200 capitalize"
                      >
                        {{ $t(`link.${link.route}`) }}
                      </nuxt-link>
                    </template>
                    <template v-else>
                      <nuxt-link :to="localePath(link)"
                                 class="text-base text-gray-200 hover:text-linked-200 capitalize">
                        {{ $t(`link.${link}`) }}
                      </nuxt-link>
                    </template>
                  </li>
                </template>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">{{ $t('title.legal') }}</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.legal">
                  <li>
                    <nuxt-link :to="localePath(link)" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                      {{ $t(`link.${link}`) }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 xl:mt-0">
          <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">{{ $t('title.language') }}</h3>
          <language-dropdown/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ChevronDown from '@/assets/svg/chevron-down.svg?inline=true'

export default {
  components: {ChevronDown},
  data() {
    return {
      links: {
        project: [
          //'about',
          //'blog',
          //'roadmap',
          'changelog'
        ],
        support: [
          'community',
          //'faq',
          //'guides',
          //'media'
        ],
        legal: [
          'legal',
          'privacy',
          //'terms',
          'license'
        ],
        contribution: [
          {route: 'sponsor', code: 'WPSZXYCR'},
          //'feedback',
          //'translations',
          //'development'
        ]
      }
    }
  },
  methods: {
    trackClick(code) {
      this.$fathom.trackGoal(code, 0)
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": {
      "project": "Project",
      "support": "Support",
      "legal": "Legal",
      "contribution": "Contribution",
      "language": "Language"
    },
    "language": {
      "en": "English",
      "de": "German"
    },
    "link": {
      "about": "🚧 About",
      "blog": "Blog",
      "roadmap": "🚧 Roadmap",
      "community": "Community",
      "guides": "Guides",
      "faq": "FAQ",
      "privacy": "Privacy",
      "terms": "🚧 Terms",
      "license": "License",
      "sponsor": "Sponsor",
      "translations": "🚧 Translations",
      "feedback": "🚧 Feedback",
      "changelog": "Changelog",
      "legal": "Legal",
      "media": "🚧 Media",
      "development": "🚧 Development"
    }
  },
  "de": {
    "title": {
      "project": "Projekt",
      "support": "Support",
      "legal": "Rechtliches",
      "contribution": "Beitragen",
      "language": "Sprache"
    },
    "language": {
      "en": "Englisch",
      "de": "Deutsch"
    },
    "link": {
      "about": "🚧 Über",
      "blog": "Blog",
      "roadmap": "🚧 Roadmap",
      "community": "Community",
      "guides": "Handbuch",
      "faq": "FAQ",
      "privacy": "Datenschutz",
      "terms": "🚧 Bedingungen",
      "license": "Lizenz",
      "sponsor": "Sponsor",
      "translations": "🚧 Übersetzungen",
      "feedback": "🚧 feedback",
      "changelog": "Änderungen",
      "legal": "Impressum",
      "media": "🚧 Medien",
      "development": "🚧 Entwicklung"
    }
  }
}
</i18n>
