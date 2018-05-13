var messages = require('../model/db');


exports.get_admin_page =  function (req, res) {
    res.render('admin')
};

// redirect to admina-acess
exports.serve_admin_access =  function (req, res) {
  if(req.body.userName === 'gina' && req.body.password ==='kingronan'){
    messages.find({},function(err,data){
      if(err) throw err;
      res.render('admin-access',{data:data})
    });
  }
  else{
    res.send('no autorizado')
  }

};
