console.log('logging.....');
// console.clear();


// log level
// console.log('log'); //개발
// console.info('info'); // 정보
// console.warn('warn'); // 발생하면 안되지만 치명적이지 않은 '경보'
// console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert 참이 아닐 때만 출력
// console.assert(2 === 3, 'not same!');
// console.assert(2 === 2, 'same!');

// print object
// const student = { name: 'jang', age : 30}
// console.log(student);
// console.table(student);

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i ++){
  i++;
}
console.timeEnd('for loop')