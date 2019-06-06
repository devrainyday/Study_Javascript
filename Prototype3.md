Prototype
=====

> [자바스크립트] 프로토타입

1. 객체리터럴
  숏컷(간단한) 방식  
  `var obj = {}`  
2. 생성자
  1과 동일. function Object()의 인스턴스 객체  
  `var obj = new Object()`
  
- *Object 타입**은 모든 *객체의 최상위타입*
- 자바스크립트는 **프로토타입을 이용한 상속**을 지원함
- 그래서 *Object 타입 생성자의 프로토타입 객체를 상속받은 인스턴스 객체가 생성되어 obj(2번째)에 저장되었다*고 표현
- **프로토타입을 이용**하여 **객체와 객체끼리 연결하고 한쪽 방향으로 상속받는 형태  
    => 프로토타입 체인**을 만들 수 있다

---

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var p = new Person("Yewon")
```
  
Person이라는 생성자함수의 프로토타입(원형객체)에 getName 메소드를 선언해둠  
p는 Person 생성자함수의 객체로 생성자함수(Person 타입)의 프로토타입을 상속받음  

`console.dir(p)`  

---
  
### `__proto__` 속성
().getName : function().constructor : function Person(name)  
`__proto__` : Object  
`__proto__` 속성은 Person 타입(생성자함수)의 프로토타입 객체를 가리키는 객체 프로퍼티  
Person.prototype ? p.`__proto__`  
함수는 프로토타입 객체를 가지고 있음

#### prototype은 함수 자기자신의 프로토타입 객체 프로퍼티
#### `__proto__` 는 자기보다 상위 함수의 프로토타입 객체 프로퍼티
  
### 결론
- 자바스크립트는 객체지향 패러다임을 구현하기 위해 함수의 프로토타입 객체를 이용함
- 함수를 만든 뒤 `console.dir()`로 프로토타입들을 확인할 수 있음
- 프로토타입 체임이라는 것은 프로토타입 객체를 이용하여 객체 간의 상속(공유) 관계를 만드는 것을 의미
