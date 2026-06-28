<template>
  <div class="cart-view">
    <div class="cart-container">
      <h1 class="page-title">Shopping Cart</h1>

      <!-- Empty Cart State -->
      <div v-if="cart.length === 0" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some delicious items from our menu!</p>
        <router-link to="/" class="browse-menu-btn">
          Browse Menu
        </router-link>
      </div>

      <!-- Cart with Items -->
      <div v-else class="cart-content">
        <div class="cart-items">
          <CartItem
            v-for="item in cart"
            :key="item.product.id"
            :item="item"
          />
        </div>

        <div class="cart-summary">
          <h2 class="summary-title">Order Summary</h2>
          
          <div class="summary-row">
            <span>Total Items:</span>
            <span class="summary-value">{{ totalItems }}</span>
          </div>
          
          <div class="summary-row">
            <span>Total Price:</span>
            <span class="summary-value total-price">${{ totalPrice.toFixed(2) }}</span>
          </div>

          <button class="checkout-btn" @click="handleCheckout">
            Proceed to Checkout
          </button>

          <button class="clear-cart-btn" @click="handleClearCart">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'
import CartItem from '../components/CartItem.vue'

// Initialize cart store
const cartStore = useCartStore()

// Get reactive cart data
const cart = computed(() => cartStore.cart)
const totalItems = computed(() => cartStore.totalItems)
const totalPrice = computed(() => cartStore.totalPrice)

// Handle checkout
function handleCheckout() {
  alert(`Order placed successfully!\n\nTotal: $${totalPrice.value.toFixed(2)}\nItems: ${totalItems.value}`)
  cartStore.clearCart()
}

// Handle clear cart
function handleClearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cartStore.clearCart()
  }
}
</script>

<style scoped>
.cart-view {
  min-height: 100vh;
  background: #f7fafc;
  padding: 2rem 1.5rem;
}

.cart-container {
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

/* Empty Cart State */
.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-cart h2 {
  font-size: 1.75rem;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
}

.empty-cart p {
  color: #718096;
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
}

.browse-menu-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.browse-menu-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

/* Cart Content */
.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: start;
}

.cart-items {
  display: flex;
  flex-direction: column;
}

/* Cart Summary */
.cart-summary {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 100px;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.summary-row span:first-child {
  color: #718096;
  font-size: 1rem;
}

.summary-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
}

.summary-value.total-price {
  font-size: 1.5rem;
  color: #667eea;
}

.checkout-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 1.5rem;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(72, 187, 120, 0.4);
}

.clear-cart-btn {
  width: 100%;
  padding: 0.75rem;
  background: white;
  color: #ff6b6b;
  border: 2px solid #ff6b6b;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.75rem;
}

.clear-cart-btn:hover {
  background: #ff6b6b;
  color: white;
}

/* Responsive Design */
@media (max-width: 968px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>