<template>
  <content-wrapper>
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-linked font-semibold tracking-wide uppercase">❤️</span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {{ $t('title') }}
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">{{ $t('tag_line') }}</p>
          <p class="mt-8 text-xl text-gray-500 leading-8">{{ $t('team') }}</p>
          <p class="mt-8 text-xl text-gray-500 leading-8">{{ $t('goal') }}</p>
          <p class="mt-8 text-xl text-gray-500 leading-8">{{ $t('sponsoring') }}</p>
          <p class="mt-8 text-xl text-gray-500 leading-8">{{ $t('access') }}</p>
        </div>
        <div class="text-lg max-w-prose mx-auto flex space-x-4 mt-8">
          <a
            href="https://github.com/sponsors/lostdesign"
            class="text-lg flex-1 flex items-center justify-center px-5 py-3 border border-transparent shadow font-medium rounded-md text-white bg-linked-500 hover:bg-linked-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-linked-700 focus:ring-white mt-6 lg:mt-0 sm:flex-shrink-0"
            @click="trackClick('ZYHYTJFM', 0)"
          >
            <icon-github class="w-6 h-6 mr-4"/>
            {{ $t('sponsor_github') }}
          </a>
          <span
            title="Coming soon!"
            class="text-lg flex-1 flex items-center justify-center px-5 py-3 border border-transparent shadow font-medium rounded-md text-white ring-2 ring-linked-500 hover:border-linked-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-linked-700 focus:ring-white mt-6 lg:mt-0 sm:flex-shrink-0 cursor-not-allowed text-linked"
            @click="trackClick('WMDAQLVW', 0)"
          >
            <icon-patreon class="w-6 h-6 mr-4"/>
            {{ $t('sponsor_patreon') }}
          </span>
        </div>
      </div>
    </div>
  </content-wrapper>
</template>

<script>
import IconGithub from '@/assets/svg/logos/github.svg?inline=true'
import IconPatreon from '@/assets/svg/logos/patreon.svg?inline=true'

export default {
  components: {IconGithub,IconPatreon},
  methods: {
    trackClick(goal) {
      if (process.client) {
        this.$fathom.trackGoal(goal, 0)
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Support linked's future",
    "tag_line": "They say when you can't find what you're looking for, build it yourself. This is pretty much what happened with linked.",
    "team": "Many people think that there is a team behind linked, but that is not the case. I developed the app in my spare time, working on it almost daily. Created initially for my colleagues and me, linked now is being used by thousands of users every day - and I am pretty amazed by the support the app has received so far.",
    "goal": "The goal was and still is to keep linked open source, free, and always give you complete control over your data.",
    "sponsoring": "It would mean a lot to me if you would consider sponsoring the project. Your sponsorship helps cover the yearly costs, which exceed $300 a year - not only that, but it also allows me to write a backend service for the app, which again will be open source.",
    "access": "By sponsoring, you will get early access to new features of linked and exclusive access to a sponsor-only channel on the discord. All tiers can be found on GitHub.",
    "sponsor_github": "Sponsor on GitHub",
    "sponsor_patreon": "Sponsor on Patreon (soon)"
  },
  "de": {
    "title": "Unterstütze die Zukunft von linked",
    "tag_line": "Man sagt, wenn man nicht findet, was man sucht, soll man es selbst bauen. Das ist so ziemlich das, was bei linked passiert ist.",
    "team": "Viele Leute denken, dass hinter linked ein Team steht, aber das ist nicht der Fall. Ich habe die App in meiner Freizeit entwickelt und fast täglich an ihr gearbeitet. Ursprünglich für meine Kollegen und mich entwickelt, wird linked nun täglich von Tausenden von Nutzern verwendet - und ich bin ziemlich erstaunt über die Unterstützung, die die App bisher erhalten hat.",
    "goal": "Das Ziel war und ist es immernoch, linked Open Source und kostenlos zu halten und Dir stets die vollständige Kontrolle über Deine Daten zu geben.",
    "sponsoring": "Es würde mir sehr viel bedeuten, wenn Du das Projekt sponsern würdest. Dein Sponsoring hilft, die jährlichen Kosten zu decken, die mehr als 300 Dollar pro Jahr betragen - und nicht nur das, sondern es ermöglicht mir auch, einen Backend-Dienst für die App zu schreiben, der wiederum Open Source sein wird.",
    "access": "Durch das Sponsoring erhälst Du frühzeitigen Zugang zu neuen Funktionen von linked und exklusiven Zugang zu einem nur für Sponsoren zugänglichen Channel im Discord. Alle Stufen können auf GitHub gefunden werden.",
    "sponsor_github": "Sponsor auf GitHub",
    "sponsor_patreon": "Sponsor auf Patreon (bald)"
  }
}
</i18n>
