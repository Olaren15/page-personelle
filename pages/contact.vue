<template>
  <div>
    <h1>Contact</h1>

    <h2>Liens sociaux</h2>

    <div class="flex flex-col md:flex-row not-prose">
      <LienSocial lien-navigation="https://www.linkedin.com/in/catherine-gilbert-a1525a1b5/">
        <template #social-media-name>LinkedIn</template>
        <template #username>Catherine</template>
        <template #icon>
          <LinkedInIcon />
        </template>
      </LienSocial>

      <LienSocial lien-navigation="https://github.com/Olaren15">
        <template #social-media-name>Github</template>
        <template #username>Olaren15</template>
        <template #icon>
          <GithubIcon />
        </template>
      </LienSocial>
    </div>

  </div>
</template>

<script setup lang="ts">
import LienSocial from "~/components/lien-social.vue";
import GithubIcon from "~/components/icons/github-icon.vue";
import LinkedInIcon from "~/components/icons/linked-icon.vue";
</script>
