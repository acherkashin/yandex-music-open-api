<h1 align="center"><img alt="yandex-music-open-api" src="./assets/logo.svg" style="max-width:50rem"><br />yandex-music-open-api</h1>

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
npm run chrome:mac
```

или

```
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
```

Windows:

```
npm run chrome:win
```

или

```
cd C:\Program Files (x86)\Google\Chrome\Application
.\Chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```

Linux:

```
TODO
```

## Roadmap

- [ ] Опубликовывать Yandex Music Api на хостинг
- [ ] Добавить описание использования [OpenAPI Genrator](https://openapi-generator.tech/)
- [ ] Публиковать Npm, Nuget, ... модули
- [ ] Добавить линтер 


### Open API генератор

## Кастомный request.ts файл 

Необходимо использовать кастомный `request.ts` файл [из-за известного бага в `openapi-typescript-codegen` модуле](https://github.com/ferdikoomen/openapi-typescript-codegen/issues/1000#issuecomment-1374436662).

## Использование Yandex Music Api

```js
const { YandexMusicClient } = require('./YandexMusicClient');

const client = new YandexMusicClient({
    BASE: "https://api.music.yandex.net:443",
    HEADERS: {
        'Authorization': "OAuth <your token>"
    }
})

client.default.getFeed().then(result => {
    console.log(result);
});

```

## Помощь

Все вопросы касающиеся yandex music api, могут быть заданы в [Telegram чате](https://t.me/yandex_music_api).
Поддержать автора можно подписавшись на его [Telegram канал](https://t.me/cherkashindev).

## Благодарность

Спасибо [MarshalX](https://github.com/MarshalX/), [его работа](https://github.com/MarshalX/yandex-music-api) положена в основу [yandex-music-extension](https://github.com/acherkashin/yandex-music-extension) и [yandex-music-open-api](https://github.com/acherkashin/yandex-music-open-api).
