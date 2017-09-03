'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  console.log(server);
  router.get('/', server.loopback.status());
  server.use(router);
};
