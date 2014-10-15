/**
 * Created by yang on 14-10-13.
 */
var fs = require('fs');
var path = require('path');

var getDirName = function(){
  var pathname = window.location.pathname;
  return  pathname.substr(0,pathname.lastIndexOf('/'));
}



global.__dirname = getDirName();


var bg = require('./bg');
var ui = require('./ui');

ui.init(function(){//先初始化ui 可以提高用户体验
    bg.init(function(){
       document.write('hello');
    });
})
