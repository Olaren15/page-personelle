<template>
  <div>
    <h1>Projets</h1>
    <ContentList v-slot="{ list }" path="/projets">
      <a v-for="project in list" :key="project._path" :href="project._path">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </a>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  title: "Projets"
});

</script>
