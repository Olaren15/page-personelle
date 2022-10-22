<template>
  <NuxtLink :to="props.source" target="_blank">
    <nuxt-picture :class="{ 'w-full': props.fullWidth }" :src="props.source" />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface OptimisedImageProps {
  source: string;
  fullWidth: boolean;
}

const props = defineProps<OptimisedImageProps>();
</script>
