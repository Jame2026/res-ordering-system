<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div class="todo-checkbox" @click="handleToggle">
      <div class="checkbox" :class="{ checked: todo.completed }">
        <span v-if="todo.completed">✓</span>
      </div>
    </div>
    <div class="todo-content">
      <h4 class="todo-title">{{ todo.title }}</h4>
      <span class="todo-status" :class="{ completed: todo.completed }">
        {{ todo.completed ? 'Completed' : 'Pending' }}
      </span>
    </div>
    <button class="delete-btn" @click="handleDelete" aria-label="Delete todo">
      🗑️
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todoStore'

// Define props
const props = defineProps<{
  todo: {
    id: number
    title: string
    completed: boolean
  }
}>()


const todoStore = useTodoStore()


function handleToggle() {
  todoStore.toggleTodo(props.todo.id)
}


function handleDelete() {
  todoStore.deleteTodo(props.todo.id)
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.75rem;
  transition: all 0.3s;
  border-left: 4px solid #667eea;
}

.todo-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.todo-item.completed {
  border-left-color: #48bb78;
  opacity: 0.8;
}

.todo-checkbox {
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox {
  width: 28px;
  height: 28px;
  border: 2px solid #cbd5e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background: white;
}

.checkbox:hover {
  border-color: #667eea;
}

.checkbox.checked {
  background: #48bb78;
  border-color: #48bb78;
  color: white;
}

.checkbox.checked span {
  font-size: 1rem;
  font-weight: bold;
}

.todo-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.todo-title {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  transition: color 0.3s;
}

.todo-item.completed .todo-title {
  text-decoration: line-through;
  color: #a0aec0;
}

.todo-status {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  background: #fed7d7;
  color: #c53030;
  width: fit-content;
}

.todo-status.completed {
  background: #c6f6d5;
  color: #276749;
}

.delete-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;
  opacity: 0.6;
  flex-shrink: 0;
}

.delete-btn:hover {
  opacity: 1;
  background: #fed7d7;
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 600px) {
  .todo-item {
    padding: 1rem;
    gap: 0.75rem;
  }

  .todo-title {
    font-size: 0.9rem;
  }
}
</style>