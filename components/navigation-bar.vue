<template>
  <nav>
    <div class="px-6 navbar bg-neutral-focus text-neutral-content">
      <div
        class="container mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg"
      >
        <div class="navbar-start">
          <label class="btn btn-square btn-ghost md:hidden" for="page-drawer">
            <Bars3Icon class="h-8 w-8" />
          </label>
        </div>
        <div class="navbar-center hidden md:flex">
          <NavigationLinks :is-drawer="false" />
        </div>
        <div class="navbar-center md:hidden">
          <CurrentPageIndicator />
        </div>
        <div class="navbar-end flex">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/solid/index.js";
import CurrentPageIndicator from "~/components/current-page-indicator.vue";
import NavigationLinks from "~/components/navigation-links.vue";
import ThemeSwitcher from "~/components/theme-switcher.vue";
</script>
