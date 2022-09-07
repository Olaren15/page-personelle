<template>
  <main>
    <ContentRenderer :value="data" />
  </main>
</template>

<script setup lang="ts">
import { definePageMeta, queryContent, useAsyncData, useHead, useRoute } from "#imports";

const route = useRoute();

const { data } = await useAsyncData("page-data", () => queryContent(route.path).findOne(), {
  initialCache: false
});

useHead(() => {
  return {
    title: `${data.value.title} - Olaren.dev`,
    htmlAttrs: {
      lang: "fr"
    }
  };
});

definePageMeta({
  layout: "project"
});
</script>
