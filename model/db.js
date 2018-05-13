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
//schemas
 var messagesSchema = new Schema({
   name:  String,
   email: String,
   message: String
 });
 var commentsSchema = new Schema({
   comment: String
 });

 //models
var messages = mongoose.model('messages', messagesSchema);
var comments = mongoose.model('comments', commentsSchema);
//
// var comment = new comments({
//
//   comment: "blaaaaaah"
// })
//
// comment.save(function(err,user){
//   if(err) throw err;
//   console.log('saved to db')
// });



module.exports = messages;
module.exports = comments;
