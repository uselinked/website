<template>
  <section
    class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 mt-32"
  >
    <div class="bg-white">
      <div class="mx-auto lg:flex lg:items-center">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="text-3xl font-extrabold text-gray-900">
            {{ $t('discord.title') }}
          </h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-500">
            {{ $t('discord.description') }}
          </p>
        </div>
        <div class="mt-8 lg:mt-0 lg:ml-8">
          <form class="sm:flex" @submit.prevent="subscribe">
            <div
              class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
            >
              <a
                href="https://discord.gg/uNjJzZvccr"
                target="_blank"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  py-3
                  px-5
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-white
                  bg-red-500
                  hover:bg-red-400
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                "
              >
                {{ $t('discord.join') }}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: null,
      error: null,
      success: false,
      loading: false
    }
  },

  methods: {
    subscribe() {
      if (this.loading || !this.email) {
        return
      }

      this.loading = true

      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios
        .post(
          'https://news.lost.services/mailcoach/subscribe/0455ff01-00ed-4694-a516-be3be919f23e',
          { email: this.email },
          options
        )
        .then(() => {
          this.email = null
          this.success = true
          this.error = null
          this.loading = false
        })
        .catch((error) => {
          this.success = false
          this.error =
            error?.reponse?.data?.errors?.email?.[0] ||
            error?.response?.data?.message
        })
    }
  }
}
</script>
