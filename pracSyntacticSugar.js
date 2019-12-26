// 직역 : 문법적인 설탕
// 직관적이진 않지만 코드의 양을 줄여준다
// ex) class, 객체 분해, spread

console.log('====보호 연산과 기본값 연산=====');
// 논리 연산자
// || - false 성질을 띄는 것 (undefined, null, 0, '', false, NaN, document.all)이면 pass
// 주로 default 값을 설정할 때 많이 쓰인다

let a = '';
let b = null;
let c = 'it is c';
let d = 5;
console.log(a || b || 'a는 false의 성질을 띄고 있습니다'); // 처음으로 true 성질을 띤 값
let notFalse = a || b || c || d;
console.log(notFalse);

// && - true 성질을 띄는 것
// 주로 필수 조건을 의미할 때 쓰인다
let notTrue = c && d && b && a;
console.log(notTrue); // null - 처음으로 false 성질을 띤 값
// a, b, c, d 순서: 안 나오는 것처럼 보이지만 공백이다

// 현재 시간을 밀리초단위 숫자로 변환 => 빠른 시간 계산 때 유용
// 세 방법 모두 같은 값을 나타낸다
console.log(+new Date());
console.log(new Date().valueOf());
console.log(new Date().getTime());

// true, false 성질을 띄는 것을 각각 명확한 Boolean 값으로 변환한다
let aBool = '';
let bBool = [];
let cBool = 'it is what?';
console.log(!!aBool); // false
console.log(!!bBool); // true
console.log(!!cBool); // true