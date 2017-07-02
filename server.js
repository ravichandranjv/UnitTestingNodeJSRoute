var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var router=express.Router;
var users=require('./lib/users.js');
app.route('/about/:name')
.get(function(req,res){
    var user = users.getByUsername(req.params.name);
    if (!user) {
      res.status(404).json({
        data: user
      });
    } else {
      res.json({        
        data: user
      });
    }
});
app.use('/',router);
app.listen(port);
console.log('Server listening on port ' + port);
module.exports.server=app;