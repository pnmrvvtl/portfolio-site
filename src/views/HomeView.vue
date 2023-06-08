<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
import introduction from '@/assets/json/introduction.json'
import educationJson from '@/assets/json/education.json'
import experienceJson from '@/assets/json/experience.json'
import type EducationItem from '@/types/educationItem'
import type ExperienceItem from '@/types/experienceItem'

const isDark = computed(() => useThemeStore().isDarkTheme)
const educationData = (educationJson as EducationItem[]).reverse()
const experienceData = experienceJson as ExperienceItem[]
const openGoogleSearch = (stackItem: string) => {
  const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(stackItem)}`
  window.open(searchQuery, '_blank')
}
</script>

<template>
  <main :class="{ dark: isDark }">
    <section class="general-info" id="contacts">
      <div class="general-info__photo"></div>
      <div class="general-info__credentials">
        <h2>Vitalii Ponomarov</h2>
        <h4>Frontend Developer (React, Vue)</h4>
        <p>{{ introduction.introduction }}</p>
        <div class="contacts">
          <h5>Contact me:</h5>
          <a href="mailto: pnmrv.vtl@gmail.com">
            <img src="@/assets/email.png" alt="email google icon" width="20" />pnmrv.vtl@gmail.com
          </a>
          <a href="tel:+380985003090">
            <img src="@/assets/phone.png" alt="phone icon" width="20" />+380985003090
          </a>
          <a href="https://github.com/pnmrvvtl" target="_blank">
            <img src="@/assets/github.png" alt="github icon" width="20" />GitHub
          </a>
          <a href="https://www.linkedin.com/in/vitalii-ponomarov-289039237/" target="_blank">
            <img src="@/assets/linkedin.png" alt="linkedin icon" width="20" />LinkedIn
          </a>
          <a href="https://djinni.co/q/8df21bb864/" target="_blank">
            <img src="@/assets/djinni.png" alt="djinni icon" width="20" />Djinni
          </a>
          <a
            href="https://docs.google.com/document/d/1aRBaewVLefO7Rw3zJDLa68VndX9dzoDPgEL8kkV1jqs"
            target="_blank"
          >
            <img src="@/assets/cv.png" alt="cv icon" width="20" />CV
          </a>
        </div>
      </div>
    </section>
    <h2 id="education">Education</h2>
    <section class="education">
      <div class="education__progress"></div>
      <div class="education__data">
        <div
          class="education__element"
          v-for="education in educationData"
          :key="education.specialtyName"
        >
          <div class="education__marker"></div>
          <h2>{{ education.schoolName }}</h2>
          <p>{{ education.specialtyName }}</p>
          <p>{{ education.startDate }} - {{ education.finishDate }}</p>
          <ul>
            <li
              v-for="className in education.classes"
              :key="className"
              @click="openGoogleSearch(className)"
            >
              {{ className }}
            </li>
          </ul>
          <div v-if="education.document">
            <a :href="education.document" target="_blank">View Document</a>
          </div>
          <div>
            <h3>{{ education.graduationProject.title }}</h3>
            <p>{{ education.graduationProject.description }}</p>
            <a :href="education.graduationProject.link" target="_blank">View Project</a>
            <ul>
              <li
                v-for="stackItem in education.graduationProject.usedStack"
                :key="stackItem"
                @click="openGoogleSearch(stackItem)"
              >
                {{ stackItem }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <h2 id="experience">Working experience</h2>
    <section class="experience">
      <div class="experience__progress"></div>
      <div class="experience__data">
        <div
          class="education__element"
          v-for="experience in experienceData.reverse()"
          :key="experience.title"
        >
          <div class="education__marker"></div>
          <h2>{{ experience.title }}</h2>
          <p>{{ experience.description }}</p>
          <p>{{ experience.position }}</p>
          <p>{{ experience.location }}</p>
          <p>{{ experience.startDate }} - {{ experience.finishDate }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/_colors';

html {
  scroll-behavior: smooth;
}

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
      width: 250px;
      height: 250px;
      border: 3px solid $LIGHT_BG_COLOR;
      border-radius: 50%;
      background-image: url('@/assets/portrait.jpg');
      background-position: top;
      background-size: cover;
    }

    &__credentials {
      min-width: 300px;
      max-width: calc(100% - 400px);
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

  > h2 {
    padding: 30px 0;
    font-size: 3.5rem;
  }

  .education,
  .experience {
    display: flex;

    &__progress {
      margin: 0 10px;
      width: 5px;
      background: linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%);
    }

    &__data {
      padding: 20px;
      .education__element {
        position: relative;
        ul {
          padding: 0;
          display: flex;
          list-style: none;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          li {
            margin: 5px;
            background-color: $DARK_BG_COLOR;
            color: $LIGHT_FONT_COLOR;
            padding: 10px;
            border-radius: 15px;
            box-shadow: 0px 0px 10px 0px $DARK_BG_COLOR;
            cursor: pointer;

            &:hover {
              color: darken($LIGHT_FONT_COLOR, 20%);
            }
          }
        }

        .education__marker {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: $DARK_BG_COLOR;
          border-radius: 50%;
          left: -41px;
          top: 0.5rem;
          z-index: 0;
        }
      }
    }
  }
}
</style>
