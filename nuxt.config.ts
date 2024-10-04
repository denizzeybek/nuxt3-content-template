// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: './i18n/i18n.config.ts'
  },
  css: ["~/assets/css/main.css", "~/assets/scss/app.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/global',
        pathPrefix: false // to disable auto-import in this directory
      }
    ]
  }
});