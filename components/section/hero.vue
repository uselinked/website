<template>
  <content-wrapper>
    <header class="text-center">
      <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl p-1 text-linked">
        Daily journaling
        <span class="block text-gray-900">without distraction.</span>
      </h1>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">An easy, distraction-free way to record your thoughts,
        declutter your mind and keep the things you want to remember.</p>
    </header>
    <div class="flex justify-center items-center mb-12 mt-8">
      <div class="md:grid md:grid-cols-3 gap-0 block">
        <nuxt-link to="/download" class="text-center col-start-2 self-start bg-linked px-6 py-3 m-2 rounded-lg text-lg md:text-2xl font-bold text-white hover:bg-linked-600">
          Start journaling today
        </nuxt-link>
        <its-free class="hidden md:block opacity-75"/>
      </div>
    </div>
    <div class="flex justify-center">
      <nuxt-img src="/images/linked-app.png" alt="screenshot of linked" class="w-full md:w-1/2" lazy/>
    </div>
  </content-wrapper>
</template>

<script>
import ItsFree from '@/assets/svg/its-free.svg?inline=true'

export default {
  components: { ItsFree }
}
</script>
