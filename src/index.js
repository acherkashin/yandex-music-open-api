import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
const yamljs = require("yamljs");
const resolveRefs = require("json-refs").resolveRefs;

/**
 * Return JSON with resolved references
 * @param {array | object} root - The structure to find JSON References within (Swagger spec)
 * @returns {Promise.<JSON>}
 */
const multiFileSwagger = (root) => {
  const options = {
    filter: ["relative", "remote"],
    loaderOptions: {
      processContent: function (res, callback) {
        callback(null, yamljs.parse(res.text));
      },
    },
  };

  return resolveRefs(root, options).then(
    function (results) {
      return results.resolved;
    },
    function (err) {
      console.log(err.stack);
    }
  );
};

async function initSwaggerUI() {
  const spec = require("./yandex-music.yaml");
  const resolved = await multiFileSwagger(spec);

  const ui = SwaggerUI({
    spec: resolved,
    dom_id: "#swagger",
    // If set to true, it persists authorization data and it would not be lost on browser close/refresh
    persistAuthorization: true,
    requestInterceptor: (request) => {
      if (request.headers.Authorization) {
        // Yandex OAuth authentication returns auth token with token_type "bearer",
        // but in Authorization header request should start with "OAuth"
        request.headers.Authorization = request.headers.Authorization.replace(
          "Bearer",
          "OAuth"
        );
      }

      return request;
    },
  });

  ui.initOAuth({
    appName: "Swagger UI Webpack Demo",
    // See https://demo.identityserver.io/ for configuration details.
    clientId: "23cabbbdc6cd418abb4b39c32c41195d",
    clientSecret: "53bc75238f0c4d08a118e51fe9203300",
  });
}

initSwaggerUI();
