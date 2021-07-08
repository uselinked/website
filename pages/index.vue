<template>
  <div>
    <div class="relative bg-yellow-400">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:text-center sm:px-16">
          <p class="font-medium text-white">
            <span class="md:hidden">
              🚧 This website is currently under construction!
            </span>
            <span class="hidden md:inline">
              🚧 This website is currently under construction!
            </span>
          </p>
        </div>
      </div>
    </div>

    <!--<section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32"></section>-->
    <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32 mb-32">
      <div class="md:flex md:space-x-4 space-y-4 md:space-y-0 items-start">
        <div class="md:w-2/5 lg:w-3/5 w-full">
          <h1 class="text-6xl mt-8">linked</h1>
          <p class="text-xl text-gray-400">link your days to thoughts</p>
          <p class='mt-12'>You can download linked <a href='https://github.com/lostdesign/linked/releases/latest' class='underline text-blue-300' target='_blank'>here</a> or follow us on twitter
            <a href='https://twitter.com/uselinked' class='underline text-blue-300' target='_blank'>@uselinked</a></p>
        </div>
        <div class="md:w-3/5 lg:w-2/5 w-full">
          <linked-demo />
        </div>
      </div>
    </section>
  </div>
</template>
