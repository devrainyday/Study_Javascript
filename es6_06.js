// 객체(Obejct) : 속성(Property)이라 불리는 다양한 값을 포함한 데이터 타입
// 객체 내부에서 선언된 함수인 메소드(Method) 또한 포함 가능 
// => 선언시 콜론이나 함수 선언 필요 없음

// 1)
let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
 // 12
console.log(tree.height);

// 2)
let height = 5;
let health = 100;

let athlete = {
    height, // `height: height`
    health // `health: health`
}

// 3) 중복된 속성키 값
var a = {
    x: 1,
    x: 2,
    x: 3,
    x: 4
}

// 마지막 선언된 값만 유효함
// {x: 4}
console.log(a);