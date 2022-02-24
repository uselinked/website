<template>
  <content-wrapper class="pt-16">
    <heading class="mb-6"/>
    <div class="flex justify-center items-center mb-12 mt-8">
      <div class="md:grid md:grid-cols-3 gap-0 block">
        <nuxt-link to="/download" class="text-center col-start-2 self-start bg-bright-pink px-6 py-3 m-2 rounded-lg text-2xl font-bold text-white hover:bg-pink">
          Download <span class="hidden lg:inline">linked</span>
        </nuxt-link>
        <its-free class="hidden md:block opacity-75"/>
      </div>

    </div>
    <div class="flex justify-center">
      <nuxt-img src="/images/linked-app.png" alt="screenshot of linked" class="w-full md:w-1/2" lazy/>
    </div>
    <features/>
    <div class="h-screen"></div>
  </content-wrapper>
</template>

<script>
import ItsFree from '@/assets/svg/its-free.svg?inline'

export default {
  name: 'IndexPage',
  components: {ItsFree}
}
</script>
