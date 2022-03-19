<template>
  <content-wrapper>
    <header class="text-center">
      <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl p-1 text-linked">
        {{  $t('daily_journaling') }}
        <span class="block text-gray-900">{{  $t('without_distraction') }}</span>
      </h1>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">{{ $t('subline')}}</p>
    </header>
    <div class="flex justify-center items-center mb-12 mt-8">
      <div class="md:grid md:grid-cols-3 gap-0 block">
        <nuxt-link
          @click.native="$fathom.trackGoal('BHDSXIL0', 0)"
          to="/download"
          class="text-center col-start-2 self-start bg-linked px-6 py-3 m-2 rounded-lg text-lg md:text-2xl font-bold text-white hover:bg-linked-600"
        >
          {{ $t('start_today')}}
        </nuxt-link>
        <component :is="getCtaSvg" class="hidden md:block opacity-75" />
      </div>
    </div>
    <div class="flex justify-center">
      <img src="/images/linked-app.png" alt="screenshot of linked" class="w-full md:w-1/2" lazy/>
    </div>
  </content-wrapper>
</template>

<script>
import ItsFree from '@/assets/svg/its-free.svg?inline=true'
import EsIstKostenlos from '@/assets/svg/kostenlos.svg?inline=true'

export default {
  components: { ItsFree, EsIstKostenlos },
  computed: {
    getCtaSvg() {
      return this.$i18n.locale === 'en'
        ? ItsFree
        : EsIstKostenlos
    }
  }
}
</script>

<i18n>
{
  "en": {
    "daily_journaling": "Daily journaling",
    "without_distraction": "without distraction.",
    "subline": "An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.",
    "start_today": "Start journaling today"
  },
  "de": {
    "daily_journaling": "Tägliches Journaling",
    "without_distraction": "ohne Ablenkung.",
    "subline": "Eine einfache, ablenkungsfreie Möglichkeit, Ihre Gedanken festzuhalten, zu ordnen und die Dinge zu behalten, an die Sie sich erinnern wollen.",
    "start_today": "Starte jetzt"
  }
}
</i18n>
