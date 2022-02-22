<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Power and simplicity</h2>
        <p class="mt-4 text-lg text-gray-500">The features you want, the easy-to-use interface you need. Daily
          Journaling done right.</p>
      </div>
      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <template v-for="(feature, index) in features">
          <div class="relative">
            <dt>
              <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.title }}</p>
              <dd class="mt-2 ml-9 text-base text-gray-500">{{ feature.detail }}</dd>
            </dt>
          </div>
        </template>

      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { title: 'The editor you need', detail: 'Complete control over the appearance of your writing, with extras like lists and todos.' },
        { title: 'Custom themes', detail: 'Choose dark or light mode and easily switch between.' },
        { title: 'Keyboard shortcuts', detail: 'Complete keyboard control to navigate through the app.' },
        { title: 'Offline first', detail: 'There is no need for an internet connection - your data is stored locally ( take that Notion ).' },
        { title: 'We speak your language', detail: 'The Linked interface has been translated into 11 languages, with more coming soon.' },
        { title: 'Minimal design', detail: 'Linked\'s minimal design helps you focus on writing, with the other features available only when you need them.' },
        { title: 'Search it all', detail: 'Use the full-text search to find what was once written down, lightning-fast.' },
        // { title: 'Links days and notes', detail: 'Want to reference a day in the future or past? Quickly jump between connected days.' },
        // { title: 'Cross-platform sync', detail: 'Keep your notes synced between your devices, and always have your notes with you.' },
        // { title: 'Shared notes', detail: 'Collaborate and share notes with your team, your friends or your family.' },
        // { title: 'Desktop, Mobile and web', detail: 'Use Linked wherever you are.' },
        { title: 'And much more...', detail: 'We\'re working hard to make Linked even better. So if there is a feature you\'d like to see in the app, we\'d like to hear about it.' },
      ]
    }
  }
}
</script>
