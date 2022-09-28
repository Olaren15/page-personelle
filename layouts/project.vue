<template>
  <div class="subpixel-antialiased drawer">
    <input id="page-drawer" v-model="isDrawerOpen" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <header class="sticky top-0 z-50">
        <NavigationBar/>
      </header>
      <div
          class="container relative mx-auto p-10 prose md:prose-lg lg:prose-lg 2xl:prose-xl md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
        <slot/>
      </div>
      <PageFooter/>
    </div>
    <div class="drawer-side">
      <label for="page-drawer" class="drawer-overlay"></label>
      <NavigationLinks :is-drawer="true" @link-click="click" />
    </div>
    <ToasterRoot />
  </div>
</template>

<script setup lang="ts">
import {useState} from "#imports";
import ToasterRoot from "~/components/toaster-root.vue";
import NavigationBar from "~/components/navigation-bar.vue";
import NavigationLinks from "~/components/navigation-links.vue";
import PageFooter from "~/components/page-footer.vue";


const isDrawerOpen = useState("isDrawerOpen", () => false);
const click = () => {
  isDrawerOpen.value = false;
};
</script>
