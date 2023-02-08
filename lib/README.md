<h1 align="center"><img alt="Yandex Music Client Logo" src="https://raw.githubusercontent.com/acherkashin/yandex-music-open-api/main/lib/assets/js-logo.svg" style="max-width:50rem"><br /><a href="https://www.npmjs.com/package/yandex-music-client">Yandex Music Client for JavaScript (Unofficial)</a></h1>

JavaScript client for Yandex Music generated from [OpenAPI Schema](https://github.com/acherkashin/yandex-music-open-api).


## Installation

```
npm i yandex-music-client
```

## Usage

### Creating Client

```ts
import { getToken } from 'yandex-music-client/token';
import { YandexMusicClient } from 'yandex-music-client/YandexMusicClient'

const token = await getToken('your email', 'your password');

const client = new YandexMusicClient({
    BASE: "https://api.music.yandex.net:443",
    HEADERS: {
        'Authorization': `OAuth ${config.token}`,
        // specify 'en' to receive data in English
        'Accept-Language': 'ru'
      },
});
```

### Getting new releases

```ts
// ...

client.landing.getNewReleases();
```

### Getting track URL

```typescript
import { getTrackUrl } from 'yandex-music-client/trackUrl';
 
// ...

getTrackUrl(client, trackId);
```