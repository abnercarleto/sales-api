import http from 'http';
import normalizePort from 'normalize-port';
import app from './app';

const port = normalizePort(process.env.PORT || 8000);
app.set('port', port);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Started on port ${server.address().port}`);
});
