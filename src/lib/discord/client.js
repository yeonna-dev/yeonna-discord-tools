import axios from 'axios';
import { env } from '$lib/env';

export const discord = axios.create({
  baseURL: 'https://discord.com/api',
  headers: { Authorization: `Bot ${env.BOT_TOKEN}` },
});
