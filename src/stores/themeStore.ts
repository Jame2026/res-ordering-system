import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {

  const darkMode = ref(false)

  
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    darkMode.value = true
  }

  
  watch(darkMode, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  })

  function toggleTheme() {
    darkMode.value = !darkMode.value
  }

  return { darkMode, toggleTheme }
})