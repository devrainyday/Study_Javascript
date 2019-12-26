// 내부적으로는 프로토타입을 따른다

// class
// extends
// constructor
// static method
// method
// super : 부모의 생성자에 인자를 전달

// - 객체의 static 메소드

class Person {
    constructor(type = 'person') {
        this.type = type;
    }

    static isPerson(person) {
        return person instanceof Person;
    }

    eat() {
        console.log('yammy~ yammy~');
    }
}

class Author extends Person {
    constructor(type, firstName, lastName, bookTitle) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookTitle = bookTitle;
    }

    introduceSelf() {
        super.eat();
        console.log(`I'm ${this.firstName} ${this.lastName}. and I wrote ${this.bookTitle}, and my type is ${this.type}`);
    }
}

const a1 = new Author('author', 'Jared M', 'Diamond', ['Guns, Germs, and Steel', 'Why is sex fun']);
a1.introduceSelf();
console.log(Person.isPerson(a1));
a1.eat();