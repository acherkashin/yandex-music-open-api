import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
const yandexMusic = require("./yandex-music.yaml");


async function initSwaggerUI() {
  const ui = SwaggerUI({
    spec: yandexMusic,
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
    onComplete: () => {
      const isAuthorized = !!localStorage.getItem('authorized');
      
      const tokenButton = document.createElement('button');
      const className = isAuthorized ? 'locked' : 'unlocked'
      tokenButton.className = `btn authorize ${className}`;
      tokenButton.innerHTML = `<span>Login with Token</span><svg width="20" height="20"><use href="#${className}" xlink:href="#${className}"></use></svg>`

      tokenButton.addEventListener('click', () => {
        const token = prompt('Provide token');

        if (token) {
          localStorage.setItem("authorized", `{"oAuthProxied":{"schema":{"flow":"password","tokenUrl":"https://yandex-music-cors-proxy.onrender.com/https://oauth.yandex.ru/token","scopes":{},"type":"oauth2","description":"Authentication via proxy server to bypass cors"},"clientId":"23cabbbdc6cd418abb4b39c32c41195d","name":"oAuthProxied","appName":"Swagger UI Webpack Demo","passwordType":"basic","username":"<email>","token":{"access_token":"${token}","expires_in":30262901,"token_type":"bearer","uid":541320800},"clientSecret":"53bc75238f0c4d08a118e51fe9203300","password":"<password>","scopes":[]}}`);
          localStorage.setItem("authorized", `{"oAuthProxied":{"schema":{"flow":"password","tokenUrl":"https://oauth.yandex.ru/token","scopes":{},"type":"oauth2","description":"Authentication via proxy server to bypass cors"},"clientId":"23cabbbdc6cd418abb4b39c32c41195d","name":"oAuthProxied","appName":"Swagger UI Webpack Demo","passwordType":"basic","username":"<email>","token":{"access_token":"${token}","expires_in":30262901,"token_type":"bearer","uid":541320800},"clientSecret":"53bc75238f0c4d08a118e51fe9203300","password":"<password>","scopes":[]}}`);
          location.reload();
        }
      })
      document.getElementsByClassName('auth-wrapper')[0].append(tokenButton);
    }
  });

  ui.initOAuth({
    appName: "Swagger UI Webpack Demo",
    // See https://demo.identityserver.io/ for configuration details.
    clientId: "23cabbbdc6cd418abb4b39c32c41195d",
    clientSecret: "53bc75238f0c4d08a118e51fe9203300",
  });
}

initSwaggerUI();
