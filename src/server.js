const Hapi = require('hapi');

const server = new Hapi.Server();
const routes = require('./routes/index');

server.connection({
  port: process.env.PORT || 4000,
  host: process.env.NODE_HOST || '0.0.0.0',
  routes: {
    cors: {
        origin: ['*'], // an array of origins or 'ignore'
        headers: ['Authorization'], // an array of strings - 'Access-Control-Allow-Headers' 
        exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
        additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
        maxAge: 60,
        credentials: true // boolean - 'Access-Control-Allow-Credentials'
    }
  }   
});
server.route(routes);
if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server started');
  });
}
module.exports = server;

