<template>
  <div id="app">
    <movie v-for="movie of items" v-bind:key="movie.id" v-bind:movie="movie"></movie>
  </div>
</template>

<script>
import movie from "./components/movie";
import {store} from './store/index.js'

export default {
  components: {
    movie
  },
  data() {
    return {
      items: store.state.items
    };
  },
  created() {
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
