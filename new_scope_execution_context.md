https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e

https://multifrontgarden.tistory.com/177?category=471243
https://webclub.tistory.com/8?category=501058
https://webclub.tistory.com/387?category=501058


Scope
===

scope: 범위

### 전역 변수와 지역 변수

자바스크립트에서는 주로 변수를 사용해 데이터를 저장하는데, 변수를 만드는 것은 문제가 되지 않지만 전역변수를 만드는 것은 최대한 지양해야 한다.

전역변수란 자바스크립트에서 제일 바깥 범위(함수 안아 아닌)에 변수를 만드는 것으로, window 객체에 변수를 만드는 것이다.

### Scope
지역변수는 전역변수에 영향을 끼칠 수 없다. 바로 함수 스코프 때문이다.

범위란 뜻 그대로, 함수 안에서 선언된 변수는 해당 함수 안에서만 사용할 수 있다.

자바스크립트는 변수의 범위를 호출된 함수의 지역 스코프부터 전역 변수들이 있는 전역 스코프까지 점차 넓혀가며 찾는다.

만약 `x`라는 변수가 지역(함수)에도 있고, 전역에도 있다면 `x`의 값을 변경할 때 그 대상은 지역변수가 된다.

### Scope Chain
내부 함수에서는 외부 함수에 접근 가능하지만 외부 함수에서는 내부 함수의 변수에 접근할 수 없다.

```javascript
let name = 'woni';
function outer() {
  console.log('outer' + name);
  function inner() {
    console.log('inner' + name);
  }
  inner();
}
outer();
```

위 코드에서 inner 함수는 name 변수를 찾기 위해 자신의 스코프 => outer 스코프 => 전역 스코프 순으로 탐색한다. 출력되는 `name`은 전역 스코프에서 찾은 값이다. 만약 전역 스코프에도 없다면 변수를 찾지 못했다는 에러가 발생한다. 이렇게 계속 범위를 넓히면서 찾는 관계를 스코프 체인이라고 한다.

### Lexical Scoping

**스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다. 정적 스코프라고도 불린다.**

```javascript
let name = 'a';
function log() {
  console.log(name);
}

function wrapper() {
  let name = 'b';
  log();
}
wrapper();
```

위 코드를 봤을 때, 스코프는 함수를 선언할 때 생기기때문에 `log`함수 내의 `name`은 `wrapper`함수 내의 지역변수가 아니라, 전역변수를 가리킨다. 이런 것을 **Lexical Scoping** 이라고 한다.

함수를 처음 선언하는 순간, 함수 내부의 변수는 자신의 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조하게 된다. 위의 코드에서 `log`함수 내의 `name`변수가 선언 시 가장 가까운 전역변수 `name`을 참조하게 되는 것이다. 그래서 `wrapper`함수 내에서 `log`함수를 호출해도 지역변수가 아니라, 전역변수를 참조하는 것이다.

어떻게 해도 `log`함수가 이미 선언된 후에 전역변수를 가리키는 `name`변수가 다른 것을 가리키게 할 수 없다. 유일한 방법은 아까처럼 전역변수를 다른 값으로 바꾸는 것이다.

전역변수를 만드는 일을 지양해야 하는 이유는 변수가 섞일 수 있기 때문이다. 어쩌다가 같은 변수 이름을 사용하면 이전의 변수를 덮어쓸 수 있다. 간단한 해결 방법은 전역변수를 정의하는 대신 한 번 함수 안에 넣어서 지역변수로 만드는 것이다. 아니면 객체 내의 속성으로 함수를 정의할 수도 있다.

```javascript
let obj = {
  x: 'local',
  y: () => { alert(this.x); }
}
```
위의 코드처럼 정의하면 `obj.x`, `obj.y()` 같이 접근해야 하기 때문에 다른 사람이 작성한 코드와 섞일 염려가 없다. obj를 통째로 덮어쓰지 않는다면 말이다. 전역 변수를 하나로 줄여서 변수가 겹칠 우려를 줄인다. 이것이 **네임스페이스**다. obj라는 고유 네임스페이스를 만들어서 겹칠 우려를 줄이는 것이다. 대부분의 라이브러리가 네임스페이스를 사용하고 있다고 한다.

- naver는 jindo
- facebook은 FB
- jquery는 jQuery(또는 $)

네임스페이스의 단점은 누군가 고의적으로 네임스페이스 내의 속성들을 바꿔치기할 수 있다는 것이다. 그것을 방지하기 위해 아래와 같은 코드를 작성한다.

```javascript
let another = function () {
  let x = 'local';
  function y() {
    alert(x);
  }
  return { y };
}
let newScope = another();
```
이 코드는 `another()`로 `y` 함수를 리턴받아서 `newScope`에 저장한다. 그럼 `newScope`라는 네임스페이스를 통해 y에 접근할 수 있다. 하지만 x에는 접근할 수 없다. `return`된 변수는 공개 변수, 다른 것은 비공개 변수다. 

위의 코드를 IIFE(즉시 실행 함수 표현식)을 이용하여 아래처럼 간략하게 바꿀 수 있다.
```javascript
let newScope = (function () {
  let x = 'local';
  return {
    y: function() {
      alert(x);
    },
  }
})();
```

Execution Context
===

context: 문맥
Execution Context는? 쉽게 말하면 **코드의 실행 환경**이다.

처음 코드를 (브라우저가 스크립트를 로딩해서)실행하는 순간 모든 것을 포함하는 **전역 컨텍스트**가 생긴다. 전역 컨텍스트는 모든 것을 관리하는 환경이며, 페이지가 종료될 때까지 유지된다.

**전역 컨텍스트** 말고도 **함수 컨텍스트**가 있는데, 함수를 호출할 때마다 함수 컨텍스트가 하나씩 추가된다.

### Context 원칙
1. 전역 컨텍스트 하나가 생성된 후, 함수가 호출될 때마다 컨텍스트가 생긴다.
2. 컨텍스트 생성 시 안에 **변수객체(arguments, variable), Scope Chain, this**가 생성된다.
3. 컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들을 변수 객체 내에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾는다.
4. 함수 실행이 마무리되면 해당 컨텍스트는 사라진다(Closure 제외). 페이지가 종료되면 전역 컨텍스트가 사라진다.

### 전역 컨텍스트
전역 컨텍스트가 생성된 후 두 번째 원칙에 따라 **scope chain, this**가 들어온다. 전역 컨텍스트에는 arguments가 없고, variable은 해당 스코프의 변수(변수, 함수)다.

scope chain(자신과 상위 스코프들의 변수 객체)은 자기 자신인 전역 변수객체다. this는 따로 설정하지 않으면 window이고, `new`를 호출하거나 함수에 다른 this값을 `bind`해서 바꿀 수 있다.

```javascript
globalContext: {
  variableObject: {
    arguments: null,
    variable: ['variable1', 'variable2', 'function1']
  }
  scopeChain: ['globalVariableObject'],
  this: window
}
```
함수는 호이스팅 때문에 선언과 동시에 대입되고, 그 후 variable의 변수에 값이 대입된다.
```javascript
variable: [{ variable1: 'yewon' }, { variable2: 18 }, { function1: Function }]
```

### 함수 컨텍스트
**함수를 호출하는 순간 새로운 컨텍스트가 생성**된다. 만약 함수 이름이 `say`고 지역변수가 `name`이라면 **arguments**는 없고 **variable**은 name이다. **scope chain**은 say 변수객체와 상위 전역변수 객체다. **this**는 따로 설정하지 않았으니 window다.

```javascript
sayContext: {
  variableObject: {
    arguments: null,
    variable: ['name'],
  },
  scopeChain: ['sayVariableObject', 'globalVariableObject'],
  this: window,
}
```
variable의 name에 초기값을 대입하면 `variable: [{ name: 'yejin' }]`이 된다.

이후 say 함수에서 name 변수를 사용할 때에는 say 컨텍스트 안에서 찾으면 된다. variable에서 찾을 수 있다.

만약 say 함수 내에서 사용하는 변수를 찾을 수 없다면 Scope Chain을 따라 상위 변수객체에서 찾는다. 전역 변수객체까지 올라간다.

만약 say 함수 내에서 외부에 정의된 A 함수를 호출한다면, A 함수는 say 함수와 스코프로 연결되어 있지 않다. A함수가 종료되면 A 컨텍스트가 사라지고, say 함수가 종료되고 say 컨텍스트가 사라진다. 마지막으로 전역 컨텍스트도 사라진다.

### Hoisting (호이스팅)
변수를 선언하고 초기화했을 때 선언 부분이 최상단으로 끌어올려지는 현상을 의미한다. 초기화와 대입 부분은 그대로 남아있다. 만약 함수 표현식이 아니라 **함수 선언식이면 식 자체가 통째로 끌어올려진다.**

이때문에 변수 선언 전보다 더 빨리 변수를 사용해도 정상작동한다.

```javascript
console.log(name); // undefined
console.log(sayHi);

function sayHi () {
  console.log('hi hello');
}

const name = 'yewon';
```

위의 코드는 아래의 코드와 같다.

```javascript
function sayHi () {
  console.log('hi hello');
}
let name;
console.log(name);
sayHi()
name = 'yewon';
```

하지만 위의 코드에서 함수 선언식을 함수 표현문으로 변경하면 에러가 발생한다. 

```javascript
sayHi(); // 3
sayHello(); // 5-대입
let sayHi = function () { // 1-선언, 6-대입
  console.log('Hi');
}
function sayHello() { // 2-선언과 동시에 초기화(호이스팅)
  console.log('Hello');
}
```

```javascript
globalContext: {
  variableObject: {
    arguments: null,
    variable: [{ sayHello: Function }, 'sayHi'],
  },
  scopeChain: ['globalVariableObject'],
  this: window,
}
```

전역 컨텍스트 => `sayHello`(함수 선언식) 컨텍스트 생성 후 바로 대입 => `sayHi` 컨텍스트 생성 => `sayHi` 대입 전 호출하여 에러 발생

### Closure (클로저)
**IIFE(Immediately Invoked Function Expression)**가 사실 클로저를 활용한 패턴이다. IIFE가 모두 클로저인 건 아니고, 비공개 변수를 가질 수 있는 환경에 있는 함수가 클로저다. 비공개 변수는 클로저 함수 내부에 생성한 변수가 아니고, 매개변수도 아닌 변수를 의미한다.

```javascript
let newScope = (function () {
  let x = 'local';
  return {
    y: function() {
      alert(x);
    },
  }
})();
```
클로저를 언급할 때에는 **Scope, Context, 비공개 변수와 함수의 관계**를 항상 같이 말해주어야 한다.

```javascript
let makeC = function() {
  let name = 'yewon';
  return function () {
    console.log(name);
  }
}

let closure = makeC();
closure(); // 'yewon'
```

Closure 함수 내에 `console.log(name);` 이 있는데, name은 Closure 함수의 매개변수도 아니고, Closure 함수 내부에서 생성한 변수도 아니다. 바로 이런 것이 비공개 변수다. `return`된 함수는 `name` 변수가 있는 스코프에 대해 클로저라고 부를 수 있다.

전역 컨텍스트 생성 => `makeC` 함수 호출 시 `makeC` 컨텍스트 생성

```javascript
"global Context": {
  variableObject: {
    arguments: null,
    variable: [ {makeC: Function}, 'closure' ],
  },
  scopeChain: ['globalVariableObject'],
  this: window
}

"makeC Context": {
  variableObject: {
    arguments: null,
    variable: [ {makeC: Function}, 'closure' ],
  },
  scopeChain: ['makeC VariableObject', 'globalVariableObject'],
  this: window
}
```

`closure = makeC()` 할 때 함수가 반환되는데, 그 함수가 선언된 Scope Chain은 Lexical Scoping을 따라 `['makeC 변수객체', 'Global 변수객체']`를 포함한다. 따라서 다음 컨텍스트가 Closure을 호출한다.

```javascript
"closure Context": {
  variableObject: {
    arguments: null,
    variable: null,
  },
  scopeChain: ['closure 변수객체', 'makeC 변수객체', '전역 변수객체'],
  this: window
}
```

따라서 closure 함수에서 Scope Chain을 통해 `makeC`의 `name` 변수에 접근할 수 있다. 

```javascript
let counter = function() {
  let count = 0;
  function changeCnt(number) {
    count += number;
  }
  return {
    increase: function() {
      changeCnt(1);
    },
    decrease: function() {
      changeCnt(-1);
    },
    show: function() {
      alert(count);
    }
  }
}

let counterClosure = counter();
counterClosure.increase();
counterClosure.show(); // 1
counterClosure.decrease();
counterClosure.show(); //0
```

`counter` 함수를 호출할 때, `counterClosure` 컨텍스트에 `['counterClosure', 'counter']` Scope Chain이 생성된다. 그럼 `counterClosure`에서 계속 `count`에 접근할 수 있다. 반환되는 함수들은 count 변수, changeCount 함수 또는 그것들을 포함하고 있는 스코프에 대한 클로저라고 부를 수 있다.

이런 방식으로 비공개 변수를 만들어 활용할 수 있고, 자바스크립트에서 값을 안전하게 통제하기 위해, 사용자를 안전하게 통제하기 위한 기본 방법이 바로 클로저다. 하지만 클로저를 잘못 사용했을 때 성능 문제와 메모리 문제가 발생할 수 있다. Closure의 비공개 변수는 자바스크립트에서 언제 메모리 관리 할지가 애매모호하기 때문에 메모리 낭비가 발생할 수 있기 때문이다. 또한 Scope Chain을 거슬러 올라가기 때문에 조금 느리다.

- for문으로 Event Listener 연결 => Closure 사용해야 함
  ```javascript
  for (var i = 0; i < 5; i++) {
    $('#target' + i).on('click', function() {
      alert(i);
    });
  }
  ```
  이 코드에서 `#target0`부터 `#target4`인 이벤트리스너는 연결됐지만, 클릭 시 alert되는 값은 모두 5다. 컨텍스트를 보면 Lexical Scoping에 따라 함수는 선언할 때 스코프가 생성된다. 즉, 이벤트리스너 안의 i는 외부의 i를 계속 참조하고 있다.

  ```javascript
  for (var i = 0; i < 5; i++) {
    (function(j) {
      $('#target' + j).on('click', function() {
        alert(j);
      });
    })(i);
  }
  ```

  IIFE를 사용하져 클로저를 만들어주면 j값은 i로 고정되므로 해결된다.

Execution Context
===


Hoisting
===

## Vaiable

## Function Definition


Closure
===

```javascript
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(function() {
    console.log(i);
  });
}
```
위 코드에서 원하는 건 0~9이 출력되는 것이지만 결과는 그렇지 않다.

### 1급 객체
자바스크립트에서 함수는 1급 객체(First Class Object) 취급을 받는다. 자바의 메서드는 1급 객체가 될 수 없다. 자바스크립트에서는 이런 특정으로 함수가 함수를 반환할 수 있다.

### 자바스크립트 변수 스코프 (Scope)
자바스크립트에서는 안쪽 함수가 바깥쪽 함수의 값에 접근할 수 있다.

### 커링 함수 (Currying Function)
커링 함수는 함수형 프로그래밍에서 사용하는 용어로, N개의 인자를 요구하는 함수를 1개의 인자를 요구하는 N개의 함수로 변환한 것이다.

미리 일부 인자를 고정시키고 변해야 하는 인자에 대한 로직을 구성하면 재사용성이 높아진다.

### 자바스크립트 클로저 (Closure)
바깥쪽 함수의 변수들은 자유공간이라고 불리는 곳에 갇혀서 가비지 컬렉터(Garbage Collector)에도 수거되지 않고 남아있게 된다.

> 함수 내부를 실행될 때 정의되고, 파싱하게 된다. 즉 반복문 내에서는 그냥 함수라는 것만 알고 있고 그 내용은 호출될 때 파싱된다. 함수가 선언될 때에는 i에 대한 참조만 갖게 된다.

그래서 아래의 예제에서 호출될 때 참조로 갖고있던 i값을 가져오게 되는데, 이때 이미 반복문이 종료되었으므로 당연히 최종값인 10을 가져오게 된다. 이 코드에 즉시실행함수를 추가하여 반복문이 돌때마다 함수가 실행되도록 하면 i값을 고정할 수 있다.
```javascript
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(function() {
    console.log(i);
  });
}
```

```javascript
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(function() {
    return function() { console.log(i); }
  });
}
```

하지만 위의 코드는 반복문을 돌면서 함수를 실행해버리니 함수로 배열을 만들자는 의도에 어긋난다.

### private 변수
```javascript
let Constructor = function(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function() {
    return this.name;
  }

  this.setName = function(name) {
    this.name = name;
  }
}
```
위의 코드처럼 생성자 코드를 작성할 수 있지만, 변수에 접근하지 못하게 하려는 목적에 맞지 않게 동작해도 딱히 제재가 없다. 이 비공개(private) 변수를 구현하기 위해 클로저를 이용한다. 클로저를 이용한 벼누는 자유 공간에 갇혀서 외부에서 참조할 수 없기 때문이다. 아래의 코드에서 name, age는 엄밀히 따지면 필드가 아니다.
```javascript
let constructor = function(name, age) {
  let name = name;
  let age = age;

  this.getName = function() {
    return name;
  }

  this.setName = function(newName) {
    name = newName;
  }
}
```

---

## Closure
어떤 내부함수를 감사는 외부함수가 실행되고, 종료되었다 하더라도 내부함수에서 외부함수의 변수(단, 해당 변수의 최종값)에 접근할 수 있는 방법. 즉, 다른 함수의 스코프에 있는 변수의 최종값에 접근 가능한 함수를 말한다.

지역변수는 함수가 실행될 때 생성되고 함수가 종료될 때 사라지기 때문에 자바스크립트가 지역변수를 지우지 않는다고 인식하고 해당 변수를 남겨두는 특성이다.

다음과 같은 것을 클로저라고 한다.
1. 지역변수를 남겨두는 현상
2. 외부, 내부함수가 있을 때 외부함수로 인해 생성된 공간
3. 리턴되는 함수 자체 (함수를 리턴하는 함수를 사용하는 가장 큰 이유 중 하나가 클로저이기 때문)
4. 살아남은 지역변수
5. 내부함수가 외부함수의 변수에 접근 가능한 함수

```javascript
function outer() {
  let a = 10;
  let inner = function() { console.log(a); }
  return inner;
}

let inner = outer();
inner(); // 10
```

클로저 개념으로 자바스크립트에서 비공개 속성 / 메서드를 구현할 수 있다. 객체지향적인 특징인 캡슐화(Encapsulation)와 정보 은닉(Information Hiding).