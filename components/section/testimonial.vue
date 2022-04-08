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
                  <img class="mx-auto h-10 w-10 rounded-full" :src="`/images/testimonials/${testimonial.image}`" alt="" loading=lazy>
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                  <div class="text-base font-medium text-gray-900">{{ testimonial.name }}</div>
                  <a
                    v-if="testimonial.social"
                    class="inline-block"
                    :href="testimonial.social"
                    target="_blank"
                    rel="noreferrer noopener"
                    :aria-label="`Visit ${testimonial.name} on twitter`"
                  >
                    <component
                      :is="testimonial.icon"
                      :class="getIconClasses(testimonial.social)"
                      class="h-6 w-6"
                    />
<!--                    <icon-github-->
<!--                      v-if="testimonial.icon == 'github'"-->
<!--                      class="h-6 w-6 text-gray-900 hover:text-gray-700"-->
<!--                    />-->
<!--                    <icon-twitter-->
<!--                      v-if="testimonial.icon == 'twitter'"-->
<!--                      class="h-6 w-6 text-blue-400 hover:text-blue-700"-->
<!--                    />-->
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
import IconGithub from '@/assets/svg/logos/github.svg?inline=true'
import ArrowLeftIcon from '@/assets/svg/arrow-left.svg?inline=true'
import ArrowRightIcon from '@/assets/svg/arrow-right.svg?inline=true'

export default {
  data() {
    return {
      testimonials: [
        {
          name: 'Rama Adi Nugraha',
          social: 'https://twitter.com/its_ramaadi',
          translationKey: 'rama',
          image: 'rama.png',
          icon: IconTwitter
        },
        {
          name: 'Richard',
          social: 'https://twitter.com/richardevcom',
          translationKey: 'richard',
          image: 'richard.jpeg',
          icon: IconTwitter
        },
        {
          name: 'Sebastian',
          social: 'https://github.com/T0TProduction',
          translationKey: 'sebastian',
          image: 'sebastian.jpeg',
          icon: IconGithub
        },
        {
          name: 'Josiah Rose',
          social: 'https://twitter.com/_josiahrose',
          translationKey: 'josiah',
          image: 'josiah.jpeg',
          icon: IconTwitter
        },
        {
          name: 'taep96',
          social: 'https://github.com/taep96',
          translationKey: 'taep',
          image: 'taep.jpeg',
          icon: IconGithub
        },
        {
          name: 'Techy Dev',
          social: 'https://github.com/TechyDev1961',
          translationKey: 'techy',
          image: 'techy.png',
          icon: IconGithub
        }
      ]
    }
  },
  computed: {
    slideStart() {
      return Math.floor(Math.random() * this.testimonials.length)
    },
  },
  methods: {
    getIconClasses(socialUrl) {
      return [
        {'text-blue-500 hover:text-blue-700': socialUrl.includes('twitter')},
        {'text-gray-900 hover:text-gray-700': socialUrl.includes('github')}
      ]
    }
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    IconTwitter,
    IconGithub,
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
    "josiah": "I use linked because it helps me effectively manage, track and organize my daily events. It's special because it has a minimalist design while maintaining it's beneficial features and time management.",
    "taep": "linked is pog!",
    "techy": "linked made me incorporate this good habit of jotting down my experiences for the day and making my day more efficient and organized because of how simple it is to start journaling with it. It has helped me manage multiple tasks!"
  },
  "de": {
    "rama": "Ich finde es toll, wie einfach und unkompliziert linked ist. In dem Moment, in dem man die App öffnet, kann man ohne viel Aufwand mit dem Notieren beginnen. Journaling war noch nie so einfach!",
    "richard": "Endlich keine unzähligen und für immer verlorenen .txt-Dateien mehr auf meinem Computer. linked ist die perfekte Lösung für alles, was zwischen unzähligen ToDo-Notizen und digitalen Journalen liegt.",
    "sebastian": "Ich verwende linked täglich bei der Arbeit! Es ist einfach so praktisch, um schnelle Notizen zu machen. Besonders gut gefällt mir, dass alles lokal gespeichert wird - man muss sich keine Gedanken über die Vertraulichkeit der Daten machen.",
    "josiah": "Ich verwende linked, weil es mir hilft, meine täglichen Ereignisse effektiv zu verwalten, zu verfolgen und zu organisieren. Es ist etwas Besonderes, weil es ein minimalistisches Design hat, während es seine nützlichen Funktionen und Zeitmanagement beibehält.",
    "taep": "linked is pog!",
    "techy": "linked hat mich dazu gebracht, meine Erlebnisse des Tages aufzuschreiben und meinen Tag effizienter und organisierter zu gestalten, weil es so einfach ist. Es hat mir geholfen, mehrere Aufgaben zu bewältigen!"
  }
}
</i18n>
