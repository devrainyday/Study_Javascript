// var : function-scoped
// immediately-invoked function expression (or IIFE, pronounced "iffy")
// => function-scope 인 것처럼 만들 수 있음. 하지만 'use strict' 가 있어야 완벽히 function-scope로 동작함

// let, const : block-scoped, 변수 재선언 불가능. const는 재할당도 불가능하지만 수정은 가능함

var v_a = 'a';

let l_a = 'a';

var v_a = 'b';

// let l_a = 'b';

const c_a = 'a';

// c_a = 'b';

console.log(v_a);
console.log(l_a);
console.log(c_a);

// const 객체 프로퍼티별 값 변경 가능
const c_object =  {
    name : 'good',
    age : 18
};

c_object.name = 'Kim';

console.log(c_object);

// cosnt 배열 내부 값 변경 가능
const c_array = [1, 5, 6, 5];
c_array.push(19);
c_array[1] = 63;
console.log(c_array);