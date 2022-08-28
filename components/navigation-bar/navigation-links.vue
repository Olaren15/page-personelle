<template>
  <ul :class="props.isDrawer ? 'menu p-4 overflow-y-auto w-80 bg-neutral-focus' : 'menu menu-horizontal p-0'">
    <li v-for="(page, index) in pages" :key="index" class="p-1">
      <NuxtLink :to="page.route" @click="emits('linkClick')">{{ page.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { usePages } from "~/composables/usePages";

interface NavigationLinksProps {
  isDrawer: boolean;
}

const props = defineProps<NavigationLinksProps>();
const emits = defineEmits(['linkClick'])

const pages = usePages().getPages();
</script>
