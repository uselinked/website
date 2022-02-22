<template>
  <content-wrapper class="pt-16">
    <heading class="mb-6"/>
    <div class="flex justify-center items-center mb-16">
      <nuxt-link to=" /download" class="bg-bright-pink px-4 py-2 m-2 rounded text-xl text-white hover:bg-pink">
        Download for free
      </nuxt-link>
    </div>
    <div class="flex justify-center">
      <nuxt-img src="/images/linked-app.png" alt="screenshot of linked" class="w-full md:w-1/2" lazy/>
    </div>
    <features/>
    <div class="h-screen"></div>
  </content-wrapper>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
