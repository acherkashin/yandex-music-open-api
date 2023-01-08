# Yandex Music Client for JavaScript

JavaScript client for Yandex Music generated from [OpenAPI Schema](https://github.com/acherkashin/yandex-music-open-api).


## Installation

```
npm i yandex-music-client
```

## Usage

```typescript
import { getToken } from 'yandex-music-client/token';
import { YandexMusicClient } from 'yandex-music-client/YandexMusicClient'

const token = await getToken('your email', 'your password');

const client = new YandexMusicClient({
    BASE: "https://api.music.yandex.net:443",
    HEADERS: {
        'Authorization': `OAuth ${config.token}`
      },
});

client.landing.getNewReleases();
```