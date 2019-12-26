Property
=====

> [JavsScript] property란 무엇인가?

다른 값과 연관을 가진 어떤 값  
ex) 문자열의 length라는 프로퍼티 : 문자열에 있는 문자의 양을 정수로 나타낸 값  
  
### MDN의 property 정의
보통 데이터 구조와 연관된 속성을 나타냄 == 해당 object의 특징  
1. 인스턴스 property : 특정 object 인스턴스의 특정한 데이터를 가지고 있음
2. Static property : 모든 object 인스턴스들에게 공유된 데이터를 가지고 있음
  
property는 이름(a string)과 값(primitive, method, object reference)
> property가 object를 가지고 있다 == property가 object reference를 가지고 있다
  
### property vs 변수
- 프로퍼티는 공백, 기호, 숫자로 시작하는 유효하지 않는 변수명도 사용할 수 있음.  
  다만 유효하지 않은 변수명으로 프로퍼티 이름을 짓게 되면 점 표기법으로 호출할 수 없음.
- property에는 object도 담을 수 있는데, 사실 그 reference를 담고 있다.
- property는 기본적으로 변수처럼 값을 담는 역할을 하는데, 그 값이 object과 연관이 있다.
  ```javascript
  var person = {
    name : "Yewon",
    getPersonProfile : function() { return this.name; }
  };
  ```
  
  프로퍼티는 객체 안에서 object와 연관된 값을 가지고 있는 것,  
  메소드는 object 안에 속하며 어떤 기능을 정의하고 있는 것을 뜻한다.  
  그렇다면 getPersonProfile은 프로퍼티일까 메소드일까?
  
  > property와 method의 관계  
  마이크로소프트에서 정의한 프로퍼티와 메소드 설명의 일부 :  
  프로퍼티는 object를 위해서 데이터를 저장한다.  
  메소드는 obejct가 요청받을 수 있는 액션이다.
  
  결국 단순한 관점 차이로, property와 method 둘 다로 볼 수 있다.  
  property : 분명 함수는 JS에서 값으로 취급되기에 값을 담고 있는 것이라는 property의 정의에도 포함될 수 있다.  
  method : 일반적으로 함수를 담은 프로퍼티를 메소드라 부른다.  
    
  > _(언더바)는 내부 또는 private 프로퍼티라는 것을 나타낸다.
    
  ### property에 접근하는 방법
  - 대괄호로 접근
  `text["length"];`
  - 점 표기법
  `text.length;`
