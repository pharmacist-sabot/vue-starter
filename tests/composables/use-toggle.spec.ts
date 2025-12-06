// tests/composables/useToggle.spec.ts
import { describe, expect, it } from 'vitest';

import { useToggle } from '@/composables/use-toggle';

describe('useToggle Composable', () => {
  it('initializes with default value (false)', () => {
    const { value } = useToggle();
    expect(value.value).toBe(false);
  });

  it('initializes with provided value', () => {
    const { value } = useToggle(true);
    expect(value.value).toBe(true);
  });

  it('toggles value', () => {
    const { value, toggle } = useToggle(false);
    toggle();
    expect(value.value).toBe(true);
    toggle();
    expect(value.value).toBe(false);
  });

  it('sets value explicitly via on/off', () => {
    const { value, on, off } = useToggle(false);
    on();
    expect(value.value).toBe(true);
    off();
    expect(value.value).toBe(false);
  });

  it('sets value explicitly via toggle argument', () => {
    const { value, toggle } = useToggle(false);
    toggle(true);
    expect(value.value).toBe(true);
  });
});
