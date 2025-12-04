// src/types/router.d.ts
import 'vue-router';

declare module 'vue-router' {
  export type RouteMeta = {
    layout?: 'default' | 'blank';
  };
}
