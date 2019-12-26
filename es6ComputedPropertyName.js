// 계산된 속성명(Computed Property Name)
// [] 대괄호 이용 => 객체의 속성을 동적으로 선언
// 특정 변수에 따라 달라지는 객체의 속성명이 필요할 때 유용

let prop1 = 'FirstName';
let prop2 = 'LastName';

let firstName = 'Yewon';
let last_name = 'Kim';

let user = {
    [`user${prop1}`] : 'Yewon',
    [`user${prop2}`] : 'Kim',
}

let dog = {
  ['dog' + prop1] : 'Nabi',
  ['dog' + prop2] : 'Lim',
}

console.log(user);
console.log(dog);