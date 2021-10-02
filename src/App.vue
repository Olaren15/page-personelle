<template>
  <AboutMe/>
</template>

<script>
import AboutMe from "@/views/AboutMe.vue";
export default {
  name: "Home",
  components: {AboutMe},
}
</script>


<style lang="scss">
//noinspection CssUnknownTarget
@import "@/assets/styles/scss/_variables.scss";
@import "~normalize.css";
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400");

html {
  font-family: "Roboto Light", sans-serif;
  background-color: $background-color;
  color: $foreground-color;
}

body {
  padding-top: 1em;
  padding-bottom: 1em;
  width: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  max-width: 1000px;
  width: 70%;
  margin: auto;

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  #nav {
    #navigation {
      display: inline-block;
    }

    a {
      padding: 1em;

      font-weight: bold;
      color: $secondary-color;

      &.router-link-exact-active {
        background-color: #2d242c;
        color: $foreground-color;
      }
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2em;
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    border-bottom: 2px solid #f1e4dc;
    font-family: "Montserrat", sans-serif;
  }

  a:link {
    color: $primary-color;
  }

  a:visited {
    color: $secondary-color;
  }

  a:hover {
    color: $primary-color;
  }

  a:active {
    color: $primary-color;
  }
}
</style>
