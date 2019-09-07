// Rest 파라미터와 Spread 연산자

// ES6 이전에는 몇 개의 전달인자를 함수에 전달하기 위해 argument 객체를 사용.
// argument는 유사 배열의 역할을 하는 객체, 해당 함수의 파라미터 참조

// ES6에서는 이것을 Rest 파라미터로 대체
// Rest 파라미터는 함수의 선언문에 Spread 연산자를 이용해 
// 가변 길이의 파라미터 배열을 받는 용도로 사용
// 만약 아무것도 전달되지 않는다면 Rest 파라미터는 빈 배열이 됨

const foo = [1,2,3,4,5];
const [a, b, ...foos] = foo; // foos => Rest 파라미터
console.log(`${a} ${b} [${foos}]`);

function myFunc(first, second, ...args) { // args => Rest 파라미터
    console.log(first);
    console.log(second);
    console.log(args);
}
myFunc('one', 'two', 'third', 'four', 'five');

// Spread 연산자

function myFuncSpread(x, y, z) {
    console.log(`${x} ${y} ${z}`);
};
let args = [3,1,2];
myFuncSpread(...args);


let singer = ['kesha', 'Maroon5', 'Rihanna', 'Beyonce'];
let newSinger = ['Bebe Rexha', ...singer, 'Billy'];
console.log(newSinger);

let obj1 = {
    foo: 'bar',
    len: 5
};
let obj2 = {
    bar: 'foo',
    len: 10
};
let cloneObj = {...obj1, ...obj2}; 
let cloneObj2 = Object.assign({}, obj1, obj2);
// 겹치는 건 가장 마지막에 나온 것으로 덮어씌워짐
console.log(cloneObj);
console.log(cloneObj2);