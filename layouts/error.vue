<template>
  <h1 v-if="error.statusCode === 404">Page not found</h1>
  <h1 v-else>An error has occured. Code: {{ error.statusCode }} </h1>
  <NuxtLink to="/">Home Page</NuxtLink>
</template>

<script>
export default {
  props: ['error'],
}
</script>
