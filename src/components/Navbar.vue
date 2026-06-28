<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">
        🍽️ Restaurant Ordering System
      </router-link>
      
      <button class="nav-toggle" @click="toggleMenu" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/cart" class="nav-link" @click="closeMenu">
          Cart
          <span v-if="cartTotalItems > 0" class="cart-badge">{{ cartTotalItems }}</span>
        </router-link>
        <router-link to="/kitchen" class="nav-link" @click="closeMenu">Kitchen</router-link>
        <router-link to="/profile" class="nav-link" @click="closeMenu">Profile</router-link>
        <button class="theme-toggle" @click="toggleTheme">
          {{ isDarkMode ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cartStore'
import { useThemeStore } from '../stores/themeStore'


const cartStore = useCartStore()
const themeStore = useThemeStore()


const isMenuOpen = ref(false)


const cartTotalItems = computed(() => cartStore.totalItems)
const isDarkMode = computed(() => themeStore.darkMode)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function toggleTheme() {
  themeStore.toggleTheme()
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-brand:hover {
  opacity: 0.9;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.3s;
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
}

.cart-badge {
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  margin-left: 0.3rem;
  font-weight: bold;
}

.theme-toggle {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    display: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-link {
    width: 100%;
    text-align: center;
  }

  .theme-toggle {
    width: 100%;
    margin-top: 0.5rem;
  }
}
</style>