import express from 'express';
import router from './api';

const app = express();

app.use(router);

module.exports = { path: '~/api/*', handler: app };