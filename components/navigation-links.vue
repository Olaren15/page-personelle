<template>
  <li v-for="link in links" class="p-1">
    <NuxtLink :to="link.route">{{ link.title }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
const links = [
  {route: '/', title: 'Home'},
  {route: '/projects', title: 'Projects'},
  {route: '/contact', title: 'Contact'}
]
</script>
