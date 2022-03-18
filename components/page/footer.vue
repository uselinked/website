<template>
  <footer class="bg-linked-700 mt-12" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="mb-8 pb-8 md:flex md:items-center md:justify-between">
        <social-buttons />
        <p class="mt-8 text-base text-gray-100 md:mt-0 md:order-1">&copy; 2022 linked - All rights reserved.</p>
      </div>
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-4">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">Project</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <template v-for="link in links.project">
                    <li>
                      <nuxt-link :to="link" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                        {{ link }}
                      </nuxt-link>
                    </li>
                  </template>
                </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">Support</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.support">
                  <li>
                    <nuxt-link :to="link" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                      {{ link }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">Legal</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.legal">
                  <li>
                    <nuxt-link :to="link" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                      {{ link }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">Contribution</h3>
              <ul role="list" class="mt-4 space-y-4">
                <template v-for="link in links.contribution">
                  <li>
                    <nuxt-link :to="link" class="text-base text-gray-200 hover:text-linked-200 capitalize">
                      {{ link }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 xl:mt-0">
          <h3 class="text-sm font-semibold text-gray-100 tracking-wider uppercase">Language &amp; Currency</h3>
          <form class="mt-4 sm:max-w-xs">
            <fieldset class="w-full">
              <label for="language" class="sr-only">Language</label>
              <div class="relative">
                <select id="language" name="language" class="appearance-none block w-full bg-none bg-linked-600 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm">
                  <option selected>English</option>
                  <option>German</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                  <chevron-down />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ChevronDown from '@/assets/svg/chevron-down.svg?inline=true'

export default {
  components: { ChevronDown },
  data() {
    return {
      links: {
        project: ['about', 'blog', 'roadmap' ],
        support: [ 'Community', 'Guides', 'FAQ' ],
        legal: [ 'Privacy', 'Terms', 'License' ],
        contribution: ['donate', 'translations', 'feedback' ]
      }
    }
  }
}
</script>
