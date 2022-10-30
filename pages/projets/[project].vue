<template>
  <main>
    <ContentRenderer :value="data" />
  </main>
</template>

<script setup lang="ts">
import {
  definePageMeta,
  queryContent,
  useAsyncData,
  useHead,
  useRoute,
} from "#imports";

const route = useRoute();

const { data } = await useAsyncData(
  "page-data",
  () => queryContent(route.path).findOne(),
  {
    initialCache: false,
  }
);

useHead(() => {
  return {
    title: `${data.value.title} - Olaren.dev`,
    meta: [
      {
        name: "description",
        content: `Voir en quoi consiste mon projet de ${data.value.title}`,
      },
    ],
  };
});

definePageMeta({
  needsProseText: true,
  usesCustomTitle: true,
});
</script>
