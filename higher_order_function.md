# Higher-Order Function (고차함수) [[Link](https://dev-momo.tistory.com/entry/HigherOrder-Function-%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80?category=536788)]
Functional Programming을 할 때 많이 사용하며, HOF를 사용하면 보다 유연하고 반복을 줄일 수 있는 코드를 작성할 수 있다.

### 정의
- 하나 이상의 함수를 인자로 받는다.
- 함수를 결과로 반환한다.
-> 함수를 다루는 함수

```javascript
const double = function(func, value) {
  return func(func(v));
};

const plusOne = function(v) {
  return v + 1;
}

console.log(double(plusOne, 1)); // 3

const square = function(v) {
  return v * v;
}

console.log(double(square, 2)); // 16

// 인자로 넘기는 함수에 따라 개발자 뜻대로 비즈니스 로직을 제어할 수 있다.
```


### Abstracting Patterns of Control

HOF는 단순히 함수의 값을 전달하는 기존 관념을 넘어서 함수의 흐름을 제어하는 파라미터로써 수용한다. 
이를 **제어 패턴 추상화**라고 부른다. 
HOF는 인자로 넘기는 함수 안에 계산의 세부사항을 캡슐화하여 추상적으로 제공할 수 있도록 한다.

```javascript
// 그때마다 for문을 짜는 것보다 가독성이 좋고, 수정에 용이하며, 실수를 줄일 수 있다.

function doFor(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

doFor(100);
```

위의 코드에서 요구사항이 *"0부터 99까지 배열에 담아라"* 라고 바뀌었다. 

```javascript
// 변경이 있을 만한 부분(for문 내의 로직)을 추상화하여 함수로 제공한다.

function doFor(n, func) {
  for (let i = 0; i < n; i++) {
    func(i);
  }
}

doFor(100, console.log);

const list = [];
doFor(100, (i) => { list.push(i); })
```

수행해야 할 비즈니스 로직을 `func(i)`으로 추상화했다. 또, `func`를 인자로 받아서 수행함으로써 
해당 로직을 캡슐화하여 제공한다. 이 과정을 통해 `doFor() 함수`의 비즈니스 로직은 추상화되어 결합도가 낮아진다.
처음보다 다양한 요구사항에 대응할 수 있고, 로직을 캡슐화함으로써 재사용성을 높일 수 있다. 
물론 **반복되는 횟수(Pattern of Control)도 추상화(Abstract)**하여 더 유연한 구조를 만들 수 있다.

### 함수를 반환하는 함수

> 위에서 살펴본 HOF의 조건은 '하나 이상의 함수를 인자로 받는다' 이며, 
나머지 조건은 '함수를 결과로 반환한다.'

```javascript
function fillArray(n, func) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(func(i));
  }
  return array;
}

// console.log(fillArray(7, (i) => `item${i}`)); // 두 번째 인자는 함수

function makeItem(i) {
  return (i) => `item${i}`;
}

console.log(fillArray(7, makeItem));
```

`makeItem()` 함수는 함수를 반환하는 함수다. 이 HOF 또한 i를 인자로 받는 것처럼, 다양한 형태로 응용할 수 있다. 
또, 함수를 리턴함으로써 `item${i}`는 클로저(Closure)로 메모리에 계속 남아있게 되므로 외부에서 사용할 수 있다.


### Use Case

> Javascript의 `Filter, Map, Reduce` 함수가 바로 HOF다. 함수형 라이브러리인 Lodash도 많은 함수를 HOF로 구현하였다. 
다른 라이브러리를 찾아보면 특히 React에서 이 HOF 개념을 적극적으로 활용하고 있다. 
나아가 이 HOF 개념을 함수뿐만이 아니라 컴포넌트의 영역까지 확장시킨것이 바로 **HOC(Higher-Order-Component)** 다.

> HOF는 람다 대수(Lambda Calculus)와 First-Class Citizens, Pure Function, Immutability 같은 Functional Programming에 
대한 개념을 이해해야 자유자재로 사용할 수 있다.
