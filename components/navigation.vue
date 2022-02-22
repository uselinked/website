<template>
  <nav class="sticky top-0 z-50 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white/95">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <nuxt-link to="/">
            <img src="/images/logo.png" class="w-10 h-10 rounded" />
          </nuxt-link>
          <p class="text-xl font-bold">linked</p>
        </div>
        <ul class="space-x-6">

          <nuxt-link
            to="/download"
            class="hover:text-bright-pink hover:underline underline-offset-2 decoration-bright-pink decoration-4 transition-all duration-300"
          >
            Download
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
