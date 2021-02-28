# Yandex Music Open API

Swagger документация для Yandex Music.

## Local development

### CORS
Браузеры блокируют кросс доменные поэтому при обычном запуске данные запросы работать не будут. Для обхода данной проблемы можно использовать следующий способ запуска Google Chrome. 

Mac OS:

```
cd /Applications/
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
```
