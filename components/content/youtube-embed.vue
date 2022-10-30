<template>
  <LiteYouTubeEmbed
    :id="props.videoId"
    :title="props.title"
    announce="Regarder"
    poster="maxresdefault"
  />
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";

defineComponent({
  components: { LiteYouTubeEmbed },
});

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
}

const props = defineProps<YoutubeEmbedProps>();
</script>

<style>
@import "vue-lite-youtube-embed/dist/style.css";
</style>
