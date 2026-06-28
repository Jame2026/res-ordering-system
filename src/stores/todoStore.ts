import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  
  const todos = ref([
    { id: 1, title: 'Order #101 - Grilled Salmon', completed: true },
    { id: 2, title: 'Order #102 - Caesar Salad', completed: true },
    { id: 3, title: 'Order #103 - Margherita Pizza', completed: false },
  ])

  
  const completedTodos = computed(() => todos.value.filter(todo => todo.completed))

  
  const pendingTodos = computed(() => todos.value.filter(todo => !todo.completed))


  const totalTodos = computed(() => todos.value.length)

  
  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    todos.value.push(newTodo)
  }

  
  function deleteTodo(id: number) {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }


  function toggleTodo(id: number) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  return { todos, completedTodos, pendingTodos, totalTodos, addTodo, deleteTodo, toggleTodo }
})