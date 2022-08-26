<template>
  <nav class="p-4">
    <div class="px-6 navbar bg-neutral-focus text-neutral-content rounded-full">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost md:hidden">
            <Bars3Icon class="h-8 w-8"/>
          </label>
          <ul tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral-focus text-neutral-content rounded-box w-52">
            <navigation-links/>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal p-0">
          <navigation-links/>
        </ul>
      </div>
      <div class="navbar-end flex">
        <theme-switcher/>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {Bars3Icon} from "@heroicons/vue/24/solid/index.js";
</script>
