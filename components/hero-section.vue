<template>
  <div class='bg-gradient-to-br from-red-900 to-red-500'>
    <navbar />
    <section class='w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 pt-24 pb-16'>
      <div class='md:flex md:space-x-4 space-y-4 md:space-y-0 items-center'>
        <div class='md:w-2/5 lg:w-3/5 w-full mb-8'>
          <h1 class='max-w-md mb-2 text-6xl font-bold text-white tracking-tight'>{{ $t('cta.title') }}</h1>
          <p class='max-w-md ml-1 text-xl text-gray-300'>{{ $t('cta.subtitle') }}</p>
          <a href="#download" class="mt-8 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <download-icon class='-ml-1 mr-3 w-5 h-5'/>{{ $t('cta.button') }}
          </a>
        </div>
        <div class='md:w-3/5 lg:w-2/5 w-full'>
          <linked-demo />
          <p class='text-xs text-gray-400 text-center mt-4'>{{ $t('cta.demoNotice') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DownloadIcon from '@/assets/icons/download.svg'

export default {
  components: { DownloadIcon }
}
</script>
