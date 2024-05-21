<script setup>

const config = useRuntimeConfig()

useHead({
  titleTemplate: '%s %separator Chromatone Tutor',
  templateParams: {
    separator: '·',
  },
  htmlAttrs: {
    lang: 'en',
  },
  link: [{
    rel: "icon",
    type: "image/svg+xml", href: "/logo.svg"
  }],
  script: [
    ['production', 'prerender'].includes(String(process.env.NODE_ENV)) ? {
      'data-website-id': config.public.umamiId,
      async: '',
      src: config.public.umamiUrl
    } : false
  ].filter(Boolean)
})

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  themeColor: '#D3D3E8',
  applicationName: 'Chromatone tutor',
  author: "Denis Starov",
  creator: 'Chromatone',

  title: 'Denis Starov',
  description: 'Visual Music Language author and developer open for educational collaborations',

  ogTitle: 'Chromatone Tutor',
  ogSiteName: 'Chromatone Tutor',
  ogDescription: 'Visual Music Language author and developer open for educational collaborations. Tutor with more than 7 years of experience, unique method and variety of interactive tools.',
  ogImage: 'https://tutor.chromatone.center/subject.jpg',
  ogImageType: 'image/jpeg',
  ogImageAlt: 'Chromatone Tutor - Study and Perform Visual Music Language with the author of the system',

  twitterCard: 'summary_large_image',
  twitterLabel1: 'Visual Music Language',
  twitterLabel2: 'Tutor',
  twitterSite: '@davay42',
  twitterCreator: '@davay42',
  twitterImageType: 'image/jpeg',
  twitterImage: 'https://tutor.chromatone.center/subject.jpg',

})


</script>

<template lang="pug">
NuxtLoadingIndicator(color='purple')
Notivue(v-slot="item")
  Notification(:item="item")
NuxtLayout
  NuxtPage
</template>

<style lang="postcss">
@import '~/assets/layout.postcss'
</style>