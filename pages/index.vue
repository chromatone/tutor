<script setup>
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Denis Starov',
    text: 'Chromatone tutor',
    url: 'https://tutor.chromatone.center/',
  })
}

import { renderSVG } from 'uqr'

const svg = renderSVG('https://tutor.chromatone.center/', {
  border: 3,
  blackColor: '#333',
  ecc: 'M'
})

const calendly = useCalendly()    // Loads the badge on page/component mount    
const handleClick = () => { calendly.initPopupWidget({ url: 'https://calendly.com/davay/private-tutorship-session', }) }

const scheduled = ref(false)
const paid = ref(false)

useCalendlyEventListener({
  onEventScheduled: event => {
    scheduled.value = true
  }
})

async function pay() {


  await navigateTo(await navigateTo('https://book.stripe.com/6oE3eH3bB99MepqeV2', {
    open: {
      target: '_blank',
      windowFeatures: {
        width: 700,
        height: 500
      }
    }
  }))
  paid.value = true
}
</script>

<template lang="pug">
.flex.flex-wrap.items-start.gap-8.p-8( style="background:  linear-gradient(hsla(300deg,1%,90%,0.2) 0%,hsla(300deg,1%,100%,0.7) 20%, hsla(0deg,50%,100%,0.9) 100%), url(/pattern.jpg); background-size: 700px; background-attachment: normal; background-repeat: all")
  .flex.flex-col.gap-8.z-2(style="flex: 1 1 45ch")
    a.flex.items-center.gap-4.bg-light-400.p-4.rounded-2xl.shadow-xl(href="https://chromatone.center" target="_blank")
      img.w-10.z-2(src="~assets/images/logo.svg")
      .font-bold.text-2xl Chromatone
      .flex-1   
      .text-sm.uppercase.op-40.text-right Visual Music Language
    .flex.items-stretch.bg-light-400.rounded-xl.overflow-clip.flex-wrap.shadow-xl
      .w-80.flex-1
        img.op-90(src="/subject.jpg")
      .flex.flex-col.gap-2.flex-1.p-4
        h1.text-5xl.sm-text-6xl Denis Starov
        .text-2xl.sm-text-3xl Tutor
        .flex-auto
        h2.text-xl Phuket, Thailand
  .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")
    .bg-light-400.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4(style="flex: 1 1 300px")
      p I'm exploring new ways to interconnect senses and illuminate hidden depths of music and arts. More than 7-years long Chromatone odyssey brings me wide musician experience, deep music theory understanding and a handful of open-source interactive web apps to study, play and perform with. Now I'm ready to help you on your way in music. Here are my main subjects:
    .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")

      .flex.flex-col.gap-2.p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Visual Music Theory
      .p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Collaborative performance
      .p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Live Multimedia Production
      .p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Creative Web Development


  .flex.flex-col.gap-4(style="flex: 1 1 300px")
    .bg-light-200.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-4
      .text-2xl Private tutorship session
      .flex.flex-wrap.gap-2.items-baseline.mx-2
        .text-4xl $45
        .flex-1.text-center.text-xl.op-50 or
        .text-3xl.op-50(title="1500 THB - Thai Baht") ฿1500
      ul.list-circle.list-inside.my-2
        li 1 hour one-on-one session
        li Online video call (Google Meet) 
        li Or in-person meeting (Phuket, Thailand)
        li Personalized educational program
        li Interactive web-apps toolset
      button.relative.flex.bg-dark-300.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl(
      aria-label="Schedule a tutorship session button"
      :class="{'bg-green-600 op-60': scheduled}"
      :disabled="scheduled"
      @click="handleClick") 
        .p-0 1. 
        .flex-1 BOOK A SESSION
        .i-la-check.absolute.right-4(v-if="scheduled")
      button.relative.flex.bg-dark-300.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl(
      aria-label="Pay for the session with Stripe"
      :disabled="paid"
      :class="{'bg-green-600 op-60': paid}"
      @click="pay()") 
        .p-0 2.
        .flex-1.text-center PAY WITH STRIPE
        .i-la-check.absolute.right-4(v-if="paid")

      .text-green-600.p-4.bg-shadow-xl.rounded-2xl.text-center.text-xl(v-if="scheduled && paid") All set! See you soon!

  .flex.flex-wrap.gap-8.items-start(style="flex: 1 1 300px")
    .bg-light-400.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4(style="flex: 1 1 300px")
      p Find my expertise fit to guide your own musical journey? Let's have a talk! I'm ready to share my experience and knowledge in dense and complete form of 1-hour lessons according to personal program developed on the first orientational meeting. Let's talk!
    a.flex-1.flex.gap-4.items-center.z-4.p-4.rounded-xl.shadow-xl.bg-dark-200.text-light(
      href="https://discordapp.com/users/535370860521979914/" 
      target="_blank"
      )
      .i-la-discord.text-4xl
      .text-2xl davay42

    a.flex-1.flex.gap-4.items-center.z-4.p-4.rounded-xl.shadow-xl.bg-dark-200.text-light(
      href="https://t.me/starov"
      target="_blank"
      )
      .i-la-telegram.text-4xl
      .text-2xl starov

    a.flex-1.flex.gap-4.items-center.z-4.p-4.rounded-xl.shadow-xl.bg-dark-200.text-light(
      href="https://instagram.com/chromatone.center"
      target="_blank"
      )
      .i-la-instagram.text-4xl
      .text-2xl chromatone.center
  .flex.flex-wrap.gap-4.w-full.items-start.flex-1
    button.flex.items-center.gap-4.p-4.bg-dark-200.text-light.shadow-xl.rounded-2xl(v-if="isSupported" @click="startShare()")
      .i-la-share.text-4xl
      .text-2xl Share this page
    .shadow-xl.rounded-2xl.overflow-clip.z-10.max-w-45c.min-w-40.max-w-45ch(style="flex: 1 1 240px" v-html="svg")

</template>

<style scoped lang="postcss"></style>