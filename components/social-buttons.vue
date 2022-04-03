<template>
  <div class="flex space-x-6 md:order-2">
    <a
      href="https://discord.gg/uNjJzZvccr"
      :title="$t('discord')"
      target="_blank"
      rel="noopener norel"
      class="text-gray-100 hover:text-linked-200"
    >
      <span class="sr-only">Discord</span>
      <icon-discord class="h-6 w-6" />
    </a>

    <a
      href="https://twitter.com/uselinked"
      :title="$t('twitter')"
      target="_blank"
      rel="noopener norel"
      class="text-gray-100 hover:text-linked-200"
    >
      <span class="sr-only">Twitter</span>
      <icon-twitter class="h-6 w-6" />
    </a>

    <a
      href="https://github.com/uselinked"
      :title="$t('github')"
      target="_blank"
      rel="noopener norel"
      class="text-gray-100 hover:text-linked-200"
    >
      <span class="sr-only">GitHub</span>
      <icon-github class="h-6 w-6" />
    </a>
  </div>
</template>

<script>
import IconInstagram from '@/assets/svg/logos/instagram.svg?inline=true'
import IconFacebook from '@/assets/svg/logos/facebook.svg?inline=true'
import IconDribbble from '@/assets/svg/logos/dribbble.svg?inline=true'
import IconGithub from '@/assets/svg/logos/github.svg?inline=true'
import IconTwitter from '@/assets/svg/logos/twitter.svg?inline=true'
import IconDiscord from '@/assets/svg/logos/discord.svg?inline=true'

export default {
  components: {
    IconInstagram,
    IconFacebook,
    IconDribbble,
    IconGithub,
    IconTwitter,
    IconDiscord
  }
}
</script>

<i18n>
{
  "en": {
    "discord": "Join the Discord and chat with others!",
    "twitter": "Check our recent news on Twitter!",
    "github": "Look at the source code on Github!"
  },
  "de": {
    "discord": "Tritt dem Discord bei und chatte mit anderen!",
    "twitter": "Lies unsere aktuellen Nachrichten auf Twitter!",
    "github": "Schau Dir den Quellcode auf Github an!"
  }
}
</i18n>
