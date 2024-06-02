<script setup>
import { useShare } from '@vueuse/core'
import { useClipboard } from '@vueuse/core'

const source = ref('https://tutor.chromatone.center/')
const { text, copy, copied } = useClipboard({ source })

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

const showQr = ref(false)

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
.flex.flex-wrap.items-start.gap-8.p-8( style="background:  linear-gradient(hsla(300deg,1%,90%,0.9) 0%,hsla(300deg,1%,100%,0.7) 50%, hsla(0deg,50%,100%,0.2) 100%), url(/pattern.jpg); background-size: 700px; background-attachment: normal; background-repeat: all")

  .flex.flex-wrap.gap-8.z-2(style="flex: 1 1 300px")

    a.w-full.flex.flex-wrap.items-center.gap-4.bg-light-400.p-4.rounded-2xl.shadow-xl(href="https://chromatone.center" target="_blank")
      img.w-10.z-2(src="~assets/images/logo.svg")
      .font-bold.text-2xl Chromatone
      .flex-auto 
      .text-sm.uppercase.op-40.text-right.flex-1 Visual Music Language

    .flex.flex-wrap.gap-4
      .flex.items-stretch.bg-light-400.rounded-2xl.overflow-clip.flex-wrap.shadow-xl(style="flex: 1 1 220px")

        img.op-90(src="/square.jpg")

      .flex.items-stretch.bg-light-400.rounded-xl.overflow-clip.flex-wrap.shadow-xl(style="flex: 1 1 220px")
        .flex.flex-col.gap-2.flex-1.p-4
          h1.text-3xl.sm-text-4xl Denis Starov
          .text-xl.sm-text-2xl Visual Music Tutor
          .flex-auto
          h2.text-lg Phuket, Thailand

  .flex.flex-col.gap-4(style="flex: 1 1 280px")
    .bg-light-200.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-4
      .text-2xl Private tutorship sessions
      .flex.flex-wrap.gap-2.items-baseline.mx-2
        .flex.items-baseline
          .text-4xl $45
          .text-2xl.op-50 /hr
        //- .text-2xl.op-50(title="1500 THB - Thai Baht") (฿1500/hr)
      ul.list-circle.list-inside.my-2
        li 1 hour one-on-one session
        li Online video-call (Google Meet) 
        li Personalized educational program
        li Start from any music theory and practice level
        li Go as deep as you want
        li Interactive explainer web-apps at hand
        li Insights and advice on your current projects

      button.relative.flex.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl(
      aria-label="Schedule a tutorship session button"
      :class="{'bg-green-600 op-60': scheduled}"
      data-umami-event="Book"
      :disabled="scheduled"
      @click="handleClick") 
        .p-0 1. 
        .flex-1 BOOK A SESSION
        .i-simple-icons-calendly(v-if="!scheduled")
        .i-la-check(v-else)

      button.relative.flex.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl(
      aria-label="Pay for the session with Stripe"
      :disabled="paid"
      :class="{'bg-green-600 op-60': paid, 'op-60': !scheduled}"
      data-umami-event="Pay"
      @click="pay()") 
        .p-0 2.
        .flex-1.text-center PAY WITH STRIPE
        .i-la-stripe.text-2xl(v-if="!paid")
        .i-la-check(v-else)

      .text-sm(v-if="!paid") You can pay any time before or after the session.
      .text-green-600.p-4.bg-shadow-xl.rounded-2xl.text-center.text-xl(v-if="scheduled && paid") All set! See you there!

  .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")

    youtube-embed(
      style="flex: 1 1 300px"
      video="qthKClCRIl0")
    .bg-light-400.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4(style="flex: 1 1 300px")
      p I'm actively developing new ways to interconnect senses and illuminate hidden depths of music and arts. Through my 10+ years in music and 7+ years in the Chromatone odyssey I collected wide independent musician experience, deep music theory understanding and a handful of free open-source interactive music web-apps to learn, explore and perform with. Now I'm offering my helping hand to you on your own way into depths of music with personalized programs tailored for your goals and aspirations. My main tutoring subjects are:

    .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")
      .flex.flex-col.gap-2.p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Visual Music Theory
        .text-sm How to improve your understanding of rhythms, notes, intervals, chords and scales with shapes and colors
      .flex.flex-col.gap-2.p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Collaborative performance
        .text-sm How to improvise with others and how to organise a nice jam session
      .flex.flex-col.gap-2.p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Live Multimedia Production
        .text-sm How to research and build your own portable setup to create and record music live
      .flex.flex-col.gap-2.p-4.bg-light-400.rounded-2xl.shadow-xl(style="flex: 1 1 40%")
        h3.text-2xl Creative Web Development
        .text-sm How to use JavaScript to create stunning interactive multimedia web-apps


  .flex.flex-wrap.gap-8.items-start(style="flex: 1 1 300px")
    .bg-light-400.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4(style="flex: 1 1 300px")
      p Want to make sure that my expertise will fit guiding your personal musical journey? Let's just have a talk! We can discuss your ideas, doubts and aspirations before you decide on the session. I'm open for any kinds of educational and creative collaboration formats.
      .flex.flex-wrap.gap-4.w-full
        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.border-op-50.hover-border-op-100.text-dark.transition(
          href="https://t.me/starov"
          data-umami-event="Telegram"
          style="flex: 1 1 80px"
          target="_blank"
          )
          .i-la-telegram.text-3xl
          .text-xl starov

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.border-op-50.hover-border-op-100.text-dark.transition(
          data-umami-event="Discord"
          href="https://discordapp.com/users/535370860521979914/" 
          target="_blank"
          style="flex: 1 1 80px"
          )
          .i-la-discord.text-3xl
          .text-xl davay42

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.border-op-50.hover-border-op-100.text-dark.transition(
          style="flex: 1 1 100px"
          href="https://instagram.com/starov"
          data-umami-event="Instagram"
          target="_blank"
          )
          .i-la-instagram.text-3xl
          .text-xl starov
    .flex.flex-col.items-stretch.gap-4.w-full.items-start(style="flex: 1 1 240px" )
      .flex.flex-wrap.items-stretch.gap-4.shadow-xl.bg-light-100.p-4.rounded-2xl.overflow-clip.z-10.max-w-45ch.min-w-40
        .text-2xl Share this page 
        .text-lg It's not easy to reach people these days. Your contribution is spreading the word is very appreciated!

        button.flex.items-center.gap-4.p-4.bg-dark-200.text-light.shadow-xl.rounded-2xl.disabled-contrast-40(
          data-umami-event="Share"
          style="flex: 1 1 50px" 
          :disabled="!isSupported" 
          @click="startShare()"
          )
          .i-la-share.text-2xl
          .text-xl Share

        button.flex.items-center.gap-4.p-4.bg-dark-200.text-light.shadow-xl.rounded-2xl(
          @click="copy()"
          data-umami-event="Copy"
          style="flex: 1 1 50px" 
        ) 
          .i-la-clipboard.text-2xl
          .text-xl.flex-1.text-left {{copied ? 'Copied': 'Copy'}}

        button.flex.items-center.gap-4.p-4.bg-dark-200.text-light.shadow-xl.rounded-2xl.disabled-contrast-40(
          data-umami-event="Share"
          style="flex: 1 0 80px" 
          @click="showQr = !showQr")
            .i-la-qrcode.text-2xl
            .text-xl.flex-1.text-left {{ showQr ? 'Hide' : 'Show' }}&nbsp;QR


      .shadow-xl.rounded-2xl.overflow-clip.z-10.min-w-40.max-w-45ch( v-html="svg" v-if="showQr")

</template>

<style scoped lang="postcss"></style>