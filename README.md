# Velora - Nuxt Bun Monorepo

A modern, scalable monorepo template for building Nuxt applications using Bun as the package manager and runtime. This setup provides a flexible architecture for building multiple applications with shared code, components, and configurations.

## 🏗️ Monorepo Architecture

This monorepo follows a workspace-based architecture where code is organized into distinct categories, each serving a specific purpose in the application ecosystem.

```
velora/
├── apps/           # Full-featured Nuxt applications
├── layers/         # Nuxt layers for shared code and configurations
├── libs/           # Standalone libraries and utilities
├── plugins/        # Pure Vue applications
└── package.json    # Root workspace configuration
```

## 📁 Directory Structure Explained

### `apps/` - Nuxt Applications

The `apps/` directory contains complete, deployable Nuxt applications. Each app is a self-contained application that can:

- Extend one or more Nuxt layers
- Use shared libraries from `libs/`
- Be developed, built, and deployed independently
- Have its own dependencies and configuration

**Example Structure:**

```
apps/
└── auth/
    ├── nuxt.config.ts      # App-specific Nuxt configuration
    ├── package.json        # App-specific dependencies
    ├── app.vue             # Root Vue component
    ├── components/         # App-specific components
    ├── composables/        # App-specific composables
    └── pages/              # App routes (if using)
```

**Key Characteristics:**

- Each app extends the `base` layer (or other layers) using the `extends` property
- Apps use aliases like `#auth` to reference their own internal modules
- Can override or extend configurations from inherited layers

**Current Apps:**

- `auth`: Authentication application

### `layers/` - Nuxt Layers

Nuxt layers are reusable configurations and code that can be extended by apps or other layers. They enable code sharing across multiple applications while maintaining separation of concerns.

**Layer Hierarchy:**

```
base (foundation)
└── common (extends base)
    └── apps/* (extend common or base)
```

#### `layers/base/` - Base Layer

The foundational layer that provides core UI configurations and tools.

**Purpose:**

- Common UI framework setup (UnoCSS)
- Shared ESLint configuration
- Base styling and design system
- Common Nuxt modules configuration

**Contains:**

- UnoCSS configuration (`uno.config.ts`)
- Base components for UI elements
- Core ESLint setup with `@nuxt/eslint`
- Shared Nuxt module configurations

**When to Use:**

- For UI-focused applications
- When you need a consistent design system
- As a foundation for other layers

#### `layers/common/` - Common Layer

Extends the base layer and provides shared business logic and utilities.

**Purpose:**

- Shared TypeScript types and interfaces
- Common constants and configuration values
- Reusable composables (state management, utilities)
- Shared services and API clients
- Common stores (if using state management)
- Cross-app utilities

**Contains:**

- Composables for shared logic
- TypeScript type definitions
- Constants and enums
- Service layers
- Store definitions (Pinia/other)

**When to Use:**

- For sharing business logic across apps
- When you need common types and interfaces
- For shared API clients and services

#### Creating Custom Layers

You can create additional layers for specific domains:

```bash
# Create a new layer
mkdir -p layers/your-layer
cd layers/your-layer

# Initialize with package.json
bun init

# Create nuxt.config.ts
touch nuxt.config.ts
```

**Example Layer Structure:**

```typescript
// layers/your-layer/nuxt.config.ts
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    alias: {
        "#your-layer": resolve("."),
    },
    compatibilityDate: "2025-10-17",
    extends: [resolve("../base")], // Extend other layers
});
```

### `libs/` - Standalone Libraries

The `libs/` directory contains pure TypeScript/JavaScript libraries that are **framework-agnostic** and don't depend on Nuxt or Vue runtime.

**Purpose:**

- Standalone utility functions
- Pure TypeScript types and interfaces
- Business logic that doesn't need Vue/Nuxt
- Shared algorithms and data transformations
- Node.js utilities
- API clients (non-composable)

**Characteristics:**

- No Vue or Nuxt dependencies
- Can be used in Node.js scripts, CLIs, or other contexts
- Fully testable in isolation
- Can be published as npm packages
- May have their own build process

**Example Use Cases:**

- Date/time utilities
- Data validation libraries
- API response parsers
- Configuration loaders
- Logging utilities
- Mathematical functions

**Example Structure:**

```
libs/
├── utils/
│   ├── package.json
│   ├── src/
│   │   ├── date.ts
│   │   ├── string.ts
│   │   └── index.ts
│   └── tsconfig.json
├── validators/
│   ├── package.json
│   └── src/
└── types/
    ├── package.json
    └── src/
```

### `plugins/` - Pure Vue Applications

The `plugins/` directory contains Vue applications that don't use Nuxt-specific features but may be embedded or integrated into Nuxt apps.

**Purpose:**

- Standalone Vue 3 applications
- Embeddable widgets or components
- Applications that need to run outside Nuxt context
- Micro-frontends
- Vue components for non-Nuxt environments

**Characteristics:**

- Built with Vue 3 but without Nuxt dependencies
- Can use Vue Router, Pinia, etc.
- Can be built and deployed independently
- May be embedded in other applications

**Example Use Cases:**

- Embeddable widget library
- Standalone admin panels
- Micro-frontends
- Component libraries for documentation

## 🔧 Workspace Configuration

The root `package.json` defines the monorepo structure using Bun workspaces:

```json
{
    "workspaces": [
        "apps/*",
        "layers/*",
        "libs/*",
        "plugins/*"
    ]
}
```

This configuration:

- Enables shared dependencies across workspaces
- Allows symlinked local packages
- Provides unified script execution across all workspaces
- Centralizes common devDependencies at the root level

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed (v1.0.0 or later)
- Node.js (for compatibility with certain packages)
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd velora
```

2. Install all dependencies:

```bash
bun install
```

This will install dependencies for the root workspace and all sub-workspaces (apps, layers, libs, plugins).

## 💻 Development

### Running Individual Applications

Navigate to any app directory and start the dev server:

```bash
cd apps/auth
bun dev
```

### Running Individual Layers

Layers can be developed independently with a playground:

```bash
cd layers/base
bun dev
```

This starts a Nuxt dev server with the `.playground` directory.

### Developing Libraries

For standalone libraries in `libs/`:

```bash
cd libs/your-lib
bun dev        # If watch mode is configured
bun test       # Run tests
bun build      # Build for production
```

## 📜 Available Scripts

### Root Level Scripts

Run these from the repository root to affect all workspaces:

#### Linting

```bash
# Run ESLint across all workspaces
bun lint

# Run ESLint with debug output
bun lint:d

# Auto-fix linting issues across all workspaces
bun lint:fix

# Inspect ESLint configuration
bun lint:inspect
```

#### Type Checking

```bash
# Type check all workspaces
bun typecheck
```

This runs `vue-tsc` in all apps and layers to verify TypeScript types.

#### Cleaning

```bash
# Clean build artifacts in all workspaces
bun clean

# Clean all build artifacts AND node_modules
bun clean:all
```

### Workspace-Specific Scripts

Each workspace (app/layer) has its own scripts:

```bash
# Development
bun dev              # Start dev server
bun dev:prepare      # Prepare Nuxt (generate types)

# Building
bun build            # Build for production
bun generate         # Generate static site

# Preview
bun preview          # Preview production build

# Linting
bun lint             # Run ESLint
bun lint:fix         # Fix linting issues
bun lint:inspect     # Inspect ESLint config

# Type Checking
bun typecheck        # Run TypeScript type checking

# Cleaning
bun clean            # Clean workspace
```

## 🎯 How to Add New Workspaces

### Adding a New App

1. Create the app directory:

```bash
mkdir -p apps/your-app
cd apps/your-app
```

2. Initialize with `package.json`:

```json
{
    "name": "your-app",
    "type": "module",
    "version": "0.0.1",
    "scripts": {
        "dev": "nuxi dev",
        "build": "nuxt build",
        "generate": "nuxt generate",
        "preview": "nuxt preview",
        "typecheck": "nuxt prepare && vue-tsc -b --noEmit",
        "clean": "rm -rf dist && nuxt cleanup"
    },
    "devDependencies": {
        "nuxt": "^4.1.3",
        "vue": "latest"
    }
}
```

3. Create `nuxt.config.ts`:

```typescript
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    alias: {
        "#your-app": resolve("."),
    },
    compatibilityDate: "2025-10-17",
    devtools: { enabled: true },
    extends: [resolve("../../layers/base")],
});
```

4. Create `app.vue`:

```vue
<template>
    <div>
        <NuxtPage />
    </div>
</template>
```

5. Install dependencies:

```bash
bun install
```

### Adding a New Layer

Follow the same process as apps, but layers should focus on reusability and may extend other layers.

### Adding a New Library

1. Create the library directory:

```bash
mkdir -p libs/your-lib
cd libs/your-lib
```

2. Initialize with `package.json`:

```json
{
    "name": "@velora/your-lib",
    "type": "module",
    "version": "0.0.1",
    "main": "./src/index.ts",
    "scripts": {
        "typecheck": "tsc --noEmit",
        "build": "tsc"
    },
    "devDependencies": {
        "typescript": "^5"
    }
}
```

3. Create source files:

```bash
mkdir src
echo "export const hello = () => 'Hello from lib!';" > src/index.ts
```

4. Create `tsconfig.json`:

```json
{
    "extends": "../../tsconfig.json",
    "compilerOptions": {
        "outDir": "./dist"
    },
    "include": ["src"]
}
```

### Adding a New Plugin

Plugins follow a similar structure to apps but without Nuxt dependencies. Use Vue 3 directly with Vite or another build tool.

## 🔗 Layer Extension & Inheritance

### How Layers Work

Nuxt layers use the `extends` property to inherit configuration and code:

```typescript
// apps/auth/nuxt.config.ts
export default defineNuxtConfig({
    extends: [resolve("../../layers/base")],
});
```

When an app extends a layer:

- All components, composables, and utilities from the layer become available
- Configuration is merged (app config takes precedence)
- Modules from the layer are inherited
- Directory structure is merged virtually

### Layer Resolution Order

When multiple layers are extended, Nuxt resolves them in order:

```
App Config
  ↓
Layer Config (last)
  ↓
Layer Config (first)
  ↓
Default Nuxt Config
```

### Alias Usage

Each layer and app defines an alias for internal imports:

```typescript
// In layer/app config
// In your code
import { something } from "#your-app/utils/helper";

export default defineNuxtConfig({
    alias: {
        "#your-app": resolve("."),
    }
});
```

This allows for clean, absolute imports without relative path hell.

## 🎨 Best Practices

### Organizing Code

1. **Apps**: Application-specific code that doesn't need to be shared
2. **Layers**: Shared configurations, components, and utilities that multiple apps use
3. **Libs**: Pure logic that doesn't depend on Vue/Nuxt (can run anywhere)
4. **Plugins**: Standalone Vue apps or embeddable widgets

### Layer Design

- **Keep layers focused**: Each layer should have a clear purpose
- **Use base for UI**: Put design system and UI framework setup in base
- **Use common for logic**: Put shared business logic in common
- **Create domain layers**: For complex domains, create dedicated layers (e.g., `layers/e-commerce`)

### Dependency Management

- **Root devDependencies**: Common build tools, linters, type checkers
- **Workspace dependencies**: Specific to each app/layer/lib
- **Avoid duplication**: If many workspaces use a package, consider moving it to root

### Type Safety

- Always enable TypeScript strict mode
- Define shared types in `layers/common` or `libs/types`
- Use `vue-tsc` for type checking
- Run `bun typecheck` before committing

### Testing Strategy

This template doesn't enforce a specific testing structure - choose what works best for your team:

#### **Recommended Testing Approaches**

**For Libraries (`libs/`)**

- Use Vitest or Bun's built-in test runner
- Test pure functions and utilities in isolation
- Libraries should have 100% test coverage since they're framework-agnostic

**For Layers (`layers/`)**

- **Unit tests**: Use Vitest for composables, utilities, and business logic
- **Component tests**: Use `@nuxt/test-utils` or Vitest with Vue Testing Library
- Consider testing layers' `.playground` if they're complex

**For Apps (`apps/`)**

- **Unit/Component tests**: Same tools as layers (Vitest, @nuxt/test-utils)
- **E2E tests**: Use Playwright or Cypress at the app level
    - Each app owns its E2E tests (`apps/*/e2e/`)
    - Allows independent testing and deployment
    - Faster CI/CD with selective test execution

**Integration Testing (Optional)**

- For cross-app workflows, consider root-level integration tests
- Create `e2e-integration/` at the root for multi-app scenarios
- Keep this minimal - most testing should be at the app level

**Shared Test Utilities**

- Create `e2e-shared/` or `test-utils/` for common fixtures and helpers
- Avoid duplicating test setup code across apps
- Can be a workspace in `libs/` if needed

#### **Example Test Structure**

```
velora/
├── apps/
│   └── auth/
│       ├── tests/unit/          # Unit tests
│       ├── tests/components/    # Component tests
│       └── e2e/                 # E2E tests (Playwright)
├── layers/
│   ├── base/
│   │   └── tests/               # Vitest tests
│   └── common/
│       └── tests/               # Vitest tests
└── libs/
    └── utils/
        └── tests/               # Vitest or Bun tests
```

### Version Control

- Commit lock files (`bun.lock`)
- Don't commit `node_modules/`, `.nuxt/`, `dist/`
- Use conventional commits for clear history

## 🛠️ Technology Stack

- **Runtime & Package Manager**: [Bun](https://bun.sh)
- **Framework**: [Nuxt 4](https://nuxt.com)
- **UI Framework**: [Vue 3](https://vuejs.org)
- **Styling**: [UnoCSS](https://unocss.dev)
- **Linting**: [ESLint](https://eslint.org) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- **Type Checking**: [TypeScript 5](https://www.typescriptlang.org) with [vue-tsc](https://github.com/vuejs/language-tools)

## 📚 Additional Resources

- [Nuxt Layers Documentation](https://nuxt.com/docs/guide/going-further/layers)
- [Bun Workspaces](https://bun.sh/docs/install/workspaces)
- [Nuxt 4 Release Notes](https://nuxt.com/docs/getting-started/upgrade)
- [UnoCSS Documentation](https://unocss.dev)

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run `bun lint:fix` and `bun typecheck`
4. Commit using conventional commits
5. Create a pull request

## 📄 License

[Add your license here]

---

Built with ❤️ using Bun and Nuxt
