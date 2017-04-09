(function(){
  'use strict';

  var express = require('express'),
      app = express();

  app.use(express.static(__dirname + '/app/public'));

  app.listen(8080, function(){
    console.log('starting the server at 8080...');
  });
})();
