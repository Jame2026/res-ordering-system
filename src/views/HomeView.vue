<template>
  <div class="home-view">
    <!-- Restaurant Banner -->
    <div class="banner">
      <div class="banner-content">
        <h1 class="banner-title">Welcome to Our Restaurant</h1>
        <p class="banner-subtitle">Delicious meals prepared with love and the finest ingredients</p>
        <div class="banner-features">
          <div class="feature">
            <span class="feature-icon">🍳</span>
            <span>Fresh Ingredients</span>
          </div>
          <div class="feature">
            <span class="feature-icon">👨‍🍳</span>
            <span>Expert Chefs</span>
          </div>
          <div class="feature">
            <span class="feature-icon">⚡</span>
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Section -->
    <div class="menu-section">
      <h2 class="section-title">Our Menu</h2>
      <p class="section-subtitle">Choose from our delicious selection</p>
      
      <div class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

    <!-- Counter Demo Section -->
    <div class="counter-section">
      <h2 class="section-title">Quantity Selector Demo</h2>
      <p class="section-subtitle">Using the Counter Store</p>
      <Counter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../components/ProductCard.vue'
import Counter from '../components/Counter.vue'

// Initialize cart store
const cartStore = useCartStore()

// Get products from store
const products = computed(() => cartStore.products)
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

/* Banner Styles */
.banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
  opacity: 0.3;
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.banner-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.banner-subtitle {
  font-size: 1.25rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
}

.banner-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.feature-icon {
  font-size: 2.5rem;
}

/* Menu Section */
.menu-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  text-align: center;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #718096;
  text-align: center;
  margin: 0 0 3rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* Counter Section */
.counter-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  background: #f7fafc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1rem;
  }

  .banner-features {
    gap: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>