# Yandex Music Client for JavaScript

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
        'Authorization': `OAuth ${config.token}`
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