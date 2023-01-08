<h1 align="center"><img alt="yandex-music-open-api" src="./assets/logo.svg" style="max-width:50rem"><br />yandex-music-open-api</h1>

Swagger документация для Yandex Music.

## Local development

```
npm install
npm start
```

### Open API генератор

#### Кастомный request.ts файл 

Необходимо использовать кастомный `request.ts` файл [из-за известного бага в `openapi-typescript-codegen` модуле](https://github.com/ferdikoomen/openapi-typescript-codegen/issues/1000#issuecomment-1374436662).

#### Использование JavaScript Yandex Music Client

Как использовать клиент Яндекс.Музыки для JavaScript [описано здесь]('./lib/README.md').

## Roadmap

- [x] Опубликовывать Yandex Music Api на хостинг
- [ ] Добавить описание использования [OpenAPI Genrator](https://openapi-generator.tech/)
- [ ] Публиковать Npm, Nuget, ... модули
- [ ] Добавить линтер 

## Помощь

Все вопросы касающиеся yandex music api, могут быть заданы в [Telegram чате](https://t.me/yandex_music_api).
Поддержать автора можно подписавшись на его [Telegram канал](https://t.me/cherkashindev).

## Благодарность

Спасибо [MarshalX](https://github.com/MarshalX/), [его работа](https://github.com/MarshalX/yandex-music-api) положена в основу [yandex-music-extension](https://github.com/acherkashin/yandex-music-extension) и [yandex-music-open-api](https://github.com/acherkashin/yandex-music-open-api).
