export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-auth-sample",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    middleware: ["auth"]
  },

  auth: {
    redirect: {
      login: "/",
      callback: "/auth"
    },
    strategies: {
      aad: {
        scheme: "oauth2",
        endpoints: {
          authorization:
            "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
          token: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
          userInfo: "",
          logout: "/"
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: "code",
        grantType: "authorization_code",
        accessType: "offline",
        // ******** change this for your Application (Client) ID ********
        clientId: "37014aa9-a961-47ce-bb9e-868cba98a0b2",
        codeChallengeMethod: "S256",
        scope: ["openid", "profile"],
        autoLogout: true
      },
      local: {
        token: {
          property: "token"
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "user"
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          logout: { url: "/api/auth/logout", method: "post" },
          user: { url: "/api/auth/user", method: "get" }
        }
      }
    }
  }
};
