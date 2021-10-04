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
      pt-8
      pb-12
    "
  >
    <div class="">
      <div class="py-16 sm:py-24">
        <span
          class="
            inline-flex
            items-center
            px-2
            py-0.5
            rounded
            text-xs
            font-medium
            bg-gray-100
            text-gray-800
            mb-2
          "
        >
          {{ this.version }}
        </span>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8" id="download">
          <h2
            class="text-3xl font-extrabold text-gray-900 lg:max-w-xl text-left"
          >
            <p>{{ $t('download.title') }}</p>
            <p>{{ $t('download.subTitle') }} 👉</p>
          </h2>
          <div class="flow-root self-center mt-8 lg:mt-0">
            <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div
                class="
                  mt-4
                  ml-8
                  flex flex-grow flex-shrink-0
                  justify-center
                  lg:flex-grow-0
                  lg:ml-4
                "
              >
                <icon-button :href="downloadLinks.mac"
                  ><apple-icon
                    class="-ml-1 mr-3 w-5 h-5"
                  />&nbsp;macOS</icon-button
                >
              </div>
              <div
                class="
                  mt-4
                  ml-8
                  flex flex-grow flex-shrink-0
                  justify-center
                  lg:flex-grow-0
                  lg:ml-4
                "
              >
                <icon-button :href="downloadLinks.windows"
                  ><windows-icon
                    class="-ml-1 mr-3 w-5 h-5"
                  />&nbsp;Windows</icon-button
                >
              </div>
              <div
                class="
                  mt-4
                  ml-8
                  flex flex-grow flex-shrink-0
                  justify-center
                  lg:flex-grow-0
                  lg:ml-4
                "
              >
                <icon-button :href="downloadLinks.linux.deb"
                  ><ubuntu-icon
                    class="-ml-1 mr-3 w-5 h-5"
                  />&nbsp;Ubuntu</icon-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppleIcon from '@/assets/icons/apple.svg'
import WindowsIcon from '@/assets/icons/windows.svg'
import UbuntuIcon from '@/assets/icons/ubuntu.svg'

export default {
  components: { AppleIcon, WindowsIcon, UbuntuIcon },
  data() {
    return {
      version: null,
      apiUrl: 'https://api.github.com/repos/lostdesign/linked/releases/latest',
      downloadLinks: {
        base: 'https://github.com/lostdesign/linked/releases/download/',
        mac: null,
        linux: { deb: null, snap: null, appImage: null },
        windows: null
      }
    }
  },
  mounted() {
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.version = data.name
        this.downloadLinks.mac = `${this.downloadLinks.base}${data.tag_name}/linked-${data.name}.dmg`
        this.downloadLinks.linux.deb = `${this.downloadLinks.base}${data.tag_name}/linked-${data.name}.deb`
        this.downloadLinks.linux.snap = `${this.downloadLinks.base}${data.tag_name}/linked-${data.name}.snap`
        this.downloadLinks.linux.snap = `${this.downloadLinks.base}${data.tag_name}/linked-${data.name}.AppImage`
        this.downloadLinks.windows = `${this.downloadLinks.base}${data.tag_name}/linked-${data.name}.exe`
      })
  }
}
</script>
