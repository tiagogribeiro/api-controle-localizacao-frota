var Mongoose = require('mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao MongoDB.')
});

Mongoose.connect('mongodb://localhost/test');