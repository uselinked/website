<template>
  <section
    class="
      w-full
      max-w-6xl
      mx-auto
      px-4
      sm:px-6
      md:px-8
      relative
      z-30
      mt-12
      mb-8
    "
  >
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-gray-900">
        {{ $t('feature.title') }}
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        {{ $t('feature.subtitle') }}
      </p>
    </div>
    <dl
      class="
        mt-12
        space-y-10
        sm:space-y-0
        sm:grid sm:grid-cols-2
        sm:gap-x-6 sm:gap-y-12
        lg:grid-cols-4
        lg:gap-x-8
      "
    >
      <div class="relative">
        <dt>
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.editor.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.editor.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.theme.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.theme.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.keyboard.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.keyboard.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.offline.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.offline.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.language.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.language.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.design.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.design.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.search.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.search.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.link.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.link.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.sync.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.sync.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.teams.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.teams.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <!-- Heroicon name: outline/check -->
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.devices.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.devices.description') }}
        </dd>
      </div>

      <div class="relative">
        <dt>
          <svg
            class="absolute h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
            {{ $t('feature.more.title') }}
          </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          {{ $t('feature.more.description') }}
        </dd>
      </div>
    </dl>
  </section>
</template>
