<template>
  <h1>À propos</h1>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";

definePageMeta({
  title: "À propos",
});

useHead({
  meta: [
    {
      name: "description",
      content: "À propos de moi",
    },
  ],
});
</script>
