<script lang="ts">
import AppThemeIcon from '@/components/AppThemeIcon.vue'
import { useThemeStore } from '@/stores/theme'
//todo rewrite with Composition API
//todo extract components and refactor
//todo change logo color on theme changing
export default {
  name: 'AppHeader',
  components: { AppThemeIcon },
  data() {
    return {
      isMenuOpened: false
    }
  },
  computed: {
    isDark() {
      return useThemeStore().isDarkTheme
    }
  },
  methods: {
    scrollToSection(sectionId: string) {
      const HEADER_HEIGHT = 90
      const section = document.querySelector(sectionId) as HTMLDivElement
      if (section) {
        const offset = section.offsetTop - HEADER_HEIGHT
        window.scrollTo({ top: offset, behavior: 'smooth' })
        this.isMenuOpened = false
      }
    }
  }
}
</script>

<template>
  <header :class="{ dark: isDark }">
    <div class="upper-menu">
      <RouterLink to="/">
        <img alt="site logo" src="@/assets/logo.png" width="80" />
      </RouterLink>
      <label for="check" class="burger">
        <input type="checkbox" id="check" v-model="isMenuOpened" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="menu" :class="{ opened: isMenuOpened }">
      <nav>
        <a @click.prevent="scrollToSection('#contacts')">Contacts</a>
        <a @click.prevent="scrollToSection('#education')">Education</a>
        <a @click.prevent="scrollToSection('#experience')">Experience</a>
      </nav>
      <app-theme-icon class="theme-icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/_colors';

header {
  z-index: 1;
  position: sticky;
  padding: 0 50px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background-color: $LIGHT_BG_COLOR;
  border-bottom: 3px solid darken($LIGHT_BG_COLOR, 10%);
  min-height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  transition: background-color 0.3s ease;

  .upper-menu {
    display: flex;
    justify-content: space-between;
  }

  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 670px) {
    display: block;

    .upper-menu {
      padding-top: 10px;
    }
    .burger {
      display: flex;
    }

    .menu {
      flex-direction: column;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: opacity 0.5s ease, max-height 0.5s ease;

      .theme-icon {
        margin-bottom: 20px;
      }
      &.opened {
        opacity: 1;
        max-height: 500px;
      }
      nav {
        flex-direction: column;
      }
    }
  }

  &.dark {
    background-color: $DARK_BG_COLOR;

    a {
      color: $LIGHT_FONT_COLOR;
    }
  }

  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    padding-right: 30px;
  }

  a {
    text-decoration: none;
    color: $DARK_FONT_COLOR;
    padding: 10px;
    transition: color 0.5s ease;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  label {
    display: none;
    flex-direction: column;
    width: 70px;
    cursor: pointer;

    span {
      background: #fff;
      border-radius: 10px;
      height: 7px;
      margin: 7px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
      width: 50%;
    }

    span:nth-of-type(2) {
      width: 100%;
    }

    span:nth-of-type(3) {
      width: 75%;
    }

    input[type='checkbox'] {
      display: none;
    }

    input[type='checkbox']:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(8px, 0px);
    }

    input[type='checkbox']:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }

    input[type='checkbox']:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(30px, -11px) rotatez(45deg);
    }
  }
}

nav {
  display: flex;
}
</style>
