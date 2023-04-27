const fs = require('fs');

console.log(global);

global.hello = function(){
  console.log('hello');
}

hello();