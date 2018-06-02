import express from 'express';
import morgan from 'morgan'
import bodyParser from 'body-parser';
import { ClientsController } from './client';

const app = express();

app.use(morgan('[:date[iso]] ":method :url" :status :response-time ms'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.use('/clients', ClientsController);

export default app;
