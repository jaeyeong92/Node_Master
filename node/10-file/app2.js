const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf-8')
.then(data => console.log(data))
.catch(console.error);


// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders!')
.catch(console.error); 

// appending a file
fs.appendFile('./file.txt', '\r\nHello, Dream Coders!')
.then(()=>{
  // copy
  fs.copyFile('./file.txt', './file2.txt')
  .catch(console.error);
})
.catch(console.error); 

// folder
fs.mkdir('sub-folder')
.catch(console.error);