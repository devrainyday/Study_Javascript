# [자바스크립트 스코프와 클로저](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)

## 스코프 (Scope)
자바스크립트에서 스코프란 어떤 변수들에 접근할 수 있는지 정의한다. **전역 스코프(Global Scope)와 지역 스코프(Local Scope)** 가 있다.

지역 스코프는 **함수 스코프와 블록 스코프**로 나뉜다. 

함수 스코프를 나누는 기준은 **함수**, 블록 스코프를 나누는 기준은 **괄호**(`{}`)다.

함수를 선언할 때는 중괄호를 사용해야 하므로 블록 스코프는 함수 스코프의 서브셋(subset)이다(화살표 함수`arrow function`를 사용해서 암시적`implicit`인 반환을 하는 게 아니라면).

### 함수 호이스팅(Hoisting)과 스코프(Scope)
함수가 함수 선언식(function declaration)으로 선언되면, 현재 스코프의 최상단으로 호이스팅(hoist)된다.

반면 함수가 함수 표현식(function expression)으로 선언되면, 함수는 현재 스코프의 최상단으로 호이스팅되지 않는다.

```javascript
sayHello() // Error, sayHello is not defined
const sayHello = function () {
  console.log('a');
}
```

이렇게 두 방식의 행동이 다르기 때문에, 함수 호이스팅은 혼란스러울 수 있으므로 사용하면 안 됩니다. 언제나, 함수를 호출하기 전에 선언해놓아야 합니다.

### 함수는 서로의 스코프에 접근할 수 없다
함수들이 각각 선언되었을 때, 서로의 스코프에 접근할 수 없다. 심지어 A 함수가 B 함수에서 사용돼도 접근 불가하다.

```javascript
function first () {
  const firstFunctionVariable = 'I’m part of first'
}
function second () {
  first()
  console.log(firstFunctionVariable) // Error, firstFunctionVariable is not defined => 접근할 수 없다.
}
```

### 네스팅된 스코프(Nested scopes)
함수가 다른 함수 내부에서 정의되었다면, 내부 함수는 외부 함수의 변수에 접근할 수 있다. 이런 행동이 렉시컬 스코핑(Lexical Scoping)이다. 하지만 외부 함수는 내부 함수의 변수에 접근할 수 없다. 내부에서 외부만 볼 수 있는 것이다.

```javascript
function outer() {
  const o = 'outer';
  function inner() {
    const i = 'inner';
    console.log(o); // outer
  }
  console.log(i) // Error, i is not defined
}
```

## 클로저 (Closure)
**함수 내부에 함수를 작성**할 때마다 클로저가 생성된다. **내부에 작성된 함수**가 바로 클로저다. 클로저는 차후 **외부 함수의 변수를 사용**할 수 있기 때문에 **대개 반환하여 사용**한다.

```javascript
function outerFunction () {
  const outer = 'o';
  function innerFunction() {
    console.log(outer);
  }
  return innerFunction;
}
outerFunction()() // o
```

함수를 선언하자마자 반환되도록 코드를 조금 더 짧게 수정할 수 있다.

```javascript
function outerFunction () {
  const outer = 'o';
  
  return function innerFunction() {
    console.log(outer);
  }
}
outerFunction()() // o
```

클로저의 역할(외부 함수의 변수에 접근할 수 있기 때문)
- 사이드 이펙트(Side Effects) 제어
- Private 변수 생성

## 클로저로 사이드 이펙트 제어하기

먼저 맛을 결정하고, 내부 클로저 함수를 호출한다. 

```javascript
function prepareCake (flavor) {
  return function () {
    setTimeout(_ => console.log('Made a ${flavor} cake!', 1000))
  }
}
const makeCakeLater = prepareCake(‘banana’)
makeCakeLater()
```

## Private 변수와 클로저
```javascript
function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode);
    }
  }
}
const theSecret = secret('A');
theSecret.saySecretCode(); // A
```

해당 예제에서 `saySecretCode`는 유일하게 `secret` 함수 바깥에서 `secretCode`를 노출하는 함수(클로저)다. 따라서, 이런 함수를 **특권 함수(Privileged Function)**라고 부르기도 한다.

# [Hoisting, Scope, Closure](http://junil-hwang.com/blog/hoistring-scope-closure/)

ES5 Spec에서 발생하는 이슈, ES6에서 해결하는 방법

## Hosting (호이스팅)
어떤 시점에서 변수를 선언하든, 이것을 처리하는 과정에서 최상단으로 **끌어올린다**. 비정상적으로 에러가 발생하지 않는다. `let`, `const`를 사용하여 선언하지 않은 변수를 사용했을 경우 Hoisting이 발생하지 않도록 한다. 정상적으로 에러가 발생한다.

또한 `var`으로 정의한 변수는 window 객체에 할당되지만, `let`, `const`는 window 객체에 할당되지 않는다.

## Scope (스코프)
변수를 사용할 수 있는 **범위**. `var`로 선언되어 for문에서 사용된 변수는 사용 범위가 끝나고도 살아있다. 함수에서 `var`로 선언되어 사용된 변수는 함수 내부에서 출력했을 때 `undefined`다.

ES5 Spec에서의 Scope는 이런 식으로 동작했다. 하지만 ES6부터는 Scope를 Block 단위로 제한한다. `let`, `const`로 변수를 선언하는 것이다. ES5에서 사용하는 Scope보다 훨씬 명확하고 간단한 코드를 작성할 수 있다.

## Closure (클로저)
```javascript
function outer() {
  let innner = 0;
  return function() {
    console.log(++inner);
  }
}

let c = outer();
c();
c();
c();
```

위 코드처럼 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.

장점
- 함수를 호출할 때마다 기존에 생성했던 값을 유지할 수 있다. 즉, 변수를 재활용할 수 있다.
- 참조하고 있는 변수를 외부에 노출시키지 않는다. 코드의 안전성을 보장한다.

단점
- 클로저에 할당된 변수는 프로그램이 종료될 때까지 메모리에 남아있다. 메모리가 낭비될 수 있다.