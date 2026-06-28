<template>
  <div class="cart-item">
    <div class="cart-item-image">
      <img :src="item.product.image" :alt="item.product.name" />
    </div>
    <div class="cart-item-details">
      <h3 class="cart-item-name">{{ item.product.name }}</h3>
      <p class="cart-item-price">${{ item.product.price.toFixed(2) }} each</p>
      <div class="cart-item-quantity">
        <button class="quantity-btn" @click="decrementQuantity" :disabled="item.quantity <= 1">
          −
        </button>
        <span class="quantity-value">{{ item.quantity }}</span>
        <button class="quantity-btn" @click="incrementQuantity">
          +
        </button>
      </div>
    </div>
    <div class="cart-item-actions">
      <div class="cart-item-total">
        ${{ (item.product.price * item.quantity).toFixed(2) }}
      </div>
      <button class="remove-btn" @click="handleRemove">
        ✕
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { useCartStore } from '../stores/cartStore'
import type { CartItem } from '../stores/cartStore'


const props = defineProps<{
  item: CartItem
}>()

const counterStore = useCounterStore()
const cartStore = useCartStore()

function incrementQuantity() {
  counterStore.increment()
  
  cartStore.addToCart(props.item.product)
}


function decrementQuantity() {
  if (props.item.quantity > 1) {
    counterStore.decrement()
    
    cartStore.removeFromCart(props.item.product.id)
    
    cartStore.addToCart(props.item.product)
  }
}


function handleRemove() {
  cartStore.removeFromCart(props.item.product.id)
}
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: transform 0.2s;
}

.cart-item:hover {
  transform: translateX(4px);
}

.cart-item-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.cart-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cart-item-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
}

.cart-item-price {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-btn:hover:not(:disabled) {
  background: #667eea;
  color: white;
}

.quantity-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  min-width: 30px;
  text-align: center;
}

.cart-item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}

.cart-item-total {
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
}

.remove-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  background: #ee5a6f;
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    gap: 1rem;
  }

  .cart-item-image {
    width: 100%;
    height: 150px;
  }

  .cart-item-actions {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>