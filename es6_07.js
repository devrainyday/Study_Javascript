// 계산된 속성명(Computed Property Name)
// [] 대괄호 이용 => 객체의 속성을 동적으로 선언
// 특정 변수에 따라 달라지는 객체의 속성명이 필요할 때 유용

let prop1 = 'first_name';
let prop2 = 'last_name';

let first_name = 'Yewon';
let last_name = 'Kim';

let user = {
    [`user_${prop1}`] : first_name,
    [`user_${prop2}`] : last_name
}

console.log(user);