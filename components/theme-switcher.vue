<template>
  <button
    :key="updateSunMoon"
    :class="`swap swap-rotate ${colorMode === 'dark' ? 'swap-active' : ''}`"
    @click="next()"
  >
    <SunIcon class="swap-on w-8 h-8" />
    <MoonIcon class="swap-off w-8 h-8" />
  </button>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid/index.js";
import { onMounted, useColorMode, useCycleList, useState } from "#imports";

const colorMode = useColorMode({
  attribute: "data-theme",
  storageKey: "color-mode",
});

const { next } = useCycleList(["dark", "light"], {
  initialValue: colorMode,
});

// needed to update the sun/moon icon when the component loaded on the client
const updateSunMoon = useState("updateSunMoon", () => 0);
onMounted(() => updateSunMoon.value++);
</script>
