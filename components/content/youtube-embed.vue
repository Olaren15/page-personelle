<template>
  <iframe
      :src="`https://www.youtube.com/embed/${props.videoId}`"
      :title="props.title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full aspect-video"
  />
</template>

<script lang="ts" setup>
interface YoutubeEmbedProps {
  videoId: string,
  title: string,
}

const props = defineProps<YoutubeEmbedProps>();
</script>