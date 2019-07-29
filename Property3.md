Property
=====
  
> [번역] 자바스크립트에서 변수와 프로퍼티의 차이 (2011)
  
### The VariableObject
자바스크립트에서 변수가 무엇인지를 이해하기 위해서는 VariableObject에 대해 살펴봐야 한다.  
자바스크립트에서 코드는 전역이나 함수 컨텍스트 내에서 실행될 수 있다.  
전역 컨텍스트는 오직 하나만 존재한다.  
함수 컨텍스트는 함수 호출 시마다 존재한다.  
각 실행 컨텍스트는 자신과 연관된 VariableObject를 가진다.  
주어진 컨텍스트에서 생성된 변수(와 함수)들은 컨텍스트의 VariableObject의 프로퍼티로 존재한다.  
  
global 컨텍스트의 VariableObject는 global 객체다.  
브라우저에서 global 객체는 window다.  
  
```javascript
var a = "hello"; // window is the global VariableObject
window.a; // hello
```
  
함수 컨텍스트 같은 경우는 좀 더 복잡하다. 각 함수는 자신의 VariableObject를 가지고 있지만,  
Rhino를 사용하지 않는다면 보통은 접근할 수 없다.  
각각의 함수가 이 객체를 가지고 있기 때문에 함수 컨텍스트 안에서 변수를 생성한다면 프로퍼티로서 참조할 수 없다.  

```javascript
function foo() {
    var bar = "Yewon";
    window.bar; // undefined (VariableObject is not window)
}
```
  
### 프로퍼티란?
ECMA5 : 객체의 일부로 이름과 값 사이 연결을 의미. 프로퍼티란 객체를 구성하는 블록들이다.
  
### 변수란?
- 변수는 실행 컨텍스트 내에 존재하는 이름과 값 사이의 연결을 의미  
- 프로퍼티는 객체에 포함되어 있고, 변수는 컨텍스트에 포함되어 있다.  
  (해당 컨텍스트의 VariableObject의 프로퍼티에 변수들이 포함되어 있다)
  ```javascript
  var bar = 2; // global context
  function foo = function() {
      var a; // function context
      f = 4; // global context
  }
  
  ```
  
### 변수와 프로퍼티의 교체
원래는 불가하지만, 다음과 같은 방식에서 가능  
```javascript
//define as a property, access as a variable
window.foo = "a";
foo; //a

//define as a variable, access as a property
var bar = 54;
window.bar; //54
```
이것은 global 객체(프로퍼티의 부모)와 전역 VariableObject(변수의 부모)가 동일하기 때문에 일어난다.  
당연히 함수 컨텍스트에서 프로퍼티와 변수의 상호 교환은 오동작할 것.  
  
### 왜 중요한가?
- hoisting
  변수나 함수 선언으로 정의된 객체는 실제 코드의 위치에 상관없이 자신의 실행 scope의 시작 부분에서 생성된다.  
  반면에 프로퍼티 정의는 프로그램 제어가 statement에 도달할 때 생성된다.  
  (즉, hoisting 되지 않는다)
  
  ```javascript
  alert(a); // undefined(no error)
  alert(b); // ReferenceError : b is not defined
  var a = 24;
  window.b = 36;
  ```
  - 변수 a는 hosted지만, 그것의 값은 아니다.  
  (Function Declaration의 hosting과는 별개)
  - window.b라는 프로퍼티 문법으로 간단히 b에 접근함으로써 ReferenceError를 피할 수 있다.  
  객체 한정자 없이 b에 접근할 때, 자바스크립트는 우리가 변수를 참조하고 있다고 가정하고 VariableObject를 체크한다.  
  이 때 식별자가 존재하지 않으면 ReferenceError.  
  반대로 단순한 프로퍼티 접근자는 부모 객체 상에서의 해시 룩업 결과를 반환할 것이다. (undefined)  
  
- attribute initialization
  모든 새로운 프로퍼티는 디폴트로 **프로퍼티 디스크립터** 를 가진다.  
  그것은 몇몇 프로퍼티 속성을 정의한다. ([[value]]는 가장 명확하다)  
  ECMA3 내부 사용 목적의 속성 : {DontDelete}, {DontEnum}, {ReadOnly}
  ECMA5 : [[Writable]], [[Enumerable]], [[Configurable]] 으로 변경됨. 외부수정 가능
  변수의 [[DontDelete]]는 true, 프로퍼티의 [[DontDelete]]는 false
  
  ```javascript
  var oneTimeInit = function() {
      // do stuff
  }
  delete oneTimeInit; // false (means it did not happen)
  
  window.oneTimeInit = function() {
      // do stuff
  }
  delete oneTimeInit; //true
  ```

- illegal names
  subscript notation(대괄호)을 이용할 경우, 잘못된 식별자를 통해서도 프로퍼티에 접근할 수 있지만 변수의 경우에는 에러가 발생한다.
  
함수의 arguments 객체와 각각 인자들은 ActivationObject(함수의 VariableObject에 추가됨)  
함수 선언들은 이 객체의 프로퍼티들이고, 따라서 변수로 취급된다(변수들은 VariableObject에 프로퍼티로 관리된다)

### property define
- dot notation  
`window.foo = 'hello';`  
- subscript notation  
`window[foo] = 'hello';`  
- forgetting to use the var keyword
```javascript
var bar = function() {
    foo = "hello";
}
```  
- and rest(2)
  
