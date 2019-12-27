// splice
// 지정된 범위의 배열을 반환하며, 원본 배열이 수정됨

const numArr = [36, 2, 65, 6, 23, 4, 5];
const firstResult = numArr.splice(1, 1, 63);
const secondResult = numArr.splice(2);

console.log(`result: ${numArr}`);
console.log(`firstResult: ${firstResult}`);
console.log(`secondResult: ${secondResult}`);

// slice
// shallow copy한 새로운 배열 객체를 반환하며, 원본 배열이 수정되지 않는다
const animalArr = ['Dog', 'Cat', 'Lion', 'Bear', 'Tiger'];
console.log(animalArr.slice(0));
console.log(animalArr.slice(3, 4));

// 배열 중복 제거
const fruits = ['Banana', 'Blueberries', 'Cherry', 'Apple', 'Watermelon', 'Orange', 'Mango', 'Watermelon', 'Cherry'];
console.log(fruits);

const resultFruits = fruits.reduce((resultArr, value) => {
  if (!resultArr.includes(value)) {
    resultArr.push(value);
  }
  return resultArr;
}, []);
console.log(resultFruits);

// 배열 중복 제거 + 정렬
const sortedResultFruits = fruits
  .sort()
  .reduce((resultArr, value) => {
    if (resultArr.slice(-1)[0] !== value) { // 맨 끝 원소
      resultArr.push(value);
    }
    return resultArr;
  }, []);
console.log(sortedResultFruits);

const games = ['League of Legends', 'Over Watch', 'Cyphers'];

games.forEach((value, index, arr) => {
  console.log(`${index}: ${value}`);
  console.log(arr);
});

console.log(games.map((game) => `This '${game}' is so funny!`));

// 해당하는 요소가 없더라도 빈 배열을 반환해주므로 오류가 생길 여지가 적다
console.log(games.filter((game) => game.includes('a')));
console.log(games.filter((game) => game.includes('Watch')));

// findIndex, splice 로 배열 요소 일부 제거하기
const colors = ['Yellow', 'Red', 'Purple'];
const colorResultIdx = colors.findIndex((e) => e === 'Red');
colors.splice(colorResultIdx, 1);
console.log(colors);

// find, findIndex 메서드는 조건을 충족하는 첫 번째 값만 반환한다(배열 X).
// 만약 조건을 충족하는 값이 없다면 undefined를 반환한다

// filter는 조건을 충족하는 값을 찾지 못하면 빈 배열을 반환하는데 왜 find는 undefined를? 함수를 연결해서 사용할 수 없을텐데?
// => find는 빈 배열을 반환할 필요가 없다. 정상적으로 반환해도 이미 배열이 아니기 때문이다.
// => find의 반환값은 항상 배열이 아니다.