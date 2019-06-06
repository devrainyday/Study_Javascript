First-class citizen (일급시민)
=====
> Javascript의 함수는 1급 객체(first class object)이다
  
1급 시민(first class citizen)의 정의
-----
  
### 1급 시민의 조건
- 변수(variable)에 담을 수 있다.
- 인자(parameter)로 전달할 수 있다.
- 반환값(return value)으로 전달할 수 있다.
  
대부분의 프로그래밍 언어에서 숫자는 1급 시민의 조건을 충족한다. 숫자는 변수에 저장할 수 있고 인자나 반환값으로 전달할 수 있다.
  
### 1급 객체(first class object)
특정 언어에서 객체(object)를 1급 시민으로서 취급한다는 의미. 당연히 위의 조건 모두 충족
  
### 1급 함수(first class function)
함수를 1급 시민으로 취급하는 것.  
몇몇은 추가적인 조건을 요구함

- 런타임(runtime) 생성이 가능하다
- 익명(anonymous)으로 생성이 가능하다
  
### Javascript의 함수는 1급 함수? 1급 객체?
Javascript에서는 객체를 1급 시민으로 취급한다. 그리고 JS의 함수는 객체로서 관리되기에 1급 객체라고 볼 수 있다. 동시에 1급 함수의 추가조건도 만족한다. 한마디로 **1급 객체이자 1급 함수**지만, **보통 1급 객체로 기술하는 편**인 듯 하다.
  
### Javascript에서 함수가 1급 객체인 것이 중요한 이유
함수가 **1급 객체**라는 사실은 겉으로 봤을 땐 그리 특별해보이지 않지만 함수를 그냥 주고받을 수 있다는 것이 아주 큰 차이점을 만든다.  
  
가장 중요한 장점은 바로 **고차함수(high order function)**이 가능하다는 점이다.  
**Javascript**의 **each, filter, map, sort 등의 함수**들은 인자로 목적에 맞는 함수를 하나 넘겨주면 아주 쉽게 처리가 된다.  
  
반면, **Java7**의 **Collection, sort 함수**같은 경우도 비교를 위해 인자를 하나 넘겨주게 되는데, 이것은 함수가 아니라 Comparator interface 타입의 인스턴스이다. 함수 하나를 넘겨주기 위해서 새로운 클래스를 만들고 그것의 인스턴스까지 생성해야 하는 것이다. (ES6와 Java8에서는 람다가 지원되며 훨씬 간편해졌다)  
  
1급 객체가 Javascript만의 **클로저(closure)**와 만나면 장점이 또 있다.  
Javascript의 함수는 생성될 당시의 **Lexical Environment**를 기억하게 되는데, 이것은 함수를 주고받을 때 함께 전달된다.이것을 이용해서 **커링(currying)**과 **메모이제이션(memoization)**이 가능해진다.