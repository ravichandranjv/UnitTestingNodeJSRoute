'use strict';
exports.getByUsername = function (name) {  
  // static data. Otherwise, db logic or model to supply data of existing or new user
  var uname=null;
  if (name=="jv")uname={username:'hello'+name};
  else uname={username:null}
  return uname;  
};