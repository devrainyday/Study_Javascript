First-class citizen (일급시민)
=====
> 함수는 일급 객체이다
  
자바스크립트에서 함수는 값으로 취급된다.  
그리고 함수는 객체다.  
이는 함수도 일반 객체처럼 취급될 수 있다는 것을 말한다.

또한 ↓ 특징들로 인해 자바스크립트에서는 함수를 **일급 객체(First-class)** 라고 부른다.
 
1. 리터럴에 의해 생성  
2. 변수나 배열의 요소(원소), 객체의 프로퍼티 등에 할당 가능  
3. 함수의 인자로 전달 가능  
4. 함수의 리턴값으로 리턴 가능  
5. 동적으로 프로퍼티를 생성 및 할당 가능  

여기서 일급객체라는 말은 컴퓨터 프로그램이 언어 분야에서 쓰이는 용어로서, 앞에서 나열한 기능이 모두 가능한 객체를 일급객체라고 부른다.
  
자바스크립트 함수가 가지는 이러한 일급 객체의 특성으로 함수형 프로그래밍이 가능한 것이다.

1. 함수 리터럴을 통한 함수 정의  
    - 함수 표현식 : 생성된 함수를 변수에 할당하여 함수를 생성하는 것
    - 함수 선언문 : 함수 생성 시 함수명이 정의되어 있는 것

2. 변수나 프로퍼티의 값으로 할당이 가능  
    - 변수
    ```javascript  
    var bar = function() { return 'Yewon'; };  
    console.log(bar());  
    ```
    
    - 프로퍼티
    ```javascript  
    var obj = {};  
    obj.bar = function() { return 'Javascript'; };  
    ```
    
    bar처럼 배열의 원소 등에도 할당 가능  

3. 함수의 인자로 전달 가능  
    ```javascript  
    var test = function(func) { func() };  
    test(function(){  
        console.log('Yewon');  
    })  
    ```
    test() 함수를 호출할 때, 함수 리터럴 방식으로 생성한 익명함수를 func 인자로 넘김. 따라서 test() 함수 내부에서는 func 매개변수로 인자에 넘겨진 함수를 호출할 수 있음.

4. 함수의 리턴값으로 활용  
    ```javascript  
    var foo = function() {  
        return function() { console.log('return'); };  
    }  

    var bar = foo();  
    // foo 함수가 호출되면, 리턴값으로 전달되는 익명 함수가 bar 변수에 저장됨

    bar();  
    // bar() 로 익명함수를 호출, 실행  
    ```

5. 동적으로 프로퍼티를 생성 및 할당 가능  
    자바스크립트에서는 함수도 객체다.  
    즉, 함수의 기본 기능인 코드실행뿐마 아니라, 함수 자체가 일반 객체처럼 프로퍼티를 생성하고 할당이 가능하다.  

    ```javascript
    function add(x,y) {  
        return x+y;
    }  
    add.result = add(3,4);
    // result 프로퍼티 동적 생성 및 add() 함수 호출 결과 저장  
    add.status = 'complete';

    console.log(add.result);
    console.log(add.status);
    ```
