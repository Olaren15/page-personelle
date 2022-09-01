<template>
  <div>
    <h1>Contact</h1>

    <h2>Liens sociaux</h2>

    <div class="flex flex-col md:flex-row not-prose">
      <SocialLink to="https://www.linkedin.com/in/catherine-gilbert-a1525a1b5/">
        <template #social-media-name>LinkedIn</template>
        <template #username>Catherine</template>
        <template #icon>
          <LinkedInIcon />
        </template>
      </SocialLink>

      <SocialLink to="https://github.com/Olaren15">
        <template #social-media-name>Github</template>
        <template #username>Olaren15</template>
        <template #icon>
          <GithubIcon />
        </template>
      </SocialLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import SocialLink from "~/components/social-link.vue";
import GithubIcon from "~/components/icons/github-icon.vue";
import LinkedInIcon from "~/components/icons/linked-icon.vue";
import { definePageMeta } from "#imports";

definePageMeta({
  title: "Contact"
});
</script>
