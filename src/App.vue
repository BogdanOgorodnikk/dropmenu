<template>
  <div id="app">
    <DropMenu />
  </div>
</template>

<script>
import DropMenu from './components/DropMenu.vue'

export default {
  name: 'App',
  components: {
    DropMenu
  }
}
</script>

<style lang="scss">
  @charset "UTF-8";
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
  }

</style>