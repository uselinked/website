<template>
  <div class="px-6 py-6 bg-linked-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center mb-12 justify-center items-center">
    <div class="xl:w-0 xl:flex-1">
      <h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {{  $t('title') }}
      </h2>
      <p class="mt-3 max-w-3xl text-lg leading-6 text-linked-200">
        {{  $t('description') }}
      </p>
    </div>
    <div>
      <a
        href="https://discord.gg/uNjJzZvccr"
        class="text-lg w-full flex items-center justify-center px-5 py-3 border border-transparent shadow font-medium rounded-md text-white bg-linked-500 hover:bg-linked-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-linked-700 focus:ring-white sm:mt-0 sm:flex-shrink-0"
        @click.native="trackClick('M6KCBDQG', 0)"
      >
        <icon-discord class="w-6 h-6 mr-4" />
        {{  $t('say_hello') }}
      </a>
    </div>
  </div>
</template>

<script>
import IconDiscord from '@/assets/svg/logos/discord.svg?inline=true'

export default {
  components: { IconDiscord },
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
    "title": "Want latest news and updates?",
    "description": "Join over a hundred other users in our discord community talking about linked. Let us know what you think about the project and share your ideas with everyone.",
    "say_hello": "Say hello on our discord!"
  },
  "de": {
    "title": "Möchtest Du die neuesten Nachrichten und Updates?",
    "description": "Schließe dich über hundert anderen Nutzern in unserer Discord-Community an, die über linked sprechen. Lass uns wissen, was Du über das Projekt denkst und teile Deine Ideen mit allen.",
    "say_hello": "Sag Hallo in unserem Discord!"
  }
}
</i18n>
