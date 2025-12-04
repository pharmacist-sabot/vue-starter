<script setup lang="ts">
type Props = {
  variant?: 'primary' | 'secondary' | 'danger';
};

withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const variantClasses = {
  primary: 'bg-brand hover:bg-brand-hover text-white shadow-sm hover:shadow',
  secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};
</script>

<template>
  <button
    class="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-50 disabled:cursor-not-allowed"
    :class="variantClasses[variant]"
  >
    <slot />
  </button>
</template>
