// Global Context
console.log(this); // Window

// Function
function outIs() {
  console.log(this); // Window

  function inIs() {
    console.log(this); // Window
  }

  inIs();
}

outIs();

// Method
const chicken = {
  name: 'BHC',
  hello: function() {
    console.log(`Hello! It's ${this.name}`);
  }
};
chicken.hello();

function bye() {
  console.log(`Bye! It's ${this.name}`);
}
chicken.bye = bye;
chicken.bye();

const funBye = chicken.bye;
funBye();

const someOne = {
  name: 'unknown',
  bye: funBye
};
someOne.bye(); // working well

someOne.bye = chicken.hello;
someOne.bye(); // working well

// Method Internal Function
const dog = {
  name: 'Haru',
  bark: function() {
    function getName() {
      return this.name;
    }
    console.log(`Hello! I'm ${getName()}`); // undefined, 내부 함수에서 this는 Window 객체를 가리키므로
    console.log(`Hello! I'm ${this.name}`);
  }
};
dog.bark();

// callback
const studentArr = ['woni', 'jini', 'giga'];
studentArr.map(() => {
  console.log(this); // Window
});

// constructor
class Student {
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
  }
}

const woni = new Student('Woni', 6633);
console.log(woni.name); // this가 클래스를 가리키고 있어서 이름이 정상적으로 출력된다

// Arrow Function
// 단순히 함수를 축약해서 사용하는 것 뿐만 아니라,
// this는 정의된 위치의 컨텍스트를 참조하게 된다

const testObj = {
  a: this, // Window
  printA: function() {
    console.log('=====');
    console.log(this.a); // Window
    console.log(JSON.stringify(this.a));
  },
  b: function() {
    console.log('=====');
    console.log(this); // Method 이므로 객체
    console.log(JSON.stringify(this));
  },
  c: () => {
    console.log('=====');
    console.log(this); // Window - 화살표 함수가 정의된 객체의 this를 바인딩
    console.log(JSON.stringify(this));
  }
}

testObj.printA();
testObj.b();
testObj.c();
