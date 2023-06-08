// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nextblog0513',
  apiKey: process.env.API_KEY,
});