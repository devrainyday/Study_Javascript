# 메모이제이션(Memoization)

### 재귀(Recursion)와 메모이제이션(Memoization)

- 재귀: 함수가 자기 자신을 호출하는 것을 의미한다. ex) 팩토리얼(n부터 1까지 모두 곱하는 것)

  ```javascript
  const factorial = function(n) {
    if (n > 0) {
      return n * factorial(n - 1);
    }
    return 1;
  }
  factorial(3); // 6
  ```
  
  > 재귀적으로으로 푸는 것은 분할 정복 알고리즘 중 하나이다. 
  어떤 문제를 한 번에 풀기 힘들 때 작은 조각으로 쪼개어서 푸는 것을 분할 정복 알고리즘이라고 한다.
  
  재귀를 사용하는 것은 컴퓨터에게 많은 부담을 주지만 사람이 볼 때 가독성이 높아진다. 
  따라서 성능을 중시한다면 재귀를 사용하지 않는 게 좋다. 
  하지만 많은 곳에서 재귀가 사용되기 때문에 꼭 알아두긴 해야한다.
  
- 메모이제이션: 프로그래밍을 할 때 반복되는 결과를 메모리에 저장해서 다음에 같은 결과가 나올 때 빨리 실행하는 기법

  메모이제이션은 반복되는 계산이 많을수록 효과가 좋다. 특히 반복 작업이 많은 경우, 
  숫자가 커질수록 반복 횟수가 기하급수적으로 늘어난다. 메모이제이션을 사용하지 않은 코드로 `factorial(40)`를 
  해보면 굉장히 많은 반복이 일어난다.
  
  ex) `factorial(3)`을 호출하고 `factorial(4)`를 호출했을 때 `factorial(3)`의 결과값을 
  참조할 수 있었다면(메모리에 남아있었다면) 값을 재사용할 수 있었을 것이다.
  
  ```javascript
  // 재귀
  const fibonacci = function(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  ```
  
  ```javascript
  // 메모이제이션(클로저 사용)
  const fibonacci = (function() {
    let save = {};
    const fib = function(n) {
      if (n < 2) {
        return n;
      }
      let s1 = save[n-1] || fib(n-1);
      let s2 = save[n-2] || fib(n-2);
      let result = s1 + s2;
      save[n] = result;
      console.log(s1, s2, result);
      return result;
    };
    return fib;
  })();
  
  fibonacci(5);
  console.log('=====');
  fibonacci(5);
  ```
  
  ![image](https://user-images.githubusercontent.com/37951612/79278234-45fce180-7ee6-11ea-9f40-a67c69d887cc.png)
  
