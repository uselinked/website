<template>
  <content-wrapper>
    <div class="flex flex-col md:flex-row space-y-2 md:space-x-16 justify-between items-center">
      <div class="w-full md:w-3/5">
        <h2 class="text-4xl font-extrabold text-gray-900">
          Download linked and start reaping the benefits of daily journaling
        </h2>
        <p class="mt-4 text-lg leading-9 text-gray-500">
          Journaling is fundamentally an organizational system.
          Keeping a journal can help us organize an event in our minds and make sense of our days.
          By writing things down, our working memory improves because our brains are relieved of the arduous task of
          processing too much information.
        </p>
      </div>
      <div class="w-full md:w-2/5">
        <div class="flex flex-col items-center space-y-4 mt-8 self-end">
          <template v-for="(os, index) in downloadButtons">
            <nuxt-link
              to="/download"
              class="flex w-full justify-center items-center space-x-2 text-center col-start-2 self-start bg-linked pl-6 pr-8 py-2 rounded-lg text-lg font-bold text-white hover:bg-linked-600"
            >
              <component :is="os.icon" :class="os.iconFix" />
              <span>{{ os.name }}</span>
            </nuxt-link>
          </template>
        </div>
        <p class="mt-2 text-gray-500">
          Missing yours? Check <nuxt-link class="link-hover font-bold" to="download">here</nuxt-link>.
        </p>
      </div>
    </div>

  </content-wrapper>
</template>

<script>
import IconLinux from '@/assets/svg/operating-systems/linux.svg?inline=true'
import IconMacOs from '@/assets/svg/operating-systems/macos.svg?inline=true'
import IconWindows from '@/assets/svg/operating-systems/windows.svg?inline=true'

export default {
  components: { IconLinux, IconMacOs, IconWindows },
  data() {
    return {
      downloadButtons: [
        { name: 'MacOS', icon: IconMacOs, iconFix: '-mt-1' },
        { name: 'Windows', icon: IconWindows, iconFix: '-mt-0.5' },
        { name: 'Linux' , icon: IconLinux, iconFix: '-mt-0.5' }
      ]
    }
  }
}
</script>
