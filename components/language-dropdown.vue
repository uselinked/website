<template>
  <div>
    <div class="mt-4 relative text-white">
      <button
        type="button"
        class="relative w-full bg-linked-700 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-linked focus:border-linked sm:text-sm cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        @click="open = !open"
      >
        <span class="block truncate">{{ $t(`language.${$i18n.locale}`) }}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <icon-chevron-down />
        </span>
      </button>
      <ul
        class="absolute z-10 mt-1 w-full bg-linked-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        style="
          margin-left: 0 !important;
          margin-right: 0 !important;
          margin-top: 0.25rem !important;
        "
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        v-if="open"
      >
        <template v-for="(lang, index) in availableLocales">
          <li
            class="cursor-default select-none relative py-2 pl-8 pr-4 hover:bg-linked-600 cursor-pointer"
            id="listbox-option-0"
            role="option"
            :key="index"
            @click="setLocale(lang.code)"
          >
            <span class="font-normal block truncate">{{ $t(`language.${lang.code}`) }}</span>
            <span
              class="text-bright-pink absolute inset-y-0 left-0 flex items-center pl-1.5"
              v-if="$i18n.locale === lang.code"
            >
              <icon-tick/>
            </span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import IconTick from '@/assets/svg/tick.svg?inline=true'
import IconChevronDown from '@/assets/svg/chevron-down.svg?inline=true'

export default {
  components: { IconTick, IconChevronDown },
  data() {
    return {
      open: false,
      languages: ['de', 'en']
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    }
  },
  methods: {
    setLocale(code) {
      this.$i18n.setLocale(code)
      this.open = false
    }
  }
}
</script>


<i18n>
{
  "en": {
    "language": {
      "en": "English",
      "de": "German"
    }
  },
  "de": {
    "language": {
      "en": "Englisch",
      "de": "Deutsch"
    }
  }
}
</i18n>
