<template>
  <span>{{ nomPage }}</span>
</template>

<script setup lang="ts">
import {useRouter, useState} from "#imports";
import {usePages} from "~/composables/usePages";

const router = useRouter();

const pages = usePages();
let nomPage = useState('nomPage', () => pages.getPageFromRoute(router.currentRoute.value.path).title);

router.beforeEach((guard) => {
  nomPage.value = pages.getPageFromRoute(guard.path).title
});
</script>
