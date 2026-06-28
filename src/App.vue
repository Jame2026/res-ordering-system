<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from './stores/themeStore'
import Navbar from './components/Navbar.vue'

// Initialize theme store
const themeStore = useThemeStore()

// Computed property for dark mode
const isDarkMode = computed(() => themeStore.darkMode)
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #2d3748;
  background: #f7fafc;
}

/* Light Mode (Default) */
.app {
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.app.dark-mode {
  background: #1a202c;
  color: #e2e8f0;
}

.app.dark-mode body {
  background: #1a202c;
  color: #e2e8f0;
}

/* Dark Mode Overrides */
.app.dark-mode .product-card,
.app.dark-mode .cart-item,
.app.dark-mode .counter,
.app.dark-mode .user-form,
.app.dark-mode .todo-item,
.app.dark-mode .stat-card,
.app.dark-mode .add-order-section,
.app.dark-mode .orders-section,
.app.dark-mode .profile-card,
.app.dark-mode .form-section,
.app.dark-mode .cart-summary,
.app.dark-mode .empty-cart {
  background: #2d3748;
  color: #e2e8f0;
}

.app.dark-mode .product-name,
.app.dark-mode .cart-item-name,
.app.dark-mode .counter-title,
.app.dark-mode .form-title,
.app.dark-mode .todo-title,
.app.dark-mode .profile-name,
.app.dark-mode .section-title,
.app.dark-mode .summary-title,
.app.dark-mode .page-title,
.app.dark-mode .stat-value,
.app.dark-mode .empty-cart h2 {
  color: #e2e8f0;
}

.app.dark-mode .product-description,
.app.dark-mode .cart-item-price,
.app.dark-mode .label,
.app.dark-mode .form-label,
.app.dark-mode .todo-status,
.app.dark-mode .profile-email,
.app.dark-mode .stat-label,
.app.dark-mode .empty-cart p,
.app.dark-mode .summary-row span:first-child,
.app.dark-mode .info-label {
  color: #a0aec0;
}

.app.dark-mode .product-price,
.app.dark-mode .cart-item-total,
.app.dark-mode .value,
.app.dark-mode .summary-value.total-price {
  color: #90cdf4;
}

.app.dark-mode .quantity-value {
  color: #e2e8f0;
}

.app.dark-mode .form-input,
.app.dark-mode .order-input {
  background: #1a202c;
  border-color: #4a5568;
  color: #e2e8f0;
}

.app.dark-mode .form-input:focus,
.app.dark-mode .order-input:focus {
  background: #2d3748;
}

.app.dark-mode .counter-value,
.app.dark-mode .counter-double {
  background: #1a202c;
}

.app.dark-mode .quantity-btn {
  background: #2d3748;
  border-color: #667eea;
  color: #667eea;
}

.app.dark-mode .quantity-btn:hover:not(:disabled) {
  background: #667eea;
  color: white;
}

.app.dark-mode .todo-status {
  background: #742a2a;
  color: #feb2b2;
}

.app.dark-mode .todo-status.completed {
  background: #22543d;
  color: #9ae6b4;
}

.app.dark-mode .info-item {
  border-bottom: 1px solid #4a5568;
}

.app.dark-mode .profile-info {
  border-top: 2px solid #4a5568;
}

.app.dark-mode .summary-row {
  border-bottom: 1px solid #4a5568;
}

.app.dark-mode .section-title {
  border-bottom: 2px solid #4a5568;
}

/* Main Content */
.main-content {
  min-height: calc(100vh - 80px);
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f7fafc;
}

::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #764ba2;
}

.app.dark-mode ::-webkit-scrollbar-track {
  background: #1a202c;
}

.app.dark-mode ::-webkit-scrollbar-thumb {
  background: #667eea;
}
</style>