// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  auth: {
    globalAppMiddleware: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-swiper",
    "@sidebase/nuxt-auth",
    "nuxt-icon",
  ],
  runtimeConfig: {
    public: {
      apiSecret: process.env.API_KEY_MOVIE,
    },
  },
});
