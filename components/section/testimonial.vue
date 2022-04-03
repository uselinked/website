<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <section class="bg-gray-100 overflow-hidden py-12 lg:py-20">
    <vue-glide
      :bullet="true"
      focusAt="center"
      :perView="1"
      type="carousel"
      :autoplay="6000"
      :hoverpause="true"
      :startAt="slideStart"
      :animationDuration="350"
    >
      <vue-glide-slide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote class="mt-10 mb-6">
            <div class="relative max-w-3xl mx-auto text-center text-xl leading-9 font-medium text-gray-900 relative">
              <p>&ldquo;{{ $t(testimonial.translationKey) }}&rdquo;</p>
            </div>
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  <img class="mx-auto h-10 w-10 rounded-full" :src="testimonial.image" alt="" loading=lazy>
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                  <div class="text-base font-medium text-gray-900">{{ testimonial.name }}</div>
                  <a
                    v-if="testimonial.twitter"
                    class="inline-block"
                    :href="testimonial.twitter"
                    rel="noreferrer noopener"
                    :aria-label="`Visit ${testimonial.name} on twitter`"
                  >
                    <icon-twitter class="h-6 w-6 text-blue-400 hover:text-blue-700" />
                  </a>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </vue-glide-slide>
    </vue-glide>
  </section>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import IconTwitter from '@/assets/svg/logos/twitter.svg?inline=true'
import ArrowLeftIcon from '@/assets/svg/arrow-left.svg?inline=true'
import ArrowRightIcon from '@/assets/svg/arrow-right.svg?inline=true'

export default {
  data() {
    return {
      testimonials: [
        {
          name: 'Rama Adi Nugraha',
          twitter: 'https://twitter.com/its_ramaadi',
          translationKey: 'rama',
          image: 'https://pbs.twimg.com/profile_images/1312050517078470656/Ln2AgW5k_400x400.png'
        },
        {
          name: 'Richard',
          twitter: 'https://twitter.com/richardevcom',
          translationKey: 'richard',
          image: 'https://pbs.twimg.com/profile_images/1416475956022325258/4yonnJYj_400x400.jpg'
        },
        {
          name: 'Sebastian',
          twitter: 'https://twitter.com/T0TProduction',
          translationKey: 'sebastian',
          image: 'https://raw.githubusercontent.com/T0TProduction/diluz.io/deploy/assets/images/profile/sebastian/pp.png'
        },
        {
          name: 'Josiah Rose',
          twitter: 'https://twitter.com/_josiahrose',
          translationKey: 'josiah',
          image: 'https://pbs.twimg.com/profile_images/1495911592420155395/y6ZU7Mca_400x400.jpg'
        }
      ]
    }
  },
  computed: {
    slideStart() {
      return Math.floor(Math.random() * this.testimonials.length)
    }
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    IconTwitter,
    ArrowLeftIcon,
    ArrowRightIcon,
  }
}
</script>

<i18n>
{
  "en": {
    "rama": "I love how simple and straightforward linked is. The moment you open the app, you can just start jotting down notes with no fuss. Journaling has never been easier!",
    "richard": "Finally no more countless and forever lost .txt files on my workstation. Linked is perfect solution for everything in between countless todo notes and digital journals.",
    "sebastian": "I use linked at work daily! It's just so convenient for taking quick notes. What I especially like is that everything is stored locally - No need to think about data confidentiality.",
    "josiah": "I use linked because it helps me effectively manage, track and organize my daily events. It's special because it has a minimalist design while maintaining it's beneficial features and time management."
  },
  "de": {
    "rama": "Ich finde es toll, wie einfach und unkompliziert linked ist. In dem Moment, in dem man die App öffnet, kann man ohne viel Aufwand mit dem Notieren beginnen. Journaling war noch nie so einfach!",
    "richard": "Endlich keine unzähligen und für immer verlorenen .txt-Dateien mehr auf meinem Computer. linked ist die perfekte Lösung für alles, was zwischen unzähligen ToDo-Notizen und digitalen Journalen liegt.",
    "sebastian": "Ich verwende linked täglich bei der Arbeit! Es ist einfach so praktisch, um schnelle Notizen zu machen. Besonders gut gefällt mir, dass alles lokal gespeichert wird - man muss sich keine Gedanken über die Vertraulichkeit der Daten machen.",
    "josiah": "Ich verwende linked, weil es mir hilft, meine täglichen Ereignisse effektiv zu verwalten, zu verfolgen und zu organisieren. Es ist etwas Besonderes, weil es ein minimalistisches Design hat, während es seine nützlichen Funktionen und Zeitmanagement beibehält."
  }
}
</i18n>
