// 클래스(Class)
// ES6에서 JS를 좀 더 객체지향적으로 이해할 수 있게 도와줌. 
// 객체지향적 모델을 제공하진 않음
// 클래스는 class 키워드를 이용해 선언할 수 있고 constructor 메소드가 생성자.
// 인스턴스 생성시 new 키워드 이용. 생성자는 클래스에 하나만 존재

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return this.introduce();
    }

    introduce() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
    // this 없으면 에러남

    // 정적 메소드 : 클래스의 인스턴스에서는 호출할 수 없음
    static infoRelationship(a, b) {
        return `${a.name}와(과) ${b.name}은(는) 친합니다`;
    }
}

const yewon = new Person('Yewon', 18);
const yejin = new Person('Yejin', 20);

console.log(yewon.info); // info 뒤 () 없음
console.log(yejin.info);

console.log(Person.infoRelationship(yewon, yejin));
// 클래스는 호이스팅 되지 않으므로 반드시 *선언 이후* 사용해야 함

// 클래스에서 메소드를 선언할 때 function 키워드를 붙이지 않아도 됨.
// 특정 함수에 키워드를 붙이면 클래스 객체에서 사용 가능한 메소드
// => 프로토타입 메소드 선언 가능

// extends 키워드를 이용한 클래스 선언이나 자식 클래스 생성
class Student extends Person {
    get info() {
        return this.introduce();
    }
    
    // no error
    get info() {
        return this.introduce();
    }

    introduce() {
        return `${this.name}은(는) ${this.age}세 입니다. 또한 학생입니다.`;
    }
}
const s1 = new Student('My Friend', 15);
console.log(s1.info);