# Yandex Music Open API

Swagger документация для Yandex Music.

## Local development

```
npm install
npm start
```

### CORS
Браузеры блокируют кросс доменные поэтому при обычном запуске данные запросы работать не будут. Для обхода данной проблемы можно использовать следующий способ запуска Google Chrome. 

Сначала закройте все инстансы Google Chrome, затем перейдите в папку с Google Chrome и запустите его с флагом `--disable-web-security`. При запуске Google Chrome вы увидите сообщение `Вы используете неподдерживаемый флаг командной строки: -disable-web-security. Стабильность и безопасность будут нарушены.`, данное сообщение можете игнорировать. Далее преведены более подробные снтрукции для каждой операционной системы.

Mac OS:

```
cd /Applications/
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
```

Windows:

```
cd C:\Program Files (x86)\Google\Chrome\Application
.\Chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

```

Linux:

```
TODO
```


Также для обхода CORS можно использовать следующий [Google Chrome Extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en). Для успешной работы необходимо добавить `https://api.music.yandex.net:443/` в "6. Whitelisted domains from - Allow CORS"

Для тестирования CORS используйте [следующую ссылку](https://webbrowsertools.com/test-cors/).

