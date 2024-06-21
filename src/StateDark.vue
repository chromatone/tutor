<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <button class="p-2 text-xl" @click="toggleDark()" aria-label="Toggle dark mode" v-tooltip.right="'Toggle dark mode'">
    <div class="i-carbon-moon" v-show="isDark"></div>
    <div class="i-ion-ios-sunny" v-show="!isDark"></div>
  </button>
</template>
