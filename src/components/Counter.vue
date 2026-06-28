<template>
  <div class="counter">
    <h3 class="counter-title">Quantity Selector</h3>
    <div class="counter-display">
      <div class="counter-value">
        <span class="label">Count:</span>
        <span class="value">{{ count }}</span>
      </div>
      <div class="counter-double">
        <span class="label">Double:</span>
        <span class="value">{{ doubleCount }}</span>
      </div>
    </div>
    <div class="counter-buttons">
      <button class="counter-btn decrement" @click="handleDecrement">
        −
      </button>
      <button class="counter-btn reset" @click="handleReset">
        Reset
      </button>
      <button class="counter-btn increment" @click="handleIncrement">
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'


const counterStore = useCounterStore()


const { count, doubleCount } = storeToRefs(counterStore)

function handleIncrement() {
  counterStore.increment()
}

function handleDecrement() {
  counterStore.decrement()
}

function handleReset() {
  counterStore.reset()
}
</script>

<style scoped>
.counter {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.counter-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.counter-display {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;
}

.counter-value,
.counter-double {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 12px;
  flex: 1;
}

.label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
}

.counter-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.counter-btn {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter-btn.increment {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
}

.counter-btn.increment:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.4);
}

.counter-btn.decrement {
  background: linear-gradient(135deg, #fc8181 0%, #f56565 100%);
  color: white;
}

.counter-btn.decrement:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(252, 129, 129, 0.4);
}

.counter-btn.reset {
  background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
  color: white;
  width: 80px;
  font-size: 1rem;
}

.counter-btn.reset:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(160, 174, 192, 0.4);
}

.counter-btn:active {
  transform: scale(0.95);
}
</style>