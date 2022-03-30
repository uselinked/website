<template>
  <section aria-labelledby="faq-heading" class="bg-white">
    <content-wrapper>
      <h2 class="text-3xl font-extrabold text-gray-900">{{ $t('title') }}</h2>
      <i18n path="description" tag="h2" class="text-xl tracking-tight text-gray-900 max-w-2xl">
        <a :href="$t('mailto')" class="external-link font-medium text-linked-700 hover:text-linked-500">{{ $t('email') }}</a>
      </i18n>
      <!--    <p class="mt-4 text-base text-gray-500">-->
      <!--      Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always-->
      <!--      <a href="#" class="font-medium text-linked-700 hover:text-linked-500">send us an email</a>-->
      <!--      with your enquiry.-->
      <!--    </p>-->
      <!--    <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">-->
      <!--      <template v-for="(faq, index) in faqs">-->
      <!--        <div>-->
      <!--          <dt class="text-xl font-medium text-gray-900">{{ faq.question }}</dt>-->
      <!--          <dd class="mt-3 text-base leading-6 tracking-wide text-gray-700">{{ faq.answer }}</dd>-->
      <!--        </div>-->
      <!--      </template>-->
      <!--    </dl>-->
      <dl class="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
        <div v-for="(faq, index) in faqs" :key="index">
          <dt class="text-lg leading-6 font-medium text-gray-900">{{ faq.question }}</dt>
          <dd class="mt-2 text-base text-gray-500">{{ faq.answer }}</dd>
        </div>
      </dl>
    </content-wrapper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'Why is linked free?',
          answer: 'Don\'t worry, you are not paying with your personal data. The app is free and opensource since I like opensource software myself. The idea behind this that you have full control over your data and future of linked. If you want to support linked financially, you can consider sponsoring me HERE.'
        },
        {
          question: 'How can I exit the Codeblock',
          answer: 'Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs or simply use arrow down or press Enter three times.'
        },
      ]
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
      }
    }
  },
  "de": {
    "title": "FAQ",
    "description": "Fragen. Häufig gestellte Fragen. Und unsere Antworten. So funktionieren die FAQs. Wenn Du nicht finden konntest, wonach Du gesucht hast, kannst Du deine Anfrage jederzeit {0} an mich senden.",
    "email": "per E-Mail",
    "mailto": "mailto:support@uselinked.com?subject=Frage bzgl. linked&body=Liebes linked Team, könnt ihr mir folgende Frage beantworten....",
    "questions": {
      "free": {
        "q": "Why is linked free?",
        "a": "Don't worry, you are not paying with your personal data. The app is free and opensource since I like opensource software myself. You will always have full control over your data. If you want to support linked financially, you can consider sponsoring the project."
      }
    }
  }
}
</i18n>
