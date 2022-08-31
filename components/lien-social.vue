<template>
  <NuxtLink :to="props.lienNavigation" target="_blank">
    <div class="flex stats shadow bg-neutral text-neutral-content my-4 md:m-4 first:ml-0">
      <div class="stat">
        <div class="stat-title">
          <slot name="social-media-name" />
        </div>
        <div class="stat-value">
          <slot name="username" />
        </div>
        <div class="stat-figure w-16 h-16">
          <slot name="icon" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface LienSocialProps {
  lienNavigation: string,
}

const props = defineProps<LienSocialProps>();
</script>
