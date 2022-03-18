<template>
  <div class="flex space-x-6 md:order-2">
<!--    <a href="#" class="text-gray-100 hover:text-linked-200">-->
<!--      <span class="sr-only">Facebook</span>-->
<!--      <icon-facebook />-->
<!--    </a>-->

<!--    <a href="#" class="text-gray-100 hover:text-linked-200">-->
<!--      <span class="sr-only">Instagram</span>-->
<!--      <icon-instagram />-->
<!--    </a>-->

    <a href="#" class="text-gray-100 hover:text-linked-200">
      <span class="sr-only">Twitter</span>
      <icon-twitter />
    </a>

    <a href="#" class="text-gray-100 hover:text-linked-200">
      <span class="sr-only">GitHub</span>
      <icon-github />
    </a>

<!--    <a href="#" class="text-gray-100 hover:text-linked-200">-->
<!--      <span class="sr-only">Dribbble</span>-->
<!--      <icon-dribbble />-->
<!--    </a>-->
  </div>
</template>

<script>
import IconInstagram from '@/assets/svg/logos/instagram.svg?inline=true'
import IconFacebook from '@/assets/svg/logos/facebook.svg?inline=true'
import IconDribbble from '@/assets/svg/logos/dribbble.svg?inline=true'
import IconGithub from '@/assets/svg/logos/github.svg?inline=true'
import IconTwitter from '@/assets/svg/logos/twitter.svg?inline=true'

export default {
  components: {
    IconInstagram,
    IconFacebook,
    IconDribbble,
    IconGithub,
    IconTwitter
  }
}
</script>
