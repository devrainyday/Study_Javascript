// 하나 이상의 출처 객체(source object)로부터 
// 대상 객체(target object)로의 속성을 복사할 때 사용

let parent = {
    name: 'MiYoung',
    age: 43,
    sex: 'female'
}

let daughter = {
    name: 'Yewon',
    age: 18
}

let Yewon = Object.assign({}, parent, daughter);

// 대상 객체(targer object), 출처 객체(source object)
// => parent, daughter => daughter가 나중에 전달되었으므로 name,age 속성 값을ㅇ 덮어씌움

console.log(Yewon);

let Yejin = Object.assign({}, daughter);
Yejin.name = 'YeJin';
console.log(Yejin); // sex 속성이 없음