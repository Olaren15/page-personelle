<template>
  <div class="subpixel-antialiased drawer">
    <input id="page-drawer" v-model="isDrawerOpen" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <header>
        <NavigationBar />
      </header>
      <div
        class="container mx-auto p-10 prose md:prose-lg lg:prose-lg 2xl:prose-xl md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="page-drawer" class="drawer-overlay"></label>
      <NavigationLinks :is-drawer="true" @link-click="click" />
    </div>
    <ToasterRoot />
  </div>
</template>

<script setup lang="ts">
import { useHead, useRoute, useState } from "#imports";
import ToasterRoot from "~/components/toaster-root.vue";
import NavigationBar from "~/components/navigation-bar.vue"
import NavigationLinks from "~/components/navigation-links.vue"

const route = useRoute();
useHead(() => {
  return {
    title: `${route.meta.title} - Olaren.dev`,
    htmlAttrs: {
      lang: "fr"
    }
  };
});

const isDrawerOpen = useState("isDrawerOpen", () => false);
const click = () => {
  isDrawerOpen.value = false;
};
</script>
