import { YandexMusicClient } from './YandexMusicClient';
import { TrackDownloadInfo } from "./";
import axios from 'axios';
import { createHash } from 'crypto';

export interface DownloadInfo {
  s: string;
  ts: string;
  path: string;
  host: string;
}

export async function getTrackUrl(client: YandexMusicClient, trackId: string) {
  const trackInfo = await client.tracks.getDownloadInfo(trackId);
  const downloadInfo = await getDownloadInfo(trackInfo.result, client.request.config.HEADERS);
  const url = createTrackURL(downloadInfo);

  return url;
}

export async function getDownloadInfo(trackInfo: TrackDownloadInfo[], headers?: any): Promise<DownloadInfo> {
  const isAuthorized = headers?.['Authorization'];
  const info = isAuthorized ? trackInfo.find((item) => item.codec === 'mp3' && !item.preview) : trackInfo[0];

  const downloadInfo = await axios.request<DownloadInfo>({
    url: `${info!.downloadInfoUrl}&format=json`,
    headers,
  });

  return downloadInfo.data;
}

export function createTrackURL(info: DownloadInfo) {
  const trackUrl = `XGRlBW9FXlekgbPrRHuSiA${info.path.substr(1)}${info.s}`;
  const hashedUrl = createHash("md5").update(trackUrl).digest("hex");
  const link = `https://${info.host}/get-mp3/${hashedUrl}/${info.ts}${info.path}`;

  return link;
}