<template>
  <section class="test-bg">
    <content-wrapper class="py-12 md:py-20 lg:py-24 my-12">
      <div>
        <p class="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">{{ $t('title') }}</p>
      </div>
      <p class="mt-4 text-xl leading-9 text-gray-200">
        {{ $t('subline') }}
        <i18n path="research.text" tag="span">
          <a href="https://www.apa.org/monitor/jun02/writing" target="blank" rel="noreferrer noopener"
             class="external-link link-hover-inverted">{{ $t('research.link') }}
            <external-icon class="w-4 h-4 inline text-gray-900 -mt-1"/>
          </a>
        </i18n>
      </p>
    </content-wrapper>
  </section>
</template>

<script>
import ExternalIcon from '@/assets/svg/external.svg?inline=true'

export default {
  components: {ExternalIcon}
}
</script>

<i18n>
{
  "en": {
    "title": "One of the more effective forms of self-care is also, thankfully, one of the least expensive",
    "subline": "Journaling helps with improved mindfulness, memory, and communication skills. Studies have shown that journaling can lead to better sleep, a stronger immune system, more self-confidence, and a higher I.Q.",
    "research": {
      "link": "Scientific research",
      "text": "{0} has revealed that journaling is the simplest act of self-care available."
    }
  },
  "de": {
    "title": "Eine der wirksamsten Formen der Selbstfürsorge ist zum Glück auch eine der kostengünstigsten",
    "subline": "Das Führen von eines täglichen Journals fördert die Achtsamkeit, das Gedächtnis und die Kommunikationsfähigkeit. Studien haben gezeigt, dass Tagebuchschreiben zu besserem Schlaf, einem stärkeren Immunsystem, mehr Selbstvertrauen und einem höheren IQ führt.",
    "research": {
      "link": "Wissenschaftliche Untersuchungen",
      "text": "{0} haben ergeben, dass das Führen eines Tagebuchs der einfachste Akt der Selbstfürsorge ist."
    }
  }
}
</i18n>
