<template>
  <div class="subpixel-antialiased drawer">
    <input
      id="page-drawer"
      v-model="isDrawerOpen"
      class="drawer-toggle"
      type="checkbox"
      aria-label="Ouvrir le menu de navigation"
    />
    <div class="drawer-content flex flex-col">
      <header class="sticky top-0 z-50">
        <NavigationBar />
      </header>
      <div
        :class="`container relative mx-auto p-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg ${
          route.meta.needsProseText
            ? 'prose md:prose-lg lg:prose-lg 2xl:prose-xl'
            : ''
        }`"
      >
        <slot />
      </div>
      <PageFooter />
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
import NavigationBar from "~/components/navigation-bar.vue";
import NavigationLinks from "~/components/navigation-links.vue";
import PageFooter from "~/components/page-footer.vue";

const route = useRoute();
useHead(() => {
  return {
    title: route.meta.usesCustomTitle
      ? undefined
      : `${route.meta.title} - Olaren.dev`,
    htmlAttrs: {
      lang: "fr",
    },
  };
});

const isDrawerOpen = useState("isDrawerOpen", () => false);
const click = () => {
  isDrawerOpen.value = false;
};
</script>
