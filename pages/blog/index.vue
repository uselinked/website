<template>
  <content-wrapper class="pt-16">
    <div class="flex flex-col items-center px-5 py-8 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col mb-12">
        <div class="w-full">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold w-full mb-8">
            linked blog.
          </h1>
          <p>Some insights, thoughts and ideas in the space of daily journaling, building an app, and stories around linked.</p>
        </div>
      </div>
      <template v-for="post in posts">
        <div
          class="w-full max-w-3xl flex flex-col items-center pb-6 mx-auto my-4 sm:flex-row">
          <div class="flex flex-grow text-center sm:text-left sm:mt-0 space-x-6">
            <img :src="post.image" alt="" class="w-full h-48 object-cover rounded-lg w-2/5" />
            <div class="space-y-4 w-3/5">
              <div class="mt-6">
                <h3 class="text-sm text-gray-400 mb-2">{{ relativeDate(post.date) }}</h3>
                <h2 class="text-2xl font-bold">{{ post.title }}</h2>
              </div>
              <p>{{ post.description }}</p>
              <nuxt-link class="block" :to="localePath(`/blog/${post.slug}`)">read more</nuxt-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </content-wrapper>
</template>

<script>
import {DateTime} from "luxon";

export default {
  async asyncData({$content, app}) {
    return {
      posts: await $content(`/articles/${app.i18n.locale}`)
        .where({published: true})
        .sortBy('date', 'desc')
        .fetch()
    }
  },
  methods: {
    relativeDate(date) {
      return DateTime.fromISO(date).toRelative({ locale: 'en-US' })
    }
  }
}
</script>


<i18n>
{
  "en": {
    "title": "Articles"
  },
  "de": {
    "title": "Artikel"
  }
}
</i18n>
