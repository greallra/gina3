var comments = require('../model/db');

//render comments on page
exports.render_comment =  function (req, res) {

          comments.find({},function(err,comments){
            if(err) throw err;
            if(comments) console.log(comments)
            res.render('rests/gastromaquia',{comments:comments})
          });

};

//post add comments
exports.add_render_comment =  function (req, res) {

  var comment = new comments(req.body);
   comment.save(function(err,data){
     if(err) throw err;
     console.log('saved to db')
     res.redirect('/rests/gastromaquia')
   });
};

// redirect to admina-acess
// exports.serve_admin_access =  function (req, res) {
//   if(req.body.userName === 'gina' && req.body.password ==='kingronan'){
//     messages.find({},function(err,data){
//       if(err) throw err;
//       res.render('admin-access',{data:data})
//     });
//   }
//   else{
//     res.send('no autorizado')
//   }
//
// };
