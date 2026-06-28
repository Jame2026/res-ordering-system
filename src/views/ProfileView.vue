<template>
  <div class="profile-view">
    <div class="profile-container">
      <h1 class="page-title">My Profile</h1>

      <div class="profile-content">
        <!-- Profile Card -->
        <div class="profile-card">
          <div class="profile-avatar">
            <span class="avatar-icon">👤</span>
          </div>
          <h2 class="profile-name">{{ userStore.name }}</h2>
          <p class="profile-email">{{ userStore.email }}</p>
          <div class="profile-info">
            <div class="info-item">
              <span class="info-label">Age</span>
              <span class="info-value">{{ userStore.age }} years</span>
            </div>
            <div class="info-item">
              <span class="info-label">Member Since</span>
              <span class="info-value">2024</span>
            </div>
          </div>
        </div>

        <!-- Update Form -->
        <div class="form-section">
          <h2 class="section-title">Update Information</h2>
          <UserForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
import UserForm from '../components/UserForm.vue'

// Initialize user store
const userStore = useUserStore()
</script>

<style scoped>
.profile-view {
  min-height: 100vh;
  background: #f7fafc;
  padding: 2rem 1.5rem;
}

.profile-container {
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

.profile-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

/* Profile Card */
.profile-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: sticky;
  top: 100px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.avatar-icon {
  font-size: 4rem;
}

.profile-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
}

.profile-email {
  color: #718096;
  font-size: 1rem;
  margin: 0 0 2rem 0;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e2e8f0;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.info-label {
  color: #718096;
  font-size: 0.95rem;
  font-weight: 500;
}

.info-value {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
}

/* Form Section */
.form-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

/* Responsive Design */
@media (max-width: 968px) {
  .profile-content {
    grid-template-columns: 1fr;
  }

  .profile-card {
    position: static;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 2rem;
  }

  .profile-card {
    padding: 1.5rem;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
  }

  .avatar-icon {
    font-size: 3rem;
  }

  .profile-name {
    font-size: 1.5rem;
  }
}
</style>