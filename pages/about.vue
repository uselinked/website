<template>
  <content-wrapper class="pt-16">
    <page-heading :title="$t('title')" />
    <p class="mt-4 text-lg text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, ratione, tempore. Accusantium adipisci aut beatae cumque deserunt esse et iusto laborum omnis voluptates. Animi aperiam at consequatur consequuntur cumque enim eos error et eum, eveniet exercitationem harum id illo laborum minus nihil non praesentium provident quasi quibusdam, quos rem rerum saepe sed ullam voluptate voluptatibus voluptatum. Ab accusamus ad adipisci aliquid beatae consequuntur dignissimos distinctio, doloribus exercitationem itaque libero magnam, nulla numquam optio quia quisquam, suscipit veritatis voluptates? Accusantium asperiores at culpa, ea eligendi ex exercitationem illum ipsa magni minus modi nemo nobis non nulla omnis, praesentium totam veniam voluptas!
    </p>
    <div class="space-y-4 sm:space-y-8 mt-12">
      <div class="space-y-5 sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{ $t('lovely_contributors') }}</h2>
        <p class="text-xl text-gray-500">{{ $t('thanks') }}</p>
      </div>
      <ul role="list" class="flex flex-wrap">
        <template v-for="(contributor, index) in contributors">
          <a
            v-if="contributor.login !== 'lostdesign'"
            target="_blank"
            :href="contributor.html_url"
            ref="norel noopener"
            class="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 flex flex-col justify-center grow shrink-0 self-center items-center m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4"
          >
            <li>
              <img class="mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24" :src="contributor.avatar_url" :alt="`${contributor.login} profile image`" />
              <div class="space-y-4">
                <div class="text-center font-medium lg:text-sm">
                  <h3 class="text-base font-bold">{{ contributor.login }}</h3>
                  <p class="text-xs text-linked">{{ contributor.contributions }} commits</p>
                </div>
              </div>
            </li>
          </a>
        </template>
      </ul>
    </div>
  </content-wrapper>
</template>

<script>
import {checkRateLimit} from '@/lib/github'
import {marked} from 'marked'
import {DateTime} from 'luxon'

export default {
  async asyncData() {
    let error = null

    try {
      const response = await fetch('https://api.github.com/repos/lostdesign/linked/contributors')
      const isRateLimited = checkRateLimit(response)

      if (isRateLimited.error) {
        error = isRateLimited
        throw new Error(isRateLimited.message)
      }

      return {
        contributors: await response.json(),
        error: null
      }
    } catch (e) {
      return {
        contributors: null,
        error,
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "About",
    "lovely_contributors": "The lovely contributors",
    "thanks": "Thanks to the awesome people that have contributed to linked."
  },
  "de": {
    "title": "Über",
    "lovely_contributors": "Mitwirkende",
    "thanks": "Vielen Dank an alle, die zu linked beigetragen haben."
  }
}
</i18n>
