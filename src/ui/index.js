/**
 * Created by yang on 14-10-15.
 */


exports.init = function(next,back){
    require('./script/app');
    console.log('init user interface');
    if(next){
        next();
    }
}