<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
import introduction from '@/assets/json/introduction.json'
import education from '@/assets/json/education.json'
import experience from '@/assets/json/experience.json'

const isDark = computed(() => useThemeStore().isDarkTheme)
</script>

<template>
  <main :class="{ dark: isDark }">
    <section class="general-info">
      <div class="general-info__photo"></div>
      <div class="general-info__credentials">
        <h2>Vitalii Ponomarov</h2>
        <h4>Frontend Developer</h4>
        <p>{{ introduction.introduction }}</p>
        <div class="contacts">
          <h5>Contact me</h5>
          <a href="mailto: pnmrv.vtl@gmail.com">pnmrv.vtl@gmail.com</a>
          <a href="tel:+380985003090">+380985003090</a>
          <a href="https://github.com/pnmrvvtl" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/vitalii-ponomarov-289039237/" target="_blank"
            >LinkedIn</a
          >
          <a href="https://djinni.co/q/8df21bb864/" target="_blank">Djinni</a>
        </div>
      </div>
    </section>
    <section>
      <h2>Education</h2>
    </section>
    <section>
      <h2>Working experience</h2>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/_colors';

main {
  padding: 20px;
  font-size: 2rem;
  background-color: lighten($LIGHT_BG_COLOR, 10%);

  * {
    margin: 0;
    font-weight: normal;
    text-decoration: none;
    color: $DARK_FONT_COLOR;
  }

  .general-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 100px;
    flex-wrap: wrap;

    &__photo {
      width: 300px;
      height: 300px;
      border: 3px solid $LIGHT_BG_COLOR;
      border-radius: 50%;
      background-image: url('@/assets/portrait.jpg');
      background-position: top;
      background-size: cover;
    }

    &__credentials {
      max-width: 500px;
    }

    .contacts {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
