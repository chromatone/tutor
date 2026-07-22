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
          .text-lg Improve your music theory and practice with colors, shapes, webapps and my attentive guidance
          .flex-auto
          a.dark-bg-light-400.dark-text-dark.self-start.text-center.relative.flex.bg-dark-300.bg-op-90.hover-bg-op-100.dark-bg-op-90.dark-hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.px-4.py-2.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl(href="#book") Book a session
          .flex-auto


    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")
      p Hi! My name is Denis. I look at the world around as an engineer and a designer, but also as a philosopher and as artist. I'm paving new ways to interconnect senses and illuminate hidden depths of music and arts. 
      
      p In my 12+ years of music and 8+ years in Chromatone studies I acquired:
      ul.list-circle
        li quite some experience as an independent musician
        li scientific understanding of primary music theory topics
        li 5+ years of weekly live jams experience, technology and joy
        li a handful of free and open-source interactive  web-apps to learn, explore and perform music with
      p Together we can look at music from completely new perspective, improving your skills and acquiring deeper understanding of complex topics involved in music. Music is a form of Math, you know. Let's look at it closer!



  .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")

    youtube-embed(
      style="flex: 1 1 300px"
      video="qthKClCRIl0")
    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")

      p I'm offering my expertise in a form of personal tutoring sessions for music students and teachers, producers and performers from any place on Earth. 

      p We meet and I get to know you and your musical background first. Then - your goals and aspirations in music and arts. Then we develop personal study program according to the priorities set. I estimate practice efforts, provide guidance into core topics, give engaging homework and additional sources for further research. I know how to make music study colorful and fun, so we can get there at ease. Then we may decide on a rhythm to follow as it goes for you.

      p Music takes time. Studying music takes even more of it. It may seem too much work until you realize that the exploration process brings so much joy by itself. Curiosity, sense of harmony, self-esteem and self-expression bloom when you create music, and I can assist you to blossom with it!

    img.rounded-xl.shadow-xl(src="/place.jpg" style="flex: 1 1 300px")

    .bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-xl.flex.flex-col.gap-4.text-md(style="flex: 1 1 300px")
      .text-3xl Primary tutorship subjects

    .flex.flex-wrap.gap-8(style="flex: 1 1 45ch")
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-2xl Visual Music Theory
        .text-md How to improve your understanding of rhythms, notes, intervals, chords and scales with shapes and colors
        //- a.flex.items-center.self-start.gap-2.border-1.rounded-xl.py-2.px-3.shadow-lg.bg-light-700.dark-bg-dark-200(href="https://chromatone.center/theory" target="_blank")
        //-   .i-la-link
        //-   .p-0.-mt-1 chromatone/theory
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-2xl Collaborative performance
        .text-md How to improvise music with others and how to initiate and sustain jam spaces and communities 
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-2xl Live Multimedia Production
        .text-md How to research and build your own portable setup to create and record music live
      .flex.flex-col.gap-2.p-4.bg-light-400.dark-bg-dark-300.rounded-2xl.shadow-2xl(style="flex: 1 1 40%")
        h3.text-2xl Creative Web Development
        .text-md How to use JavaScript to create stunning interactive multimedia web-apps

  .flex.flex-col.gap-4(style="flex: 1 1 280px")


    #book.bg-light-200.dark-bg-dark-300.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-4 
      .text-3xl Private tutorship session
      .flex.flex-col.gap-2.items-baseline
        .flex.items-baseline.text-2xl
          .op-90  $54
          .op-50.ml-2 / 1 hour sessions
      a.dark-bg-light-400.bg-op-90.dark-bg-op-90.dark-hover-bg-op-100.my-2.text-center.relative.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl.dark-text-dark(
        aria-label="Schedule a tutorship session button"
        data-umami-event="Book"
        href="https://calendly.com/davay/private-tutorship-session"
        target="_blanks"
        @click="booked = true"
        :class="{'bg-green-600': booked}"
        ) 
        .p-0 1. 
        .flex-1 Book a time slot
        .i-simple-icons-calendly(v-if="!booked")
        .i-la-check(v-else)
      a.dark-bg-light-400.bg-op-90.dark-bg-op-90.dark-hover-bg-op-100.my-2.text-center.relative.bg-dark-300.bg-op-95.hover-bg-op-100.transition.text-light.text-lg.flex.items-center.justify-center.p-4.flex-1.rounded-xl.shadow-xl.hover-shadow-2xl.dark-text-dark(
        aria-label="Pay for the session with Stripe"
        data-umami-event="Pay"
        href="https://book.stripe.com/8wM2aD8vV2Loepq28j"
        target="_blank"
        @click="paid = true"
        :class="{'bg-green-600': paid}"
        ) 
        .p-0 2.
        .flex-1.text-center Safe way to pay
        .i-la-stripe.text-2xl(v-if="!paid")
        .i-la-check(v-else)

      .text-sm Please, use the same email address in both booking and payment forms so I can link your payment with the upcoming session. In case of any problems with checkout please <a class="underline" href="#contact">contact me</a> right away.
    .bg-light-200.dark-bg-dark-300.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-2 
      .py-2.my-2.flex.flex-col.gap-2.text-18px
        .text-2xl What makes a session:
        ol.list-decimal.list-inside.mb-2.flex.flex-col.gap-1
          li You choose to book an available one hour slot via Calendly.
          li You may describe your case and leave contacts in the booking form
          li Both of us receive an email with a link to the Google Meet video-call
          li I would ask you to pay at least 1 day before the meeting, so we are both determined about arranging our time accordingly
          li At the beginning of a call we would first explore your music knowledge level and practical skills
          li Then we would establish some kind of common language that will be able to describe your current motivations in music and arts
          li Then we develop pathways to improve and grow according to your priorities and resources
          li We explore music theory with illustrations, articles, books and music practice with a variety of interactive web-apps 
          li We make music practice exciting and really independent, just the browser is enough to go
          li You get all these audio-visual instruments and skills in your hands directly from the author
          li Shortly after the session I would send you a list of notable apps, links and sources mentioned

    .bg-light-200.dark-bg-dark-300.p-4.rounded-2xl.shadow-xl.flex.flex-col.gap-2.text-sm
        p You can set your own meetings schedule via my Calendly page. 2-4 sessions can guide your personal theory research and musical practice growth for weeks, months and years, depending on your goals, pace and passion. 4-8 would be enough to get very deep into many topics and feel quite confident in any music landscape. We might meet weekly, monthly or seasonly - you can have your time in music shared with me as a friendly satellite.
        p All my instruments are free and open source. As a tutor I'm guiding your own research and explorations. Chromatone is a language, and after you get to know it, you can read anything yourself and speak with it as you wish.


  .flex.flex-wrap.gap-8.items-start(style="flex: 1 1 300px")

    img.rounded-xl.shadow-xl(src="/teach.jpg" style="flex: 1 1 250px")

    #contact.bg-light-400.dark-bg-dark-300.p-6.rounded-2xl.shadow-2xl.flex.flex-col.gap-6(style="flex: 1 1 300px")
      .text-3xl Let's talk first
      p Want to make sure if my expertise fits your own musical journey? Just send me a message, ask anything! Share your thoughts, doubts and aspirations before you decide on a session. Contact me to discuss whether visual approach can really benefit your specific musical journey and current projects.
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
        .text-2xl Share this page
        .text-lg Peer to peer recomendations are the only real way to connect across our vast society. I would highly appreciate if you share my tutorship offer with your friends or family members. 

        .text-md Show or send this page to someone who might be interested in studying music, arts or programming with a competent tutor:


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
