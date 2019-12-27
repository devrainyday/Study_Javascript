// 배열 기호, Array 이용
const firstWay = [[], []];
firstWay[0][0] = 1;
firstWay[0][1] = 2;
firstWay[1][0] = 3;
firstWay[1][1] = 4;
firstWay.push([5, 6]);
console.log(JSON.stringify(firstWay));

const secondWay = new Array(new Array(), new Array());
secondWay[0][0] = 5;
secondWay[0][1] = 6;
secondWay[1][0] = 7;
secondWay[1][1] = 8;
secondWay[0].push(9);
secondWay[1].push(10);
console.log(JSON.stringify(secondWay));

// Array.map 이용
const thirdWay = new Array(2).fill(null).map(() => new Array());
for (let i = 0; i < thirdWay.length; i++) {
  thirdWay[i].push((i + 1) * 1);
  thirdWay[i].push((i + 1) * 2);
  thirdWay[i].push((i + 1) * 3);
}
console.log(JSON.stringify(thirdWay));

// Array.from (ES6 문법) 이용
const fourthWay = Array.from(new Array(5), () => new Array());
console.log(JSON.stringify(fourthWay));

// Array.from 이란
// 배열 혹은 유사한 배열을 배열로 변환해주는 역할
// arg1: 유사한 배열 또는 배열, arg2: map 함수와 동일하게, 배열 각 요소에 적용할 함수

console.log(Array.from('yewon'));
console.log(Array.from([6, 3], x => x * x));

// for, forEach 이용
const fifthWay = new Array();
for (let i = 0; i < 10; i++) {
  fifthWay.push(new Array(1, 2, 3));
}
console.log(fifthWay);
