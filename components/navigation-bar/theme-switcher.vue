<template>
  <label class="swap swap-rotate">
    <input v-model="isDarkTheme" type="checkbox"/>
    <SunIcon class="swap-on w-8 h-8"/>
    <MoonIcon class="swap-off w-8 h-8"/>
  </label>
</template>

<script setup lang="ts">
import {onMounted, useColorMode, useState, watch} from "#imports";
import {SunIcon, MoonIcon} from "@heroicons/vue/24/solid/index.js";

const colorMode = useColorMode();
let isDarkTheme = useState<boolean>('isDarkTheme', () => false);

watch(isDarkTheme, () => {
  colorMode.preference = isDarkTheme.value ? 'dark' : 'light'
})

onMounted(() => {
  isDarkTheme.value = colorMode.value === 'dark';
})

</script>
