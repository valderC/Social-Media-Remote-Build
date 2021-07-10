import axios from 'axios';

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'https://testing-yvc-social-media.herokuapp.com/api/' // production
      : 'http://localhost:8002/api/', // development
});