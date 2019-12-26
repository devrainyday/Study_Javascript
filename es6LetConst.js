// var : function-scoped
// immediately-invoked function expression (or IIFE, pronounced "iffy")
// => function-scope 인 것처럼 만들 수 있음. 하지만 'use strict' 가 있어야 완벽히 function-scope로 동작함

// let, const : block-scoped, 변수 재선언 불가능. const는 재할당도 불가능하지만 수정은 가능함

var vA = 'a';

let lA = 'a';

var vA = 'b';

// let lA = 'b';

const cA = 'a';

// cA = 'b';

console.log(vA);
console.log(lA);
console.log(cA);

// const 객체 프로퍼티별 값 변경 가능
const cObject =  {
    name : 'good',
    age : 18
};

cObject.name = 'Kim';

console.log(cObject);

// cosnt 배열 내부 값 변경 가능
const cAarray = [1, 5, 6, 5];
cAarray.push(19);
cAarray[1] = 63;
console.log(cAarray);