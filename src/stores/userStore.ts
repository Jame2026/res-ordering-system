import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const name = ref('John Doe')
  const age = ref(30)
  const email = ref('john.doe@example.com')

  function updateName(newName: string) {
    name.value = newName
  }

  function updateAge(newAge: number) {
    age.value = newAge
  }


  function updateEmail(newEmail: string) {
    email.value = newEmail
  }

  return { name, age, email, updateName, updateAge, updateEmail }
})