var mongoose = require('mongoose');
//connect to db
mongoose.connect('mongodb://me:me@ds111420.mlab.com:11420/gina');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connected to db");
});

 var Schema = mongoose.Schema;
//schema
 var UserMessagesSchema = new Schema({
   name:  String,
   email: String,
   message: String
 });

 //model
var UserMessages = mongoose.model('UserMessages', UserMessagesSchema);


//
// user.save(function(err,data){
//   if(err) throw err;
//   console.log('saved to db')
// });



module.exports = UserMessages;
