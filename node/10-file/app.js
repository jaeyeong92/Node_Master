const fs = require('fs');


// fs(file system)은 3가지 방식이 있다.

// 동기적으로 수행되면 노드가 죽는 것을 방지하기 위하여 항상 try catch를 사용 -> 가급적 사용하지 않는 것이 좋음
try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch(e){
  console.log('hihi');
}

// 비동기적, 콜백함수를 이용
fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello'); 

// 비동기적, promises를 이용
fs.promises.rename('./text.txt', './text-new.txt')
.then(() => console.log('Done!'))
.catch(console.error);
