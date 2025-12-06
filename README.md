# Vue 3 Enterprise Starter Template

![CI Quality](https://github.com/pharmacist-sabot/vue-starter/actions/workflows/ci.yml/badge.svg)
[![Vue](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0+-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1+-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-4.0+-6E9F18?logo=vitest)](https://vitest.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10.17+-F69220?logo=pnpm)](https://pnpm.io/)

An opinionated, production-ready starter template for Vue 3 applications. Designed for scalability, code quality, and developer experience.

## ✨ Features

### Core Stack

- **Vue 3.5+** – Composition API with `<script setup>` syntax
- **TypeScript 5.9+** – Strict mode enabled with enhanced type safety
- **Vite 7** – Lightning-fast dev server and optimized builds
- **Tailwind CSS 4.1** – Utility-first CSS via Vite plugin

### State & Routing

- **Pinia 3** – Type-safe state management
- **Vue Router 4** – File-based routing with history mode

### Code Quality

- **ESLint** – [Anthony Fu's config](https://github.com/antfu/eslint-config) (includes formatting, no Prettier needed)
- **Husky** – Git hooks for pre-commit and commit-msg
- **lint-staged** – Run linters on staged files only
- **Commitlint** – Enforce [Conventional Commits](https://www.conventionalcommits.org/)

### Testing

- **Vitest** – Fast unit testing with Vue Test Utils
- **Coverage** – V8 coverage reports

### Security & CI/CD

- **audit-ci** – Block builds on high-severity vulnerabilities
- **GitHub Actions** – Automated quality gates on every PR

### Utilities

- **VueUse** – Collection of essential Vue Composition Utilities
- **Path Aliases** – `@/` alias pre-configured

## 📋 Prerequisites

| Requirement     | Version     |
| --------------- | ----------- |
| Node.js         | 22+ (LTS)   |
| Package Manager | pnpm 10.17+ |

> **Note:** pnpm version is enforced via `packageManager` field in `package.json`.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pharmacist-sabot/vue-starter.git my-project
cd my-project
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173/`

## 📜 Available Scripts

| Script               | Description                             |
| -------------------- | --------------------------------------- |
| `pnpm dev`           | Start dev server with HMR               |
| `pnpm build`         | Type-check and build for production     |
| `pnpm preview`       | Preview production build locally        |
| `pnpm lint`          | Check linting and formatting            |
| `pnpm lint:fix`      | Auto-fix linting and formatting issues  |
| `pnpm type-check`    | Run TypeScript compiler (no emit)       |
| `pnpm test:unit`     | Run unit tests in watch mode            |
| `pnpm test:coverage` | Run tests with coverage report          |
| `pnpm audit`         | Check for high-severity vulnerabilities |

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI workflow
├── .husky/
│   ├── commit-msg           # Commitlint hook
│   └── pre-commit           # Lint-staged hook
├── src/
│   ├── assets/              # Static assets (images, fonts, CSS)
│   ├── components/
│   │   └── common/          # Shared UI components
│   │       ├── AppHeader.vue
│   │       └── BaseButton.vue
│   ├── composables/         # Vue composables (hooks)
│   │   └── use-toggle.ts
│   ├── layouts/             # Page layouts
│   │   ├── BlankLayout.vue
│   │   └── DefaultLayout.vue
│   ├── router/              # Vue Router config
│   │   └── index.ts
│   ├── stores/              # Pinia stores
│   │   └── counter.ts
│   ├── types/               # TypeScript type definitions
│   │   └── router.d.ts
│   ├── utils/               # Helper functions
│   │   └── formatters.ts
│   ├── views/               # Page components
│   │   ├── HomeView.vue
│   │   └── NotFoundView.vue
│   ├── App.vue              # Root component
│   └── main.ts              # App entry point
├── tests/                   # Unit tests (mirrors src/ structure)
│   ├── components/
│   ├── composables/
│   ├── stores/
│   ├── utils/
│   └── views/
├── eslint.config.mjs        # ESLint configuration
├── vite.config.ts           # Vite configuration
├── vitest.config.ts         # Vitest configuration
├── tsconfig.json            # TypeScript config (references)
├── tsconfig.app.json        # App TypeScript config
└── tsconfig.node.json       # Node TypeScript config
```

## 🔧 Configuration

### TypeScript

Strict mode is enabled with additional safety options:

```json
{
  "strict": true,
  "noImplicitOverride": true,
  "noUncheckedIndexedAccess": true,
  "verbatimModuleSyntax": true
}
```

### ESLint

Using [@antfu/eslint-config](https://github.com/antfu/eslint-config) with:

- 2-space indentation
- Single quotes
- Semicolons required
- Auto-sorted imports via `perfectionist`
- Kebab-case or PascalCase filenames enforced

### Commit Types

Allowed commit types (enforced by Commitlint):

| Type       | Description                   |
| ---------- | ----------------------------- |
| `feat`     | New feature                   |
| `fix`      | Bug fix                       |
| `docs`     | Documentation changes         |
| `style`    | Code style (formatting, etc.) |
| `refactor` | Code refactoring              |
| `perf`     | Performance improvements      |
| `test`     | Adding or updating tests      |
| `build`    | Build system or dependencies  |
| `ci`       | CI configuration              |
| `chore`    | Other changes                 |
| `revert`   | Revert a previous commit      |

**Format:** `<type>: <subject>`

**Examples:**

```
feat: add user authentication
fix: resolve login validation error
docs: update API documentation
```

## 🔒 Quality Gates

The CI pipeline runs the following checks on every push and PR:

1. **Linting** – Code style must follow ESLint rules
2. **Type Checking** – No TypeScript errors (`strict: true`)
3. **Unit Tests** – All tests must pass
4. **Build** – Production build must succeed
5. **Security Audit** – No high-severity vulnerabilities

## 🤝 Contributing

### Branching Strategy

| Branch      | Purpose                             |
| ----------- | ----------------------------------- |
| `main`      | Production-ready code               |
| `feature/*` | New features (e.g., `feature/auth`) |
| `fix/*`     | Bug fixes (e.g., `fix/login-error`) |

### Workflow

1. Create a branch from `main`
2. Make your changes
3. Ensure all quality gates pass locally
4. Submit a pull request
5. Wait for CI checks and code review

## 📄 License

This project is licensed under the [MIT License](LICENSE).
