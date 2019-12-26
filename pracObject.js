const fruitList = [
    {name: 'grape', level: 3},
    {name: 'lemon', level: 1},
    {name: 'apple', level: 5},
    {name: 'melon', level: 7},
    {name: 'watermelon', level: 6},
    {name: 'orange', level: 3}
];

console.log(fruitList[0].name);

for (key in fruitList) {
  console.log(`key: ${key}, value: ${JSON.stringify(fruitList[key])}`);
}

const objectKeys = Object.keys(fruitList[0]);
fruitList.forEach(oArrayE => {
    objectKeys.forEach(e => {
        console.log(oArrayE[e]);
    });
    console.log();
});

const a = 'a';
let cnt = 0;

let object = {
    [a + ++cnt]: ++cnt
};
console.log(object);