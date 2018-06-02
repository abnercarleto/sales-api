import express from 'express';
import morgan from 'morgan'
import { ClientsController } from './client';

const app = express();

app.use(morgan('[:date[iso]] ":method :url" :status :response-time ms'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/clients', ClientsController);

export default app;
