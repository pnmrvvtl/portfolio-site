<script lang="ts">
import AppThemeIcon from "@/components/AppThemeIcon.vue";
import {useThemeStore} from "@/stores/theme";

export default {
  name: 'AppHeader',
  components: {AppThemeIcon},
  computed: {
    isDark() {
      return useThemeStore().isDarkTheme;
    },
  },
}
</script>

<template>
  <header :class="{dark: isDark}">
    <nav>
      <RouterLink to="/" exact-active-class="active">
        <img alt="site logo" src="../assets/logo.png" width="100">
      </RouterLink>
      <RouterLink to="/" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/about" exact-active-class="active">About</RouterLink>
      <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
    </nav>
    <app-theme-icon/>
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
  background-color: $LIGHT_BG_COLOR;
  height: 100px;
  border-bottom: 3px solid darken($LIGHT_BG_COLOR, 10%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  transition: background-color 0.3s ease;

  &.dark {
    background-color: $DARK_BG_COLOR;

    a {
      color: $LIGHT_FONT_COLOR;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: $DARK_FONT_COLOR;
    padding: 10px;
    transition: color 0.5s ease;

    &.active {
      text-decoration: underline;
    }

    &:hover {
      text-decoration: underline;
    }
  }

}

nav {
  display: flex;
}

</style>