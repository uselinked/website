<template>
  <div class='bg-gradient-to-r from-red-900 to-red-500 '>
    <language-switcher />
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
</template>
