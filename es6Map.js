// Map 객체는 한 쌍의 키와 값을 저장하는 객체
// - Map의 키 값은 함수, 객체, 원시 자료형 등 어떤 값도 사용 가능
// - 삽입된 순서대로 정렬함
// - size 속성 제공
// - 순회(iterate) 가능
// - 키의 잦은 삽입 또는 삭제의 경우 더 빠름

let testMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(testMap.size);

let useMap = new Map();
useMap.set('a', '1').set('b', '2').set('c', '3');
console.log(useMap.get('a'));
console.log(useMap.has('b'));

for(let mapVal of useMap.entries()) {
    console.log(`${mapVal[0]} : ${mapVal[1]}`);
}

// Set 객체는 유일한 값을 저장하는 객체 => 중복 X
let testSet = new Set([5, 60, 54, 63, 6]);
console.log(testSet);
console.log(testSet.size);

let useSet = new Set();
useSet.add('f').add('e').add('d');
console.log(useSet.has('a'));
for(let setVal of useSet.values()) {
    console.log(setVal);
}