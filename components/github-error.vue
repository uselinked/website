<template>
  <div v-if="$props.error" class="bg-linked-600 text-white p-12 mt-12">
    <h1 class="text-6xl font-black mb-4 block">Oops.</h1>
    <i18n path="limit" tag="p" class="mb-8 text-2xl">
      {{ getLocaleDate($props.error.resettingIn) }}
    </i18n>
  </div>
</template>

<script>
import {DateTime} from 'luxon'

export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getLocaleDate(date) {
      return DateTime
        .fromSeconds(Number(date))
        .toRelative({ locale: this.$i18n.locale })
    }
  }
}
</script>

<i18n>
{
  "en": {
    "limit": "You've exceeded the request count for the Github API, please retry {0)"
  },
  "de": {
    "limit": "Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"
  }
}
</i18n>
