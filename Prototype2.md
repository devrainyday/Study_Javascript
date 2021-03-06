Prototype
=====

> [자바스크립트] 프로토타입
  
### 프로토타입
- 자바스크립트 객체지향 방식
- 자바스크립트의 모든 객체는 부모역할을 하는 객체와 연결되어있음
  - 클래스 기반 객체지향처럼 부모 객체 역할의 프로퍼티, 메서드를 상속개념(프로토타입 체인)과 같이 받아올 수 있음
  - 이러한 부모역할 객체를 프로토타입(prototype)이라 함
  - 부모역할 객체가 function 이라면 prototype 속성이 있는데 이 프로퍼티에 공통 프로퍼티, 메서드를 정의함
  - 부모역할 객체가 객체리터럴로 생성된 객체라면 리터럴에 공통 프로퍼티, 메서드를 정의함
  
### prototype 과 `__proto__` 속성 차이
- function 객체에서 new를 사용하여 객체 생성
- new를 통해 생성된 객체의 프로퍼티 중 `__proto__`가 있음
  - `__proto__` 속성은 프로토타입(부모역할을 하는 객체 : 부모역할을 하는 객체의 프로퍼티, 메서드)을 의미
  - prototype은 함수 객체의 원형 : 공통 프로퍼티, 메서드를 정의함
    => 생성자함수를 통해 생성된 객체에 이식 (`__proto__` > constructor 속성)

**결론**  
생성자함수를 통해 생성된 객체의 관점에서  
1. prototype(constructor 포함)은 부모역할 객체 원형 (객체에 프로퍼티, 메서드 추가 가능)
2. `__proto__` 는 생성자 함수를 통해 생성된 객체의 것.  
    prototype의 속성과 같은 값을 가진 객체
    
### 프로토타입 체인
  자바스크립트는 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때  
  해당 객체에 접근하려는 프로퍼티, 메서드가 없다면 `__proto__` 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메서드를 차례대로 검색하는 것
    
1. 객체리터럴  
객체리터럴 방식은 Object() 생성자 함수(부모역할 객체, `__proto__`를 뜻함,정확히 constructor 프로퍼티)로 객체를 생성하는 것을 단순화시킨 것
2. 사용자정의 생성자 함수  
함수는 객체, 객체 원형 프로퍼티인 prototype을 가짐
    - 함수선언식 : 기명함수(내부적으로는 함수표현식처럼 익명함수 표현이 됨)
    - 함수표현식 : 익명함수
    - Function() 생성자 함수 : 함수선언식이나 표현식 모두 Function() 생성자 함수로 함수를 생성한 것을 단순화시킨 것
    - `__proto__` : 생성자 함수를 뜻함. 생성자함수 프로토타입과 연결되어 있음 (프로토타입 체인)
    
### 프로토타입 체인 동작조건
  - 객체의 프로퍼티나 메서드를 읽으려고 할 때 해당 객체에 없는 경우 상위 객체(연결)에서 가져오려함
      => 프로토타입 체인 동작
  - 프로토타입 프로퍼티, 메서드를 체인해서 가져오는 것임을 잊지 말 것
  - 객체의 프로퍼티, 메서드 값을 수정한다고 해서 프로토타입의 프로퍼티, 메서드가 변경되지 않음
      => 프로토타입 체인 동작 X, 정의 또는 값을 할당하는 작업으로 받아들임
  
### 프로토타입 확장
  - prototype 속성에 접근하여 일반 속성, 메서드를 정의해주면 해당 객체의 원형에 프로퍼티, 메서드가 정의됨
  - prototype (Object 객체) > constructor > 하위 속성
  - 공통 프로퍼티, 메서드 정의할 때 사용
  - 생성자함수 property에 정의해두고 생성자 함수를 통해 생성되는 객체에 프로퍼티와 메서드를 체인시킴 (값 참조)
  
### 프로토타입 삭제
  - 객체를 생성하면 프로토타입이 결정됨 (객체리터럴: Object, 생성자함수: 함수)
  - 객체리터럴은 객체 그대로이기 때문에 객체 정의 부분에서 바꾸면 됨. 다만, 프로토타입 체인 됨
  - 생성자함수를 통한 생성객체는 원형을 만들어둠
  - 생성자함수를 통한 생성객체의 프로토타입 변경은 *함수명.prototype* 객체에 접근해서
  - 변경된 프로토타입의 적용 범위 시작은 변경 후 생성된 객체부터. 추가하는 것과 전혀 다름
  
