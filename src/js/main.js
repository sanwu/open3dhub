/**
 * Created by yang on 14-10-13.
 */
var fs = require('fs');

fs.readFile('./package.json', function (err, data) {
    if (err) throw err;
    document.write(data);
});