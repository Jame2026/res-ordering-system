<template>
  <div class="kitchen-view">
    <div class="kitchen-container">
      <h1 class="page-title">Kitchen Orders</h1>

      <!-- Statistics Cards -->
      <div class="stats-grid">
        <div class="stat-card total">
          <div class="stat-icon">📋</div>
          <div class="stat-content">
            <h3 class="stat-value">{{ totalTodos }}</h3>
            <p class="stat-label">Total Orders</p>
          </div>
        </div>

        <div class="stat-card completed">
          <div class="stat-icon">✅</div>
          <div class="stat-content">
            <h3 class="stat-value">{{ completedTodos }}</h3>
            <p class="stat-label">Completed</p>
          </div>
        </div>

        <div class="stat-card pending">
          <div class="stat-icon">⏳</div>
          <div class="stat-content">
            <h3 class="stat-value">{{ pendingTodos }}</h3>
            <p class="stat-label">Pending</p>
          </div>
        </div>
      </div>

      <!-- Add New Order -->
      <div class="add-order-section">
        <form @submit.prevent="handleAddTodo" class="add-order-form">
          <input
            v-model="newTodoTitle"
            type="text"
            placeholder="Enter new kitchen order..."
            class="order-input"
            required
          />
          <button type="submit" class="add-order-btn">
            Add Order
          </button>
        </form>
      </div>

      <!-- Orders List -->
      <div class="orders-section">
        <h2 class="section-title">Kitchen Orders</h2>
        
        <div v-if="todos.length === 0" class="no-orders">
          <div class="no-orders-icon">🍽️</div>
          <p>No orders yet. Add your first order above!</p>
        </div>

        <div v-else class="orders-list">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodoStore } from '../stores/todoStore'
import TodoItem from '../components/TodoItem.vue'

// Initialize todo store
const todoStore = useTodoStore()

// New todo input
const newTodoTitle = ref('')

// Get reactive data from store
const todos = computed(() => todoStore.todos)
const completedTodos = computed(() => todoStore.completedTodos.length)
const pendingTodos = computed(() => todoStore.pendingTodos.length)
const totalTodos = computed(() => todoStore.totalTodos)

// Handle add new todo
function handleAddTodo() {
  if (newTodoTitle.value.trim()) {
    todoStore.addTodo(newTodoTitle.value.trim())
    newTodoTitle.value = ''
  }
}
</script>

<style scoped>
.kitchen-view {
  min-height: 100vh;
  background: #f7fafc;
  padding: 2rem 1.5rem;
}

.kitchen-container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0 0 2rem 0;
  text-align: center;
}

/* Statistics Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.stat-card.total {
  border-left: 4px solid #667eea;
}

.stat-card.completed {
  border-left: 4px solid #48bb78;
}

.stat-card.pending {
  border-left: 4px solid #ed8936;
}

.stat-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0;
}

.stat-label {
  font-size: 0.9rem;
  color: #718096;
  margin: 0.25rem 0 0 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

/* Add Order Section */
.add-order-section {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.add-order-form {
  display: flex;
  gap: 1rem;
}

.order-input {
  flex: 1;
  padding: 1rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  background: #f7fafc;
}

.order-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: white;
}

.add-order-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;
}

.add-order-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.add-order-btn:active {
  transform: translateY(0);
}

/* Orders Section */
.orders-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.no-orders {
  text-align: center;
  padding: 3rem 2rem;
  color: #718096;
}

.no-orders-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-orders p {
  font-size: 1.1rem;
  margin: 0;
}

.orders-list {
  display: flex;
  flex-direction: column;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .add-order-form {
    flex-direction: column;
  }

  .add-order-btn {
    width: 100%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>