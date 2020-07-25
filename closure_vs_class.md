# Closure vs Class

> 클로저를 이용하면 참조하고 있는 변수를 외부에 노출시키지 않을 수 있다. 
이것이 클로저를 이용하는 목적인 것처럼 언급되어서 
ES6에 추가된 Class로 클로저를 대체(`private` 프로퍼티)하면 되지 않을까?
라는 생각에 조금 찾아봤다.

## Closures vs. classes for encapsulation? [Link](https://stackoverflow.com/questions/8729714/closures-vs-classes-for-encapsulation)

> 질문자는 JS를 처음 접했고 클로저가 클래스보다 캡슐화를 처리하기 간단하고 편리해 보였다고 한다. 
그래서 아래 코드를 보여주며 '클로저 대신 클래스를 사용할 필요가 있나? 이 코드를 보면 클래스보다 직관적인 것 같은데'라는 요지의 질문을 던진다.

```javascript
function addProperty(o) {
   var value;

   o["get"] = function()  { return value; }
   o["set"] = function(v) { value = v; }
}

// create two independent objects which are instances of pseudo-class 'addProperty',
// which each have their own version of a set of local fields, and methods that
// operate on those fields:
var a = {};
addProperty(a);
var b = {};
addProperty(b);
```

> 그리고 나중에 어느정도 질문을 추가한 듯 하다. 
추가한 내용의 요지는 '내게 Class는 타입 개념의 확장이다. 
그래서 private 상태를 앱에 도입하는 가장 좋은 방법은 무엇인가?'

> 여기서 말하고 있는 JS Class는 아마 내가 아는, `class`키워드로 사용하는 그 문법이 아닌 것 같다. 
질문이 8년 3개월 전 작성되었기 때문에...

답변은 이렇다.

클로저를 피하는 이유는 오버헤드때문이다. `get`, `set` 함수는 프로퍼티보다 약 20배 느리다. 
또한 인스턴수 수와 함께 `O(n)` 메모리 오버 헤드가 크다.

```javascript
var AddProperty = {
  constructor: function (v) { this._value = v; return this; },
  get: function () { return this._value; },
  set: function (v) { this._value = v; }
};

var a = Object.create(AddProperty).constructor(1);
var b = Object.create(AddProperty).constructor(2);
```

그리고 위의 코드가 작동하지 않는다고 했는데, 이 때 문제는 개인 상태가 아니라 전역 상태를 사용한다는 것이다.
따라서 쉽게 해결하려면 탭이 필요할때마다 정의해둔 탭의 `constructor`를 호출하여 새 탭을 만들면 된다.

```javascript
var Tab = {
  constructor: function (...) {
    /* init state */
  },
  doTabStuff: function () { /* some method */ },
  ...
  
var tab = Object.create(Tab).constructor(...)
}
```

> 이걸 [모듈 패턴](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth)이라는 방법으로 해결할 수 있는 것 같다. 하지만 내가 원한 답변은 아닌 것 같아서 따로 읽진 않았다.


## Classes vs. Closures - Performance [Link](https://medium.com/engineering-livestream/javascript-classes-vs-closures-cf6d6c1473f)

> 이 글은 자바스크립트 클래스와 클로저 패턴(주로 팩토리 클래스 패턴) 사이의 트레이드 오프를 
탐색한다. 이 패턴은 서로 대체할 수 있다.

1. The closure pattern is more lintable than the class pattern.
2. The class pattern tends to perform better than the closure pattern.
3. The class pattern is more monkey-patchable than the closure pattern.

이 기사의 저자는 많은 JS 프로젝트에서 사용되는 프로토 타입 기반 패턴을 잊어 버린 것 같습니다.

```javascript
function Foo() {
    this.data = 42;
}
Foo.prototype.foo = function () {
    console.log(this.data);
}
``` 
마지막으로 확인했을 때, 프로토 타입과 클래스는 성능면에서 상당히 비슷했지만, 
이것이 "클래스"라는 새로운 반짝이는 것이 있기 때문에 
더 이상 JS에서 프로토 타입을 사용할 수 없다는 것을 의미하지는 않습니다. 
BTW는 심지어 2012 년의 기사를 인용했습니다. 재미있게 Grokking V8 클로저 ")는 ES6 클래스가 아닌 프로토 타입에 관한 것입니다! ES6 클래스가 프로토 타입을 사용하는 경우에도 마찬가지입니다.

따라서 이것은 클래스 vs 클로저 일뿐 아니라 프로토 타입이기도합니다. 그리고 vs. Object.create 
(느리지만 JS에서 객체를 만드는 방법 중 하나입니다).

---

```javascript
class Friend () {
    constructor (greeting) {
        this.greeting = greeting
    }
    greet () {
        console.log(this.greeting)
    }
}
let englishman = new Friend('hullo')
let cowboy     = new Friend('howdy')
englishman.greet()
cowboy.greet()
```

```javascript
function Friend (greeting) {
    return { greeting: greeting }
}
function greet () {
    console.log(this.greeting)
}
let englishman = Friend('hullo')
let cowboy     = Friend('howdy')
this = englishman; greet()
this = cowboy; greet()
```

```javascript
// 클로저 사용 스니펫
function Friend (greeting) {
    function greet () {
        console.log(greeting)
    }
    return { greet: greet }
}
let englishman = Friend('hullo')
let cowboy     = Friend('howdy')
englishman.greet()
cowboy.greet()


let englishman = { 
    greet: function () {
        console.log('hullo')
    }
}
let cowboy = {
    greet: function () {
        console.log('howdy')
    }
}
englishman.greet()
cowboy.greet()
```


