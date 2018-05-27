var fs = require('fs');
var args = process.argv.slice(2);
var file = args[0];

const pre = require('./reveal-md-pre.js');
var contents = fs.readFileSync(file, 'utf8');

console.log(pre(contents));
