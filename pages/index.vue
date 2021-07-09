<template>
  <div>
    <!--<section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32"></section>-->
    <hero-section />
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
    <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32">
      {{ $t('comingSoon') }}
    </section>
  </div>
</template>
