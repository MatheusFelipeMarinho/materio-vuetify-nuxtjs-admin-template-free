require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Kapsula',
    title: 'Kapsula',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/plugins/vuetify/default-preset/preset/overrides.scss',
    '~/assets/scss/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuetify.js', mode: 'client' },
    { src: '~/plugins/vue-composition-api.js', mode: 'client' },
    { src: '~/plugins/vue-apexchart.js', ssr: false },
    { src: '~/plugins/location.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    'vue-geolocation-api/nuxt',
  ],

  geolocation:  {
     watch: true,
  },

  env: {
    KEYCLOAK_API_URL: 'http://localhost:8080',
  },

  auth: {
    strategies: {
      local: false,
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/test-realm/protocol/openid-connect/auth',
          token:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/test-realm/protocol/openid-connect/token',
          userInfo:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/test-realm/protocol/openid-connect/userinfo',
          logout:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/test-realm/protocol/openid-connect/logout?redirect_uri=' +
            encodeURIComponent('http://localhost:3000/home'),
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 300,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'nuxt-client',
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256',
      },
    },
    redirect: {
      login: '/home',
      // logout: "/login",
      home: '/',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#9155FD',
          original: '#9155FD',
          accent: '#0d6efd',
          secondary: '#8A8D93',
          success: '#56CA00',
          info: '#16B1FF',
          warning: '#FFB400',
          error: '#FF4C51',
          hotmart: '#F04E23',
          braip: '#8229FF',
          eduzz: '#FFCD33',
          monetizze: '#2580BC',
        },
        light: {
          primary: '#37bcf8',
          accent: '#0d6efd',
          secondary: '#8A8D93',
          success: '#56CA00',
          info: '#16B1FF',
          warning: '#FFB400',
          error: '#FF4C51',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
