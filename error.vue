<template>
  <h1>Une erreur s'est produite. Code: {{ error.statusCode }}</h1>
  <NuxtLink to="/">Retourner à la page d'acceuil</NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  error: Object
});
</script>
