// Reflect 객체 안에 있는 메소드

const fruitObj = {name: 'grape', level: 3};
const fruitArr = [
    {name: 'grape', level: 3},
    {name: 'lemon', level: 1},
    {name: 'apple', level: 5},
    {name: 'melon', level: 7},
    {name: 'watermelon', level: 6},
    {name: 'orange', level: 3}
];

console.log(Reflect.get(fruitObj, 'name'));
console.log(Reflect.get(fruitObj, 'level'));

console.log(Reflect.get(fruitArr, 0));

Reflect.set(fruitObj, 'level', {'min': 2, 'max': 6});
console.log(JSON.stringify(fruitObj));

const multipleSelf = (a) => a * a;
console.log(Reflect.apply(multipleSelf, null, [5]));
// 두 번째 인자는 함수의 this를 바꾸고 싶을 때 사용함

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}
const woni = Reflect.construct(Person, ['woni', '!']);
console.log(woni);

console.log(Reflect.has(fruitObj, 'value')); // false

console.log(Reflect.deleteProperty(fruitObj, 'level')); // true
console.log(fruitObj);

// 속성 설정
Reflect.defineProperty(fruitObj, 'name', {
    // configurable
    // enumerable
    // writable
    enumerable: false
});

// 속성 설정 가져옴
console.log(Reflect.getOwnPropertyDescriptor(fruitObj, 'name'));

const author = {
    bookTitle: ['Guns, Germs, and Steel'],
    write() { console.log('Write the book'); },
    read() { console.log('Read the book'); }
};

Reflect.setPrototypeOf(woni, author); 
// woni의 prototype이 author 가 됨

console.log(Reflect.getPrototypeOf(woni));
// {bookTitle: Array(1), write: , read: }

Reflect.preventExtensions(fruitObj); // true
console.log(Reflect.isExtensible(fruitObj)); // false

console.log(Reflect.ownKeys(fruitObj));