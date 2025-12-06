<!-- src/components/common/AppHeader.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2 group">
        <span class="text-2xl">⚡️</span>
        <span class="font-bold text-lg tracking-tight group-hover:text-brand transition-colors">
          VueStarter
        </span>
      </RouterLink>

      <nav class="flex gap-6 text-sm font-medium text-gray-600">
        <RouterLink to="/" active-class="text-brand font-semibold" class="hover:text-brand transition-colors">
          Home
        </RouterLink>
        <a
          href="https://github.com/pharmacist-sabot/vue-starter" target="_blank"
          class="hover:text-gray-900 transition-colors"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>
