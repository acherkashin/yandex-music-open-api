import axios, { AxiosResponse } from 'axios';

const CLIENT_ID = "23cabbbdc6cd418abb4b39c32c41195d";
const CLIENT_SECRET = "53bc75238f0c4d08a118e51fe9203300";

export interface TokenResponse {
  access_token: string;
  expires_in?: number;
  token_type?: string;
  uid: number;
}

export async function getToken(username: string, password: string): Promise<AxiosResponse<TokenResponse>> {
  const params = new URLSearchParams({
    "grant_type": "password",
    "client_id": CLIENT_ID,
    "client_secret": CLIENT_SECRET,
    "username": username,
    "password": password,
  }).toString();

  return axios.post('https://oauth.yandex.ru/token', params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
}