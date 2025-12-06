<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="max-w-2xl mx-auto space-y-8">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Vue 3 Template Starter
      </h1>
      <p class="text-lg text-gray-600">
        Opinionated production-ready template with TailwindCSS v4
      </p>
    </div>

    <!-- Pinia Test Card -->
    <div class="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">
            Pinia State
          </h2>
          <p class="text-sm text-gray-500">
            State management demonstration
          </p>
        </div>
        <div class="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold">
          Store Active
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-8">
        <div class="p-4 bg-gray-50 rounded-xl text-center">
          <div class="text-sm text-gray-500 mb-1">
            Current Count
          </div>
          <div class="text-3xl font-bold text-gray-900">
            {{ counterStore.count }}
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-xl text-center">
          <div class="text-sm text-gray-500 mb-1">
            Double Value
          </div>
          <div class="text-3xl font-bold text-brand">
            {{ counterStore.doubleCount }}
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <BaseButton @click="counterStore.increment">
          Increment Counter (+)
        </BaseButton>
      </div>
    </div>
  </div>
</template>
