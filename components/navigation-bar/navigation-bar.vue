<template>
  <nav>
    <div class="px-6 navbar bg-neutral-focus text-neutral-content">
      <div class="navbar-start">
        <label for="page-drawer" class="btn btn-square btn-ghost md:hidden">
          <Bars3Icon class="h-8 w-8" />
        </label>
      </div>
      <div class="navbar-center hidden md:flex">
        <navigation-links :is-drawer="false" />
      </div>
      <div class="navbar-center md:hidden">
        <current-page-indicator />
      </div>
      <div class="navbar-end flex">
        <theme-switcher />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/solid/index.js";
import CurrentPageIndicator from "~/components/navigation-bar/current-page-indicator.vue";
import NavigationLinks from "~/components/navigation-bar/navigation-links.vue";
import ThemeSwitcher from "~/components/navigation-bar/theme-switcher.vue";</script>
