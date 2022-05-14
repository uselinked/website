<template>
  <section aria-labelledby="faq-heading" class="bg-white">
    <content-wrapper>
      <h2 class="text-3xl font-extrabold text-gray-900">{{ $t('title') }}</h2>
      <i18n path="description" tag="h2" class="mt-5 text-xl text-gray-500" v-slot:link>
        <a :href="$t('mailto')" class="external-link font-medium text-linked-700 hover:text-linked-500">{{ $t('email') }}</a>
      </i18n>
      <dl class="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
        <div v-for="(faq, index) in faqs" :key="index">
          <dt class="text-lg leading-6 font-medium text-gray-900">{{ $t(`questions.${faq}.q`) }}</dt>
          <dd class="mt-2 text-base text-gray-500">{{ $t(`questions.${faq}.a`) }}</dd>
        </div>
      </dl>
    </content-wrapper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: ['free', 'code_editor']
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "FAQ",
    "description": "Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always {link} with your enquiry.",
    "email": "send me an email",
    "mailto": "mailto:support@uselinked.com?subject=Question regarding linked&body=Dear linked team, could you please tell me....",
    "questions": {
      "free": {
        "q": "Why is linked free?",
        "a": "Don't worry, you are not paying with your personal data. The app is free and opensource since I like opensource software myself. You will always have full control over your data. If you want to support linked financially, you can consider sponsoring the project."
      },
      "code_editor": {
        "q": "How can I exit the Codeblock",
        "a": "Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs or simply use arrow down or press Enter three times."
      }
    }
  },
  "de": {
    "title": "FAQ",
    "description": "Fragen. Häufig gestellte Fragen. Und unsere Antworten. So funktionieren die FAQs. Wenn Du nicht finden konntest, wonach Du gesucht hast, kannst Du deine Anfrage jederzeit {link} an mich senden.",
    "email": "per E-Mail",
    "mailto": "mailto:support@uselinked.com?subject=Frage bzgl. linked&body=Liebes linked Team, könnt ihr mir folgende Frage beantworten....",
    "questions": {
      "free": {
        "q": "Warum ist linked kostenlos?",
        "a": "Keine Sorge, Du bezahlst nicht mit Deinen persönlichen Daten. Die App ist kostenlos und OpenSource, da ich selbst OpenSource-Software mag. Du wirst immer die volle Kontrolle über Deine Daten haben. Wenn Du linked finanziell unterstützen möchtest, kannst Du das Projekt als Sponsor unterstützen."
      },
      "code_editor": {
        "q": "Wie kann ich den Codeblock verlassen?",
        "a": "Drücke Befehl/Strg + Enter, um den eingezäunten Codeblock zu verlassen und mit der Eingabe langweiliger Absätze fortzufahren, oder verwende  einfach Pfeil nach unten oder drücke dreimal Enter."
      }
    }
  }
}
</i18n>
