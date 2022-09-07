<template>
  <ul :class="props.isDrawer ? 'menu p-4 w-80 bg-neutral-focus' : 'menu menu-horizontal p-0'">
    <li v-for="page in pages" :key="page.route" class="p-1">
      <NuxtLink :to="page.route" class="text-neutral-content" @click="emits('linkClick')">
        {{ page.title }}
      </NuxtLink>
      <ul v-if="page.children" :class="props.isDrawer ? 'p-2 bg-neutral-focus static flex' : 'p-2 bg-neutral-focus'">
        <li v-for="subPage in page.children" :key="subPage.route" class="p-1">
          <NuxtLink :to="subPage.route" class="text-neutral-content" @click="emits('linkClick')">
            {{ subPage.title }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { usePages } from "~/composables/usePages";

interface NavigationLinksProps {
  isDrawer: boolean;
}

const props = defineProps<NavigationLinksProps>();
const emits = defineEmits(["linkClick"]);

const pagesData = await usePages();
const pages = pagesData.getPages();
</script>
