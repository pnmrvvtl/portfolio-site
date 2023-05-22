<script lang="ts">
import {RouterLink, RouterView} from 'vue-router'

export default {
  name: 'AppHeader',
}
</script>

<template>
  <header>
      <img src="../assets/logo.png" width="100">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/_colors';

header {
  position: sticky;
  padding: 0 50px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background-color: $PRIMARY_BG_COLOR;
  height: 100px;
  border-bottom: 3px solid darken($PRIMARY_BG_COLOR, 10%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  a {
    text-decoration: none;
    padding: 10px;
  }

}

nav {
  display: flex;
}

</style>