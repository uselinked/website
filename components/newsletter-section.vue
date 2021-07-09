<template>
  <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32">
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
    </section>
</template>
