import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:"theme-color" ,content:"#ef2c"},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/index.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "./plugins/user.js"
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  router: {
    middleware: 'clearValidationError'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios:{
    baseURL:"http://127.0.0.1:8000/api",
   
  },

  auth: {

  strategies:{
     local:{
        endpoints:{
          login:
          {
            url:"login",
            method:"post",
            propertyName:"meta.token"
          },
 
          logout:
          {
            url:"logout",
            method:"post",
          },
 
          user:
          {
            url:"user",
            method:"get",
            propertyName:"data"
          },
 
       }
      }
    }

  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl: true,
    
    
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}



