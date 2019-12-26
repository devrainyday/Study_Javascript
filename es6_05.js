// for in : 열거형 속성명 값 반복적으로 순환,
// 순환하면서 참조하는 변수를 항상 String 타입으로 가져오므로 주의

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d() {
        console.log('d');
    }
};
for (let v in obj) {
     // abcd
    console.log(v);
}

console.log();

let arr = ['a', 'b', 'c'];
for (let v in arr) {
     // 012
    console.log(v);
}


// for of : Array, String, Map, Set 등의 객체 이용

let list = ['x', 'y', 'z'];
for (let val of list) {
    // xyz
    console.log(val); 
}

let str = 'yewon';
for (let s of str) {
    console.log(s);
}