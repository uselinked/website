<template>
  <div>
    <div class="relative bg-red-800">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:text-center sm:px-16">
          <p class="font-medium text-white">
            <span class="md:hidden">
              {{ $t('underConstruction') }}
            </span>
            <span class="hidden md:inline">
              {{ $t('underConstruction') }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <!--<section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32"></section>-->
    <div class='bg-gradient-to-r from-red-900 to-red-500 '>
      <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 pt-24 pb-24">
        <div class="md:flex md:space-x-4 space-y-4 md:space-y-0 items-start">
          <div class="md:w-2/5 lg:w-3/5 w-full">
            <h1 class="text-6xl text-white mt-8">linked</h1>
            <p class="text-xl text-gray-400">link your days to thoughts</p>
            <i18n path="cta" class='mt-12 text-gray-400' tag='p'>
              <template #github><a href='https://github.com/lostdesign/linked/releases/latest' class='underline text-red-400' target='_blank'>{{$t('here')}}</a></template>
              <template #twitter><a href='https://twitter.com/uselinked' class='underline text-red-400' target='_blank'>@uselinked</a></template>
             </i18n>
          </div>
          <div class="md:w-3/5 lg:w-2/5 w-full">
            <linked-demo />
          </div>
        </div>
      </section>
    </div>
    <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32">
      {{ $t('comingSoon') }}
    </section>
    <!--<section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32">
      <div class="bg-white">
        <div class="mx-auto lg:flex lg:items-center">
          <div class="lg:w-0 lg:flex-1">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {{ $t('newsletter.title') }}
            </h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-500">
              {{ $t('newsletter.description') }}
            </p>
          </div>
          <div class="mt-8 lg:mt-0 lg:ml-8">
            <form class="sm:flex">
              <label for="email-address" class="sr-only">{{ $t('newsletter.email') }}</label>
              <input id="email-address" name="email-address" type="email" autocomplete="email" required class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md" :placeholder="$t('newsletter.email')">
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" class="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {{ $t('newsletter.notify') }}
                </button>
              </div>
            </form>
            <i18n tag='p' path='newsletter.privacy' class='mt-3 text-sm text-gray-500'>
              <template #privacyPolicy>
                <a href="#" class="font-medium underline">
                  {{ $t('privacyPolicy') }}
                </a>
              </template>
            </i18n>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>
