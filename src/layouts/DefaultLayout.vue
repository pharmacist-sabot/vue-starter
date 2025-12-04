<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-50 border-t border-gray-100 py-6 mt-auto">
      <div class="container mx-auto px-4 text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Vue Template Starter. All rights reserved.
      </div>
    </footer>
  </div>
</template>
