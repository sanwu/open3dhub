var assert = require('assert');
var binding = require('./build/Release/binding');
assert.equal('world!', binding.hello());

exports.sayHello = function(){
    document.write('binding.hello() =', binding.hello());
}
