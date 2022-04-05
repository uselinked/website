<template>
  <div>
    <div v-if="contributors" class="space-y-4 sm:space-y-8 mt-12">
      <div class="space-y-4 sm:space-y-8">
        <div class="space-y-5 sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{ $t('maintainer.title') }}</h2>
          <p class="text-xl text-gray-500">{{ $t('maintainer.subline') }}</p>
        </div>
        <a
          target="_blank"
          :href="getMaintainer[0].html_url"
          ref="norel noopener"
          class="inline-flex flex-col m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4"
        >
          <img class="mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24" :src="getMaintainer[0].avatar_url" :alt="`${getMaintainer[0].login} profile image`" />
          <div class="space-y-4">
            <div class="text-center font-medium lg:text-sm">
              <h3 class="text-base font-bold">{{ getMaintainer[0].login }}</h3>
              <p class="text-xs text-linked">{{ getMaintainer[0].contributions }} commits</p>
            </div>
          </div>
        </a>
      </div>
      <div class="space-y-5 sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{ $t('lovely_contributors') }}</h2>
        <p class="text-xl text-gray-500">{{ $t('thanks') }}</p>
      </div>
      <ul role="list" class="flex flex-wrap">
        <template v-for="(contributor, index) in $props.contributors">
          <a
            v-if="contributor.login !== 'lostdesign'"
            target="_blank"
            :href="contributor.html_url"
            ref="norel noopener"
            class="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 flex flex-col justify-center grow shrink-0 self-center items-center m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4"
          >
            <li>
              <img class="mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24" :src="contributor.avatar_url" :alt="`${contributor.login} profile image`" />
              <div class="space-y-4">
                <div class="text-center font-medium lg:text-sm">
                  <h3 class="text-base font-bold">{{ contributor.login }}</h3>
                  <p class="text-xs text-linked">{{ contributor.contributions }} commits</p>
                </div>
              </div>
            </li>
          </a>
        </template>
      </ul>
    </div>
    <github-error v-if="error" :error="error" />
  </div>
</template>

<script>
export default {
  props: {
    contributors: {
      type: Array,
      default: null
    },
    error: {
      type: Object,
      default: null,
    }
  },
  computed: {
    getMaintainer() {
      return this.$props.contributors.filter(contributor => contributor.login === 'lostdesign')
    }
  }
}
</script>

<i18n>
{
  "en": {
    "maintainer": {
      "title": "Maintainer",
      "subline": "The head behind the project."
    },
    "lovely_contributors": "Contributors",
    "thanks": "Thanks to the awesome people that have contributed to linked."
  },
  "de": {
    "maintainer": {
      "title": "Maintainer",
      "subline": "Der Kopf hinter dem Projekt."
    },
    "lovely_contributors": "Mitwirkende",
    "thanks": "Vielen Dank an alle, die zu linked beigetragen haben."
  }
}
</i18n>
