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

const { isSupported, share } = useShare()

function startShare() {
  share({
    title: 'Denis Starov',
    text: 'Visual music tutorship sessions with Chromatone author author and developer. Bring colors to your music and harmony to your visual arts journey.',
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
  window.open('https://book.stripe.com/7sIdTl3bB71E6WY14d', '_blank')
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

    .flex.flex-wrap.gap-4.w-full
      .relative.p-16.bg-cover.bg-center.min-h-100.flex.items-stretch.bg-light-400.dark-bg-dark-300.rounded-2xl.overflow-clip.flex-wrap.shadow-xl(style="flex: 1 1 220px" :style="{backgroundImage: `url(/cutt.gif)`}")
        .absolute.top-0.bottom-0.left-0.right-0.bg-cover.bg-center.hover-opacity-0.transition.duration-1000(
          :style="{backgroundImage: `url(saber.png)`}"
        )



      .flex.items-stretch.bg-light-400.dark-bg-dark-300.rounded-xl.overflow-clip.flex-wrap.shadow-xl(style="flex: 1 1 220px")
        .flex.flex-col.gap-2.flex-1.p-4
          h1.text-5xl Denis Starov
          .text-2xl Visual Music Tutor
          h2.text-sm Phuket, Thailand
          .text-lg Improving music skills and understanding with colors and shapes
          .flex-auto
          a.dark-bg-light-400.dark-text-dark.self-start.text-center.relative.flex.bg-dark-300.bg-op-90.hover-bg-op-100.dark-bg-op-90.dark-hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.px-4.py-2.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl(href="#book") Book a session now
          .flex-auto


    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")
      p I'm paving new ways to interconnect senses and illuminate hidden depths of music and arts. During my 10+ years in music and 7+ years in the Chromatone study I acquired some experience of an independent musician, deep understanding of music theory and a handful of free open-source interactive music web-apps to learn, explore and perform with. 
      p Together we can look at music from completely new perspective, improving your current skills by deeper understanding of complex topics.



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
        //- a.flex.items-center.self-start.gap-2.border-1.rounded-xl.py-2.px-3.shadow-lg.bg-light-700.dark-bg-dark-200(href="https://chromatone.center/theory" target="_blank")
        //-   .i-la-link
        //-   .p-0.-mt-1 chromatone/theory
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Collaborative performance
        .text-md How to improvise music with others and how to initiate and sustain jam spaces and communities 
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Live Multimedia Production
        .text-md How to research and build your own portable setup to create and record music live
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-3xl Creative Web Development
        .text-md How to use JavaScript to create stunning interactive multimedia web-apps

  .flex.flex-col.gap-4(style="flex: 1 1 280px")


    #book.bg-light-200.dark-bg-dark-300.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-2 
      .text-3xl Private tutorship session
      .flex.flex-wrap.gap-2.items-baseline
        .flex.items-baseline
          .text-5xl $79
          .text-2xl.op-50.ml-2 / hour

      a.dark-bg-light-400.bg-op-90.dark-bg-op-90.dark-hover-bg-op-100.my-2.text-center.relative.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl.dark-text-dark(
        aria-label="Schedule a tutorship session button"
        data-umami-event="Book"
        href="https://calendly.com/davay/private-tutorship-session"
        target="_blanks"
        @click="booked = true"
        :class="{'bg-green-600': booked}"
        ) 
        .p-0 1. 
        .flex-1 BOOK YOUR TIME
        .i-simple-icons-calendly(v-if="!booked")
        .i-la-check(v-else)
      a.dark-bg-light-400.bg-op-90.dark-bg-op-90.dark-hover-bg-op-100.my-2.text-center.relative.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl.dark-text-dark(
        aria-label="Pay for the session with Stripe"
        data-umami-event="Pay"
        href="https://book.stripe.com/7sIdTl3bB71E6WY14d"
        target="_blank"
        @click="paid = true"
        :class="{'bg-green-600': paid}"
        ) 
        .p-0 2.
        .flex-1.text-center PAY BEFORE START
        .i-la-stripe.text-2xl(v-if="!paid")
        .i-la-check(v-else)

      .text-sm Please, use the same email address in both booking and payment forms so I can link your payment with the upcoming session. In case of any difficulties, <a class="underline" href="#contact">contact me</a> right away.
    .bg-light-200.dark-bg-dark-300.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-2 
      .py-2.my-2.flex.flex-col.gap-2.text-18px
        .text-2xl What makes a session:
        ul.list-circle.list-inside.mb-2.flex.flex-col.gap-1
          li 1 hour one-on-one meeting
          li You get a link to the online video-call (Google Meet) 
          li We develop a program according to your goals and insipirations
          li First we assess your knowledge levels and practical skills
          li Then we find ways to improve them according to your priorities and time availability
          li We will be exploring the topics with illustrations, articles, books and a variety of interactive web-apps 
          li Looking for best learning strategies for you and creative strategies for your projects
          li You will receive a list of all notable links and sources shortly after the session
          li You are welcome to set your own schedule on our calendar so that every now and then we can have a pleasant conversation about visual music and your progress in it.

  .flex.flex-wrap.gap-8.items-start(style="flex: 1 1 300px")

    img.rounded-xl.shadow-xl(src="/share.jpg")

    #contact.bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-2xl.flex.flex-col.gap-6(style="flex: 1 1 300px")
      .text-2xl Let's talk
      p Want to make sure if my expertise fits your own musical journey? Let's have a chat! Share your thoughts, doubts and aspirations before you decide on a session. Contact me to discuss whether a visual approach could benefit your specific musical journey and projects.
      .flex.flex-wrap.gap-4.w-full

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.dark-border-op-50.dark-hover-border-op-100(
          style="flex: 1 1 100px"
          href="https://instagram.com/chromatone.center"
          data-umami-event="Instagram"
          target="_blank"
          )
          .i-la-instagram.text-3xl
          .text-xl chromatone.center

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.dark-border-op-50.dark-hover-border-op-100(
          data-umami-event="Discord"
          href="https://discordapp.com/users/535370860521979914/" 
          target="_blank"
          style="flex: 1 1 80px"
          )
          .i-la-discord.text-3xl
          .text-xl davay42


        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.dark-border-op-50.dark-hover-border-op-100(
          href="https://t.me/starov"
          data-umami-event="Telegram"
          style="flex: 1 1 80px"
          target="_blank"
          )
          .i-la-telegram.text-3xl
          .text-xl starov 

        a.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.dark-border-op-50.dark-hover-border-op-100(
          href="mailto:tutor@chromatone.center"
          data-umami-event="Email"
          style="flex: 1 1 100px"
          target="_blank"
          )
          .i-la-at.text-3xl
          .text-xl tutor@chromatone.center 


    .flex.flex-col.items-stretch.gap-4.w-full.items-start(style="flex: 1 1 240px" )
      .flex.flex-wrap.items-stretch.gap-4.shadow-2xl.bg-light-100.dark-bg-dark-300.p-4.rounded-2xl.overflow-clip.z-10.max-w-45ch.min-w-40
        .text-2xl Share this link
        .text-lg It's not so easy to reach people these days. Sharing is highly appreciated.

        .text-md Contribute by showing/sending this page to someone who you know might be interested in studying music, art or code.


        button.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.dark-border-op-50.dark-hover-border-op-100(
          @click="copy()"
          data-umami-event="Copy"
          style="flex: 1 1 50px" 
          ) 
          .i-la-clipboard.text-2xl
          .text-xl.flex-1.text-left {{copied ? 'Copied': 'Copy'}}

        button.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.disabled-contrast-40.dark-border-op-50.dark-hover-border-op-100(
          data-umami-event="Share"
          style="flex: 1 1 50px" 
          v-show="isSupported" 
          @click="startShare()"
          )
          .i-la-share.text-2xl
          .text-xl Share

        button.flex.gap-4.items-center.z-4.p-2.rounded-xl.shadow-lg.hover-shadow-xl.border-4.border-dark-100.dark-border-light-900.border-op-50.hover-border-op-100.text-dark.dark-text-light.transition.dark-border-op-50.dark-hover-border-op-100(
          data-umami-event="Share"
          style="flex: 1 0 80px" 
          @click="showQr = !showQr")
            .i-la-qrcode.text-2xl
            .text-xl.flex-1.text-left {{ showQr ? 'Hide' : 'Show' }}&nbsp;QR


      .shadow-xl.rounded-2xl.overflow-clip.z-10.min-w-40.max-w-45ch( v-html="svg" v-if="showQr")
</template>
