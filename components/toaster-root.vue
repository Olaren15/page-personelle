<template>
  <div id="toasterRoot" class="toast">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="{
        alert: true,
        // For some reason we can't do `alert-${toast.type} ???`
        'alert-info': toast.type === 'info',
        'alert-success': toast.type === 'success',
        'alert-warning': toast.type === 'warning',
        'alert-error': toast.type === 'error',
      }"
    >
      <div>
        <span>{{ toast.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToasts } from "~/composables/useToasts";

const toasts = useToasts();
</script>
