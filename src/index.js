const express = require('express');
const config = require('./config');

const app = express();

require('./config/mongoose');

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.app.port, (err) => {
   if (err) {
       return console.error(err);
   }
   console.log(`Listening ${config.app.port}`);
});
