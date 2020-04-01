// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  options.updated = function() {
    this.$nextTick(() => {
      if (this.$route.path == '/guide/api/swagger.html') {
        // Begin Swagger UI call region
        const ui = SwaggerUIBundle({
          url: "/openapi.json",
          "dom_id": "#swagger-ui",
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
          ],
          layout: "StandaloneLayout"
        })
        // End Swagger UI call region

        window.ui = ui
      }
    })
  }

}