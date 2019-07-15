// ※ 일반 함수와 화살표 함수의 가장 큰 차이점은 this의 바인딩이 서로 다르다는 점
// 호출한 위치에 따라 달라짐

// 1)
const introduction = (name, age, gender) => {
    console.log(`${name}은 ${age}살이다. 그러므로 ${19-age}년 후 어른이 된다고 할 수 있다.`);
    console.log(`또한 이 사람은 ${gender == 'F' ? '여성' : '남성'}이다.`)
}

let name = "Yewon";
let age = 18;
let gender = 'F';

introduction(name, age, gender);

// 2)
const howOld = age => {
    console.log(`나는 ${age}살이라네`);
}

howOld(age);

// 3)
const executeError = () => {
    console.log('not working!');
}

executeError();

// 4)
const sum = (x, y) => x+y;
console.log(sum(5, 10));