// 비구조화 할당 (Destructing Assignment)
// 배열이나 객체의 속성을 새로운 변수로 할당

let arr = [6,3,60,30,63,36];
let [a, b, c, d, e, f] = arr;

console.log(`${a} ${b} ${c} ${d} ${e} ${f}`);


// 함수의 return 값이 배열인 경우
const split = a => {
    return a.split(' ');
}

let [s1, s2, , s4] = split('I want something sweet!!');
console.log(`${s1}, ${s2}, ${s4}`);


// 두 변수의 값을 바꾸는 함수
let num1 = 60, num2 = 30;
[num1, num2] = [num2, num1];
console.log(num1);
console.log(num2);

// 객체에 비구조화 할당 이용
let obj = {
    width: 300,
    height: 500
};
let {width, height} = obj;
console.log(width);
console.log(height);

// 변수에 새 이름을 붙여 비구조화 할당
let newObj = {
    width: 400,
    height: 200
}
let {width:w, height:h} = newObj;

console.log(w);
console.log(h);