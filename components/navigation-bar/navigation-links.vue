<template>
  <li v-for="page in pages" class="p-1">
    <NuxtLink :to="page.route">{{ page.title }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
import {usePages} from "~/composables/usePages";

const pages = usePages().getPages();

</script>
