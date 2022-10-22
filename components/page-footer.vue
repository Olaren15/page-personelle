<template>
  <footer
    class="footer footer-center p-10 bg-neutral text-neutral-content mt-auto"
  >
    <div>
      <div class="grid grid-flow-col gap-8">
        <NuxtLink target="_blank" to="https://github.com/Olaren15">
          <GithubIcon class="w-8" />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          to="https://www.linkedin.com/in/catherine-gilbert-a1525a1b5/"
        >
          <LinkedInIcon class="w-8" />
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Fait avec ❤️ par une amie de Blåhaj</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import GithubIcon from "~/components/github-icon.vue";
import LinkedInIcon from "~/components/linkedin-icon.vue";
</script>
