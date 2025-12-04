<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="home-container">
    <h1>🏠 Home Page</h1>
    <p>Welcome to your Template Vue Starter</p>

    <!-- test Pinia State -->
    <div class="card">
      <h2>Pinia Test</h2>
      <p>Current Count: <strong>{{ counterStore.count }}</strong></p>
      <p>Double Count: <strong>{{ counterStore.doubleCount }}</strong></p>

      <div class="actions">
        <button type="button" @click="counterStore.increment">
          Increment (+)
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.card {
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 12px;
  background-color: var(--color-background-soft, #f9f9f9);
}

.actions {
  margin-top: 1rem;
}

button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #3aa876;
}
</style>
