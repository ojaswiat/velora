# Layers

Nuxt layers for storing shared code across applications.

## Available Layers

1. **base**: Common code and Nuxt config (ex: UnoCSS) for UI and Client. Affects auth and other apps.
2. **common**: Common code for all apps - Types, Constants, Composables, Services, Stores, etc. Affects only the apps.

## Why Separate Layers?

We don't want to put everything in the base layer to avoid having unnecessary code extended by all apps.
