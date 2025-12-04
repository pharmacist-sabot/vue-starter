<!-- src/views/NotFoundView.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="not-found">
    <div class="content">
      <h1 class="error-code">
        404
      </h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>

      <RouterLink to="/" class="back-link">
        Go Back Home
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  color: #ff5252;
  margin: 0;
  line-height: 1;
}

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #646cff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.2s;
}

.back-link:hover {
  background-color: #535bf2;
  transform: translateY(-2px);
}
</style>
