import express from 'express';
import morgan from 'morgan'

const app = express();

app.use(morgan('[:date[iso]] ":method :url" :status :response-time ms'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('App listening on port 8000!');
});
