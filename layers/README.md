# Layers folder for storing all layers

1. Base layer - Common code and Nuxt config (ex: UnoCSS) for UI and Client. Affects Auth and other apps.
2. Common layer - Common code for all the Apps - Types, Constants, Composables, Services, Stores, etc. Affects only the apps.
3. We don't want to put everything in the base layer to get extended by the Auth app.
