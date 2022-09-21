import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const user = ref(null)
  const isAuthenticated = computed( () => user.value ? true : false )
  return { user, isAuthenticated }
})
