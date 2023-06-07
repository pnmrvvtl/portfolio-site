<template>
  <footer :class="{ dark: isDark }">
    <p>2023 - {{ new Date(Date.now()).getFullYear() }} by Vitalii Ponomarov</p>
    <a href="https://github.com/pnmrvvtl" target="_blank"
      ><img src="@/assets/github.png" alt="github icon"
    /></a>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const isDark = computed(() => useThemeStore().isDarkTheme)
</script>

<style scoped lang="scss">
@import '@/assets/colors';

footer {
  width: 100%;
  height: 50px;
  background-color: $LIGHT_BG_COLOR;
  border-top: 3px solid darken($LIGHT_BG_COLOR, 10%);
  display: flex;
  align-items: center;
  padding: 0 50px;
  font-size: 2rem;
  box-sizing: border-box;
  justify-content: space-between;

  a {
    img {
      width: 30px;
    }

    transition: 0.3s transform ease;

    &:hover {
      transform: rotate(360deg);
    }
  }

  &.dark {
    background-color: $DARK_BG_COLOR;
    color: $LIGHT_FONT_COLOR;
  }
}
</style>
