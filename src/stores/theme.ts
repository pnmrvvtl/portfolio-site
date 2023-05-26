import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false // Default theme
  }),
  actions: {
    setTheme(theme: boolean) {
      this.isDark = theme
    }
  },
  getters: {
    isDarkTheme(): boolean {
      return this.isDark
    }
  }
})
