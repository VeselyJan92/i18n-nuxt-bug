export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  modules:[
    '@nuxtjs/i18n',
  ],

  i18n:{
    locales: [
      { code: 'cs', iso: 'cs'},
      { code: 'de', iso: 'de'},
    ],

    defaultLocale: 'cs',

    precompile: {
      strictMessage: false,
    },
  
    vueI18n: 'i18n.config.ts'
  },

})
