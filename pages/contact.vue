<template>
  <div>
    <div class="prose pb-4">
      <h1>Envoyez-moi un courriel</h1>
    </div>

    <SendEmailForm />
  </div>
</template>

<script setup lang="ts">
import SendEmailForm from "~/components/send-email-form.vue";
import { definePageMeta } from "#imports";

definePageMeta({
  title: "Contact",
});
</script>
