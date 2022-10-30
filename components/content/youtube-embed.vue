<!-- Ce composant est inspiré fortement de https://github.com/ibrahimcesar/react-lite-youtube-embed -->

<template>
  <div>
    <div v-if="preconnected">
      <link rel="preconnect" :href="embedUrl" />
      <link rel="preconnect" href="https://google.com" />
    </div>

    <article class="bg-black">
      <iframe
        v-if="showIframe"
        class="w-full aspect-video"
        :src="embedUrl"
        :title="props.title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <div
        v-else
        class="yt-preview"
        @pointerover="warmConnections"
        @click="addIframe"
      >
        <picture>
          <source
            media="(max-width:400px)"
            :srcset="`https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`"
          />
          <source
            media="(mix-width:400px)"
            :srcset="`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`"
          />
          <img
            alt="Apercu de la vidéo"
            :src="`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`"
          />
        </picture>
        <button class="yt-button" :aria-label="`Regarder ${props.title}`" />
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { useState } from "#imports";

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
}
const props = defineProps<YoutubeEmbedProps>();

const embedUrl = `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1`;

const preconnected = useState("preconnected", () => false);
const warmConnections = () => {
  preconnected.value = true;
};

const showIframe = useState("showIframe", () => false);
const addIframe = () => {
  showIframe.value = true;
};
</script>

<style>
.yt-preview {
  position: relative;
}

.yt-button {
  width: 70px;
  height: 46px;
  background-color: #212121;
  z-index: 1;
  opacity: 0.8;
  border-radius: 14%;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.yt-preview:hover > .yt-button {
  background-color: red;
  opacity: 1;
}

/* de la magie noire */
.yt-preview > .yt-button:before {
  content: "";
  border-color: transparent transparent transparent #fff;
  border-style: solid;
  border-width: 11px 0 11px 19px;
}

.yt-preview > .yt-button,
.yt-preview > .yt-button:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
