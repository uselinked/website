<template>
  <content-wrapper class="pt-16">
    <page-heading title="FAQ" />
<!--    <h2 id="faq-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Frequently asked questions</h2>-->
    <h2 class="text-xl tracking-tight text-gray-900 max-w-2xl">Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always
      <a href="#" class="external-link font-medium text-linked-700 hover:text-linked-500">send us an email</a>
      with your enquiry.</h2>
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
        <dt class="text-xl leading-6 font-bold text-gray-900">{{ faq.question }}</dt>
        <dd class="mt-2 text-gray-700">{{ faq.answer }}</dd>
      </div>
    </dl>
  </content-wrapper>
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
          question: 'How can I exit the Codeblock?',
          answer: 'Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs or simply use arrow down or press Enter three times.'
        },
        {
          question: 'How can I sync my data?',
          answer: 'Currently you need to point the linked data folder to folder that is being synced by Dropbox, Google Drive, iCloud or other services. A first party syncing service is planned for later this year.'
        },
      ]
    }
  }
}
</script>
