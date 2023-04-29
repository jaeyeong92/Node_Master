let count = 0;

function increase(){
  count++;
}

function getCount(){
  return count;
}

// 순수 Node.js에서 사용하는 import/export
module.exports.getCount = getCount;
module.exports.increase = increase;
