// src/composables/useToggle.ts
import type { Ref } from 'vue';

import { ref } from 'vue';

/**
 * A simple composable to manage boolean state.
 * Useful for modals, menus, and switch toggles.
 */
export function useToggle(initialValue: boolean = false) {
  const value: Ref<boolean> = ref(initialValue);

  /**
   * Explicitly sets the value to true.
   */
  const on = (): void => {
    value.value = true;
  };

  /**
   * Explicitly sets the value to false.
   */
  const off = (): void => {
    value.value = false;
  };

  /**
   * Toggles the current value.
   */
  const toggle = (newValue?: boolean): void => {
    if (typeof newValue === 'boolean') {
      value.value = newValue;
    }
    else {
      value.value = !value.value;
    }
  };

  return {
    value,
    on,
    off,
    toggle,
  };
}
