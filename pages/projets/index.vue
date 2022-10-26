<template>
  <div>
    <div class="prose">
      <h1>Projets</h1>
      <p>Vous trouverez ici une liste de mes projets personnels</p>
    </div>
    <ContentList v-slot="{ list }" path="/projets">
      <a
        v-for="project in list"
        :key="project._path"
        :href="project._path"
        class="flex align-middle justify-between bg-base-200 text-base-200-content mt-4 p-4 rounded-xl"
      >
        <div>
          <h2 class="text-lg font-bold">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
        <ChevronRightIcon class="place-self-center shrink-0 ml-4 w-8" />
      </a>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/solid/index.js";
import { definePageMeta } from "#imports";

definePageMeta({
  title: "Projets",
});
</script>
