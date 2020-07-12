export default {
  mode: 'spa',

  head: {
    title: 'Font Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Font test description.' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap' }
    ]
  },

  loading: { color: '#f00' },

  css: [
  ],

  plugins: [
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false
  },

  build: {
    extend (config, ctx) {
    }
  }
}
