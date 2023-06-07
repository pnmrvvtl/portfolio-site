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
          <h5>Contact me:</h5>
          <a href="mailto: pnmrv.vtl@gmail.com">
            <img src="email.png" alt="email google icon" width="20" />pnmrv.vtl@gmail.com
          </a>
          <a href="tel:+380985003090">
            <img src="phone.png" alt="phone icon" width="20" />+380985003090
          </a>
          <a href="https://github.com/pnmrvvtl" target="_blank">
            <img src="github.png" alt="github icon" width="20" />GitHub
          </a>
          <a href="https://www.linkedin.com/in/vitalii-ponomarov-289039237/" target="_blank">
            <img src="linkedin.png" alt="linkedin icon" width="20" />LinkedIn
          </a>
          <a href="https://djinni.co/q/8df21bb864/" target="_blank">
            <img src="djinni.png" alt="djinni icon" width="20" />Djinni
          </a>
          <a
            href="https://docs.google.com/document/d/1aRBaewVLefO7Rw3zJDLa68VndX9dzoDPgEL8kkV1jqs"
            target="_blank"
          >
            <img src="cv.png" alt="cv icon" width="20" />CV
          </a>
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
  &.dark {
    * {
      color: $LIGHT_FONT_COLOR;
    }
    background-color: darken($DARK_BG_COLOR, 10%);
  }

  padding: 50px;
  font-size: 2rem;
  background-color: lighten($LIGHT_BG_COLOR, 10%);
  width: 100%;
  box-sizing: border-box;

  * {
    margin: 0;
    font-weight: normal;
    text-decoration: none;
    color: $DARK_FONT_COLOR;
    transition: all 0.3s ease;
  }

  .general-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;
    flex-wrap: wrap;

    &__photo {
      margin-top: 20px;
      align-self: flex-start;
      width: 300px;
      height: 300px;
      border: 3px solid $LIGHT_BG_COLOR;
      border-radius: 50%;
      background-image: url('@/assets/portrait.jpg');
      background-position: top;
      background-size: cover;
    }

    &__credentials {
      min-width: 280px;
      max-width: calc(100% - 380px);
      color: $DARK_FONT_COLOR;

      h2 {
        padding: 10px 0;
        font-weight: bold;
      }
      h4 {
        padding: 10px 0;
      }
      p {
        font-size: 1.5rem;
        padding: 10px 0;
      }
      .contacts {
        h5 {
          font-size: 2rem;
          padding: 10px 0;
        }
        display: flex;
        flex-direction: column;

        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-bottom: 10px;

          img {
            width: 30px;
            padding-right: 5px;
            box-sizing: border-box;
          }

          &:hover {
            text-decoration: underline;
            color: $DARK_BG_COLOR;
          }
        }
      }
    }
  }
}
</style>
