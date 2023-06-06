<template>
  <div class="container" @click="toggleTheme" :class="{ dark: isDark }">
    <div class="slider" :class="{ dark: isDark }">
      <transition name="fade" mode="out-in">
        <img v-if="isDark" alt="dark-icon" src="@/assets/dark.png" width="96" />
        <img v-else alt="light-icon" src="@/assets/light.png" width="96" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { useThemeStore } from '@/stores/theme'
import { useFavicon } from '@vueuse/core'

export default {
  computed: {
    isDark() {
      return useThemeStore().isDarkTheme
    }
  },
  mounted() {
    useFavicon('fav_light.png')
  },

  methods: {
    toggleTheme() {
      useThemeStore().setTheme(!useThemeStore().isDarkTheme)
      useFavicon(this.isDark ? 'fav_dark.png' : 'fav_light.png')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/_colors';

.container {
  width: 7rem;
  height: 3rem;
  background-color: $DARK_BG_COLOR;
  border-radius: 5rem;
  padding: 0.25rem;
  box-sizing: border-box;
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;

  &.dark {
    background-color: $LIGHT_BG_COLOR;
  }

  .slider {
    width: 2.5rem;
    height: 2.5rem;
    background-color: $LIGHT_BG_COLOR;
    border-radius: 50%;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }

    &.dark {
      transform: translateX(4rem);
      background-color: $DARK_BG_COLOR;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
