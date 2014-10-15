/**
 * Created by yang on 14-10-15.
 */

exports.init = function(next,back){
    require('./api');
    console.log('init background service!');
    if(next){
        next();
    }
}