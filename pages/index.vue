<template>
  <div>
    <!--<section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32"></section>-->
    <hero-section />
    <download-section />
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-20"><hr class="border-t border-gray-200"></div>
    <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32">
      {{ $t('comingSoon') }}
      <i18n path="followUs" tag='p'>
        <template #github><a href='https://github.com/lostdesign/linked/releases/latest' class='underline text-red-400' target='_blank'>Github</a></template>
        <template #twitter><a href='https://twitter.com/uselinked' class='underline text-red-400' target='_blank'>@uselinked</a></template>
      </i18n>
    </section>
  </div>
</template>
