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
      social: {
        _scheme: "oauth2",
        authorization_endpoint:
          "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
        userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
        scope: ["openid"],
        access_type: "code",
        access_token_endpoint: undefined,
        response_type: "token",
        token_type: "Bearer",
        redirect_uri: undefined,
        client_id: "293fede3-b400-4969-98bf-17f7f5837b5a",
        token_key: "access_token",
        state: "RANDOME"
      }
    }
  },
  cookie: {
    prefix: "auth.",
    options: {
      path: "/",
      maxAge: 300
    }
  }
};
