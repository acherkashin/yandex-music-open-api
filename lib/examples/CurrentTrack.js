const { YandexMusicClient } = require('./../YandexMusicClient');

const client = new YandexMusicClient({
    BASE: "https://api.music.yandex.net:443",
    HEADERS: {
        'Authorization': `OAuth <your_token>`,
      },
});

client.queues
    .getQueues('os=unknown; os_version=unknown; manufacturer=unknown; model=unknown; clid=; device_id=unknown; uuid=unknown')
    .then(async ({result}) => {
        // console.log(JSON.stringify(result, null, 2));
        // Последняя проигрываемая очередь всегда в начале списка
        const currentQueue = await client.queues.getQueueById(result.queues[0].id);
        const {tracks, currentIndex} = currentQueue.result;
        const currentTrackId = tracks[currentIndex ?? 0];
        // console.log(JSON.stringify(currentQueue, null, 2));
        
        const currentTrack = (await client.tracks.getTracks({"track-ids": [`${currentTrackId.trackId}:${currentTrackId.albumId}`]})).result[0];
        // console.log(JSON.stringify(currentTrack, null, 2));

        const supplement = await client.tracks.getTrackSupplement(currentTrack.id);

        console.log(JSON.stringify(supplement.result.lyrics.fullLyrics, null, 2));
    })