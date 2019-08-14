const Hapi = require('hapi');

const server = new Hapi.Server();
const routes = require('./routes/index');

server.connection({
  port: process.env.PORT || 4000,
  host: process.env.NODE_HOST || '0.0.0.0',
 
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

