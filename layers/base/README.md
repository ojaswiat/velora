# Base Layer

Common code and Nuxt configuration shared across applications.

## What's Included

- UnoCSS configuration
- Base styles and components
- Common Nuxt configurations

## Setup

Install dependencies:

```bash
bun install
```

## Development

The `.playground` directory helps you test your layer during development.

Start the development server:

```bash
bun dev
```

This will prepare and boot the `.playground` directory, which imports your layer.

## Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun generate` - Generate static site
- `bun preview` - Preview production build
- `bun lint` - Run linters
- `bun lint:fix` - Fix linting issues
- `bun typecheck` - Type check the layer

## Using This Layer

To use this layer in your Nuxt app, add it to your `nuxt.config`:

```ts
export default defineNuxtConfig({
    extends: ["../layers/base"]
});
```

## Distributing

If you want to publish this layer as an npm package:

1. Verify the `files` field in `package.json`
2. Run:

```bash
npm publish --access public
```

Users can then install it:

```bash
bun add your-layer
```

And use it in their `nuxt.config`:

```ts
export default defineNuxtConfig({
    extends: ["your-layer"]
});
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
