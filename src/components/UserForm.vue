<template>
  <form @submit.prevent="handleSubmit" class="user-form">
    <h3 class="form-title">Update Profile</h3>
    
    <div class="form-group">
      <label for="name" class="form-label">Full Name</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        class="form-input"
        placeholder="Enter your name"
        required
      />
    </div>

    <div class="form-group">
      <label for="age" class="form-label">Age</label>
      <input
        id="age"
        v-model="formData.age"
        type="number"
        class="form-input"
        placeholder="Enter your age"
        min="1"
        max="120"
        required
      />
    </div>

    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        class="form-input"
        placeholder="Enter your email"
        required
      />
    </div>

    <button type="submit" class="submit-btn">
      Update Profile
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'

// Initialize user store
const userStore = useUserStore()

// Form data reactive object
const formData = reactive({
  name: '',
  age: 0,
  email: '',
})

// Load user data on mount
onMounted(() => {
  formData.name = userStore.name
  formData.age = userStore.age
  formData.email = userStore.email
})

// Handle form submission
function handleSubmit() {
  userStore.updateName(formData.name)
  userStore.updateAge(formData.age)
  userStore.updateEmail(formData.email)
  alert('Profile updated successfully!')
}
</script>

<style scoped>
.user-form {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  background: #f7fafc;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: white;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}
</style>