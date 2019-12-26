let foo = 'woni';
let bar = 0;

// local에서 실행시 {} (빈 객체),
// Chrome에서 실행시 Window 객체 출력
console.log(this); 
console.dir(this);

console.log({name: 'woni', age: 28}); 
console.dir({name: 'woni', age: 38});

console.info(`${foo}, ${bar}`);

console.warn(`${foo}, ${bar}`); // 노란색 경고 아이콘
console.error(`${foo}, ${bar}`); // 빨간색 아이콘

console.time();
setTimeout(() => { console.timeEnd(); }, 2000);

console.time("woni");
console.timeEnd("woni");

// css 적용 ( %c 는 css 의 약자, 두번째 매게변수에 css 정의
// %d : 숫자
// %o : 객체
// %s : 문자
console.log('%c %s', 'color: green', `${foo}`);
console.log('%c %s', 'color: blue', `${foo}`); 
console.log('%c %o', 'color: yellow', `aaa ${foo}`); 
console.log('%c %o', 'color: yellow', {name: 'woni', age: 28}); // Object {name: "woni", age: 28}
console.log('%c %s', 'color: yellow', {name: 'woni', age: 38}); // Object

// 맞으면 출력
console.assert(true === false, 'false');
console.assert(true === true, ['false', 'second element']);

console.group('firstGroup');
console.log('a');
console.log('b');
console.log('c');
console.log('d');
console.log('e');
console.groupEnd('firstGroup');

console.group('Group A');
console.log('첫번째 메세지');
console.group('Group B');
console.log('하위 메세지 a');
console.log('하위 메세지 b');
console.groupEnd();
console.log('두번째 메세지');
console.groupEnd();

// Console was cleared
// setTimeout(() => {console.clear()}, 1000);