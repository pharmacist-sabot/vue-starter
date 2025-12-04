# Vue 3 Enterprise Starter Template

![CI Quality](https://github.com/pharmacist-sabot/vue-starter/actions/workflows/ci.yml/badge.svg)
[![Vue](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?logo=vite)](https://vitejs.dev/)

An opinionated, production-ready starter template for Vue 3 applications. Designed for scalability, code quality, and developer experience.

## 🚀 Features

- **Framework:** Vue 3 (Script Setup) + TypeScript + Vite
- **State Management:** Pinia (Store)
- **Routing:** Vue Router (History mode)
- **Linter & Formatter:** ESLint (AntFu Config) - No Prettier required.
- **Git Hooks:** Husky + Lint-staged (Auto-fix on commit).
- **Commit Convention:** Commitlint (Conventional Commits).
- **Security:** Audit-CI (Vulnerability check) & Strict TypeScript settings.
- **CI/CD:** GitHub Actions workflow ready.
- **Utils:** VueUse included.

## gi🛠️ Prerequisites

- **Node.js:** version 22+ (LTS recommended)
- **Package Manager:** PNPM (defined via `packageManager` in package.json)

## Getting Started

### 1. Clone the repository

```bash
# Use this template to start a new project
git clone https://github.com/pharmacist-sabot/vue-starter.git my-new-project
cd my-new-project
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup Environment

Copy the example environment file (if applicable in the future).

```bash
cp .env.example .env
```

### 4. Run Development Server

```bash
pnpm dev
```

The app will be served at `http://localhost:5173/`.

## Available Scripts

| Script            | Description                                                    |
| :---------------- | :------------------------------------------------------------- |
| `pnpm dev`        | Start the development server with HMR.                         |
| `pnpm build`      | Build the application for production (includes type checking). |
| `pnpm preview`    | Preview the production build locally.                          |
| `pnpm lint`       | Lint and check formatting for all files.                       |
| `pnpm lint:fix`   | Auto-fix linting and formatting errors.                        |
| `pnpm type-check` | Run TypeScript compiler check (no emit).                       |
| `pnpm audit`      | Check for high-severity security vulnerabilities.              |

## Directory Structure

```text
src/
├── assets/          # Static assets (images, fonts, global css)
├── components/      # Reusable UI components
├── composables/     # Shared Vue logic (hooks)
├── layouts/         # App layouts (e.g., Default, Auth)
├── router/          # Routing configuration
├── stores/          # Global state management (Pinia)
├── types/           # TypeScript interfaces & types
├── utils/           # Helper functions & constants
└── views/           # Page components associated with routes
```

## Contribution Guidelines

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Husky and Commitlint will verify your commit messages automatically.

**Format:** `<type>: <subject>`

**Examples:**

- `feat: add user profile page`
- `fix: resolve login api error`
- `chore: update dependencies`
- `style: fix landing page responsive layout`

### Branching Strategy

- `main` / `master`: Production-ready code.
- `feature/*`: For new features (e.g., `feature/login-screen`).
- `fix/*`: For bug fixes (e.g., `fix/header-alignment`).

## Quality Gates

Before merging code, the following checks must pass (automated via GitHub Actions):

1.  **Linting:** Code style must follow the defined rules.
2.  **Type Checking:** No TypeScript errors allowed (`strict: true`).
3.  **Build:** The project must build successfully.
4.  **Audit:** No high-severity vulnerabilities.

## License

This project is licensed under the MIT License.
