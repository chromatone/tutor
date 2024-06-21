<script setup>
import { useShare } from '@vueuse/core'
import { useClipboard } from '@vueuse/core'
import { renderSVG } from 'uqr'
import { onMounted, ref } from 'vue';

import YoutubeEmbed from './YoutubeEmbed.vue';
import StateDark from './StateDark.vue';
import logo from './logo.svg?raw'

const showQr = ref(false)
const booked = ref(false)
const paid = ref(false)

const url = 'https://tutor.chromatone.center/'

const { text, copy, copied } = useClipboard({ source: url })

function startShare() {
  share({
    title: 'Denis Starov',
    text: 'Chromatone tutor',
    url
  })
}

const svg = renderSVG(url, {
  border: 3,
  blackColor: '#333',
  ecc: 'M'
})




function bookSession() {
  window.open('https://calendly.com/davay/private-tutorship-session', '_blank')
}

async function pay() {
  window.open('https://book.stripe.com/6oE3eH3bB99MepqeV2', '_blank')
}

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

</script>

<template lang="pug">
.flex.flex-wrap.items-start.gap-8.p-8.text-18px.line-height-relaxed.dark-text-light-300( 
  class=""
  :style="{background:  `linear-gradient(hsla(300deg,1%,${isDark ? 10 : 90}%,0.97) 0%,hsla(300deg,1%,${isDark ? 15 : 95}%,.96) 50%, hsla(0deg,0%,${isDark ? 20 : 100}%,0.8) 100%), url(/pattern.jpg)`, backgroundSize: `700px`, backgroundAttachment: `normal`, backgroundRepeat: `all`}")

  .flex.flex-wrap.gap-8.z-2(style="flex: 1 1 300px")

    a.w-full.flex.flex-wrap.items-center.gap-4.dark-bg-dark-300.bg-light-400.p-4.rounded-2xl.shadow-xl(href="https://chromatone.center" target="_blank")
      .w-12(v-html="logo")
      .font-bold.text-2xl Chromatone
      .flex-auto 
      .text-sm.uppercase.op-40.text-right.flex-1 Visual Music Language
    StateDark.fixed.top-4.right-4

    .flex.flex-wrap.gap-4
      .flex.items-stretch.bg-light-400.dark-bg-dark-300.rounded-2xl.overflow-clip.flex-wrap.shadow-xl(style="flex: 1 1 220px")

        img(src="/square.jpg")

      .flex.items-stretch.bg-light-400.dark-bg-dark-300.rounded-xl.overflow-clip.flex-wrap.shadow-xl(style="flex: 1 1 220px")
        .flex.flex-col.gap-2.flex-1.p-4
          h1.text-5xl Denis Starov
          .text-2xl Visual Music Tutor
          h2.text-sm Phuket, Thailand
          .text-lg Improving music skills by understanding nature
          .flex-auto
          a.self-start.text-center.relative.flex.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.px-4.py-2.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl(href="#book") Book a session now
          .flex-auto


    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")
      p I'm paving new ways to interconnect senses and illuminate hidden depths of music and arts. During my 10+ years in music and 7+ years in the Chromatone study I acquired experience of a independent musician, deep understanding of music theory and a handful of free open-source interactive music web-apps to learn, play and explore with. 
      p I can show you music from completely new perspective, improving your current skills by deeper understanding.



  .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")

    youtube-embed(
      style="flex: 1 1 300px"
      video="qthKClCRIl0")
    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")

      p From June 2024 and onwards I'm  offering my expertise in a convenient form of pay-as-you-go tutoring sessions to students and musicians all over the world. 
      p As a tutor I get to know you first, then we develop personal study program specific for your goals and aspirations. I estimate practice efforts, explain core topics, provide homework and sources. I know how to make music study colorful and fun, so we can get there at ease. 

      p Music itself takes time, but it brings so much back to our life. Curiosity, sense of harmony, self-esteem and self-expression bloom when you create music, and I can assist you to blossom with it too!

    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")
      .text-2xl My primary tutorship subjects

    .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Visual Music Theory
        .text-md How to improve your understanding of rhythms, notes, intervals, chords and scales with shapes and colors
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Collaborative performance
        .text-md How to improvise with others and how to organise a nice jam session
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Live Multimedia Production
        .text-md How to research and build your own portable setup to create and record music live
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Creative Web Development
        .text-md How to use JavaScript to create stunning interactive multimedia web-apps

  .flex.flex-col.gap-4(style="flex: 1 1 280px")

    img.rounded-xl.shadow-xl(src="/share.jpg")
    #book.bg-light-200.dark-bg-dark-300.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-2 
      .text-3xl Private tutorship session
      .flex.flex-wrap.gap-2.items-baseline.mx-2
        .flex.items-baseline
          .text-4xl $45
          .text-2xl.op-50.ml-2 / 1 hour session
        //- .text-2xl.op-50(title="1500 THB - Thai Baht") (฿1500/hr)


      .border-y-2.py-2.my-2.flex.flex-col.gap-2.text-18px
        .text-xl What you get:
        ul.list-circle.list-inside.mb-2.flex.flex-col.gap-1
          li 1 hour one-on-one session
          li Online video-call (Google Meet) 
          li Personal educational program
          li We start from your knowledge level and skills
          li And find ways to improve them together
          li Interactive explainer web-apps at hand
          li Insights and advice on your projects
          li I send a list of mentioned sources  soon after the session

      a.text-center.relative.flex.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl.dark-bg-light.dark-text-dark(
        aria-label="Schedule a tutorship session button"
        data-umami-event="Book"
        href="https://calendly.com/davay/private-tutorship-session"
        target="_blanks"
        @click="booked = true"
        :class="{'bg-green-600': booked}"
        ) 
        .p-0 1. 
        .flex-1 BOOK A SESSION
        .i-simple-icons-calendly(v-if="!booked")
        .i-la-check(v-else)
      a.relative.flex.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl.dark-bg-light.dark-text-dark(
        aria-label="Pay for the session with Stripe"
        data-umami-event="Pay"
        href="https://book.stripe.com/6oE3eH3bB99MepqeV2"
        target="_blank"
        @click="paid = true"
        :class="{'bg-green-600': paid}"
        ) 
        .p-0 2.
        .flex-1.text-center PAY WITH STRIPE
        .i-la-stripe.text-2xl(v-if="!paid")
        .i-la-check(v-else)

      .text-sm You can pay any time before or after the session.


  .flex.flex-wrap.gap-8.items-start(style="flex: 1 1 300px")
    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-2xl.flex.flex-col.gap-6(style="flex: 1 1 300px")
      p Want to make sure if my expertise fits your own musical journey? Let's have a chat! We may discuss your ideas, doubts and aspirations before you decide on a session. DM me to discuss how visual approach can benefit your musical progress and projects.
      .flex.flex-wrap.gap-4.w-full

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition(
          style="flex: 1 1 100px"
          href="https://instagram.com/chromatone.center"
          data-umami-event="Instagram"
          target="_blank"
          )
          .i-la-instagram.text-3xl
          .text-xl chromatone.center

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition(
          data-umami-event="Discord"
          href="https://discordapp.com/users/535370860521979914/" 
          target="_blank"
          style="flex: 1 1 80px"
          )
          .i-la-discord.text-3xl
          .text-xl davay42


        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition(
          href="https://t.me/starov"
          data-umami-event="Telegram"
          style="flex: 1 1 80px"
          target="_blank"
          )
          .i-la-telegram.text-3xl
          .text-xl starov 

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition(
          href="https://github.com/davay42"
          data-umami-event="Telegram"
          style="flex: 1 1 80px"
          target="_blank"
          )
          .i-la-github.text-3xl
          .text-xl davay42 

    .flex.flex-col.items-stretch.gap-4.w-full.items-start(style="flex: 1 1 240px" )
      .flex.flex-wrap.items-stretch.gap-4.shadow-2xl.bg-light-100.dark-bg-dark-300.p-4.rounded-2xl.overflow-clip.z-10.max-w-45ch.min-w-40
        .text-2xl Share this page 
        .text-lg It's not easy to reach people these days. 

        .text-md Sharing this page with someone who you know to be interested in music is highly appreciated! Thanks!


        button.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition(
          @click="copy()"
          data-umami-event="Copy"
          style="flex: 1 1 50px" 
          ) 
          .i-la-clipboard.text-2xl
          .text-xl.flex-1.text-left {{copied ? 'Copied': 'Copy'}}

        button.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.disabled-contrast-40(
          data-umami-event="Share"
          style="flex: 1 1 50px" 
          :disabled="!isSupported" 
          @click="startShare()"
          )
          .i-la-share.text-2xl
          .text-xl Share

        button.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition(
          data-umami-event="Share"
          style="flex: 1 0 80px" 
          @click="showQr = !showQr")
            .i-la-qrcode.text-2xl
            .text-xl.flex-1.text-left {{ showQr ? 'Hide' : 'Show' }}&nbsp;QR


      .shadow-xl.rounded-2xl.overflow-clip.z-10.min-w-40.max-w-45ch( v-html="svg" v-if="showQr")
</template>
