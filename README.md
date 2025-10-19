# Nuxt Bun Monorepo Template

A modern monorepo template for building Nuxt applications using Bun as the package manager and runtime.

## Structure

- **apps/**: Nuxt applications
- **layers/**: Nuxt layers for shared code
    - `base`: Common code and Nuxt config (ex: UnoCSS) for UI and Client
    - `common`: Common code for all apps - Types, Constants, Composables, Services, Stores, etc.
- **libs/**: Standalone libraries, utilities, and types that don't depend on Nuxt runtime
- **plugins/**: Pure Vue apps that are not dependent on Nuxt runtime

## Setup

Install dependencies:

```bash
bun install
```

## Scripts

### Linting

```bash
bun lint          # Run all linters
bun lint:fix      # Fix all linting issues
bun lint:inspect  # Inspect linting configuration
```

### Type Checking

```bash
bun typecheck     # Type check all workspaces
```

### Cleaning

```bash
bun clean         # Clean all workspaces
bun clean:all     # Clean all workspaces and node_modules
```

## Development

Each app/layer can be developed independently. Navigate to the respective directory and run:

```bash
bun dev
```

## About Bun

This project uses [Bun](https://bun.sh) - a fast all-in-one JavaScript runtime that serves as both a package manager and runtime environment.
