Property
=====

> 자바스크립트에서 변수 vs 프로퍼티
  
`var a = "text";`  
일반적으로 변수는 **var**로 선언을 하게 된다.  
여기서 a 는 **해당 스코프 안의 변수**다.  
절대 해당 스코프에서 프로퍼티라고 하지 않는다.  
  
`this.b = "test";`  
**this** 를 통해서 b를 선언하게 되면, b는 **해당 객체의 프로퍼티**가 된다.  
  
```javascrip
var setName = function(value) {
    var name = value;
    this.name = value;
};

var name = new setName("Yewon");
console.log(setName.name); //Yewon
```
this.name으로 저장된 값이 출력된다.  
name이란 변수는 setName의 인스턴스를 통해 만들어진 객체이며,  
인스턴스로 만들어진 객체의 프로퍼티가 this.name이기 때문에  
  
JS에서는 접근제어자 개념이 따로 존재하지 않는다.  
this는 public, var는 private한 변수로 볼 수 있다.
