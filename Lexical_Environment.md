Lexical Environment
=====

Lexical Environment는 Execution Context(이하 EC)와 관련이 있다.  
  
- EC : 실행환경. 자바스크립트 런타임에서 엔진이 만들어주는 런타임 유효범위라고 할 수 있다.  
모든 자바스크립트 코드를 실행하기 위해서는 EC가 필요, 코드를 실행하다보면 여러 Context가 만들어진다.  
EC를 만드는 단위는 Global Code, Function Code, Eval Code 이렇게 세 개인데 이렇게 나누는 이유는 각각 코드의 초기화 과정이 다르기 때문이다.
  
```javascript
ExecutionContext = {  
    LexicalEnvironment : [Lexical Environment]  
    VariableEnvironment : [Lexical Environment]  
    ThisBinding : [object]  
}  
```
3개의 프로퍼티 중 둘은 LexicalEnvironment 타입을 가지고 하나는 object 타입을 가진다.  
  
- Lexical Environment : 현재 실행 환경에 대한 변수나 참조에 대한 정보를 가진다. 이는 곧 현재 Context에서 변수나 어떤 값(자원)들을 가져올 때 어디서 가져올 것이냐에 대한 답이다.  
  
그리고 ThisBinding은 현재 Context에서의 This를 가리키게 된다.  
  
### Lexical Environment 타입의 형태
```javascript
Lexical Environment = {  
    environment record : {},  
    outter environment reference : {}  
}  
```

- environment record : 현재 Context에서 선언된 함수 혹은 변수들이 저장되는 공간
- outter environment reference : 현재 Context를 기준으로 외부 Context를 참조하는 공간. 만약 유효범위가 중첩되어있을 때 상위 유효범위를 참조할 수 있어야 하는데 이 때 상위 유효범위를 참조하기 위해서 존재하는 property이다.  
그렇기 때문에 reference.
  
### environment record
- Declartion
Object 안에 실제 값들이 저장되어 있는 형태
```javascript
DeclartionEnvironmentRecord = {
    a : 33,
    b : 'Hello World'
}
```
- object
단순히 해당 Context 내부를 바인딩해주는 역할
```javascript
ObjectEnvironmentRecord = {
    bindObject : [object]
}
```
  
ES3까지는 DeclartionEnvironmentRecord는 존재하지 않았는데 ES5 스펙에서 추가된 속성.
> 아마 현재 context의 값을 참조를 통해서 가져오는 형태가 성능상으로나 메커니즘으로나 부합하지 않는다고 생각해서 바로 가져올 수 있도록 만든 게 아닌가 싶다.
  
만들어진 Context는 내부에서 Stack 형태로 저장되는데 먼저 생성된 것이 아래, 최근에 만들어진 Context가 위로 쌓이게 된다.  
그리고 함수실행을 마치거나 GC가 판단하여 Context를 쓸 일이 없게 되면 Context를 Stack에서 제거한다.  
  
엔진이 EC를 어떻게 만들어야 하는가에 대한 스펙이 Lexical Environment이다.  
그래서 EC와 Lexical Environment는 깊은 관련이 있다.  
  
### Execution Context는 3가지 타입으로 나눠서 초기화된다
1. Global Code
```javascript
Global Execution Context {
    LexicalEnvironment : GlobalEnv,
    VariableLexicalEnvironment : GlobalEnv,
    ThisBinding : window
}
```
ThisBinding은 window(브라우저의 전역 객체), 나머지는 GlobalEnv 참조  
  
```javascript
GlobalEnv {
    Object LexicalRecord : {
        objectBinding : Window,
    },
    OutterEnvironmentReference : null,
}
```
GlobalEC의 ThisBinding도, objectBinding 프로퍼티도 Window를 보고 있다  

#### ObjectLexicalEnvironment
- 미리 Window를 넣어두고 그 후에 선언된 변수, 함수를 가져와서 ObjectLexicalRecord에 넣어주는 형태
- '전역에서 변수를 선언한 경우 전역객체의 프로퍼티에서 변수를 찾는 일'로 생각
- 전역에서 변수를 선언하면 그 변수는 GlobalEnv의 ObjectLexicalEnvironment의 ObjectBinding에서 찾게되고 ThisBinding
역시 Window를 바라보고 있기 때문에 전역에서 선언한 변수가 Global Object의 프로퍼티로 찾을 수 있게 되는 것이다.
  
#### OutterEnvironmentReference는 Global 이므로 상위 EC가 없다. 그래서 null이 들어간다.

2. Function Code
Function Code의 EC가 만들어질 때 EC Stack에는 Global EC가 생성되어 있다.  
  
자바스크립트엔진이 함수 호출부를 만나면 Function에 대한 EC를 생성하게 된다.  
그리고 우선적으로 this를 찾아서 바인딩해주게 되는데 엔진이 this를 바인딩하는 메커니즘은 함수 실행시에 좌항을 보는 것이다.
  => 만약 해당 함수가 메서드로 실행된다면 메서드를 가지고 있는 객체가 this에 바인딩되고, new를 붙여서 실행한다면 해당 함수 자체가 this가 될 것이다.

```javascript
function sum(x, y){
  var result = x + y;
  var etc = function(){
    console.log('good');
  }
  function msg(){
    return result;
  }
}
sum(10, 20);
```
- result 변수
- etc 함수표현식
- msg 함수를 가진 함수

같은 코드는 좌항에 아무것도 없기 때문에 EC의 ThisBinding은 null.  
EC의 ThisBinding이 null인 경우, Global EC를 참조하게 된다.  
브라우저에서는 Window가 된다. (단, **use strict** 모드에서는 **null**이 그대로이다)
  
그리고 EC의 Lexical Environment를 넣어주는데, sum의 LE는
```javascript
{
    DeclartionEnvironmentRecord : {
        x : 10, // 파라미터
        y : 20, // 파라미터
        msg : Function Reference, // 함수선언
        arguments : Arguments Object,  //함수 내부에서 사용할 수 있는 arguments 세팅
        result : undefined, // 선언된 변수
        etc : undefined, // 선언된 변수(함수표현식)
    },
    OutterEnvironmentReference : null

}
```
런타임에서 실제적인 실행 전에 EC를 구성하는 단계에서 이런식을 호이스팅이 일어나고, 함수가 실행된다.  
OutterEnvironmentReference는 스펙을 보면 가까운 상위 EC를 참조한다고 되어있는데,  
현재의 경우에서는 상위 EC가 Global EC이다. 그러므로 null은 GlobalEC로 바뀐다.  
  
함수가 실행되어서 result 변수의 값이 10+20이 되면 result : 30  
  
함수형 변수인 etc의 함수가 실행되면 etc : Function Reference 가 된다  
  
이런 식으로 Function을 실행할 때 EC가 생성된다.
  
#### 만약 상위 EC에 있는 값을 사용하려 할 때는 어떻게 하는가?
=> 이 때 사용되는 것이 OutterEnvironmentReference 이다.  
저곳에 참조된 값을 사용해 상위 Scope로 찾아올라가게 된다.  
이 과정이 Scope Chain.
