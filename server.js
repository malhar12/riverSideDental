(function(){
  'use strict';

  var express = require('express'),
      app = express();

  app.use(express.static(__dirname + '/app/public'));

  app.listen(process.env.PORT || 3000, function(){
    console.log('starting the server at 3000...');
  });
})();
