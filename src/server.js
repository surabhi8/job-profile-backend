const Hapi = require('hapi');

const server = new Hapi.Server();
const routes = require('./routes/index');

server.connection({
  host: 'localhost',
  port: process.env.PORT || 4000,
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

