let str = 'asdfghjklaaaahhhhsjjkeudjmjend';
let resultName = new Array();
let resultNum = new Array();

let value;
let resultValue;

for(let i = 0; i < str.length; i++) {
    value = str[i];
    
    if(i === 0) {
        resultName.push(value);
        resultNum.push(1);
    }

    for(let j = 0; j < resultName.length; j++) {
        console.log(`i: ${i}, j: ${j}`);
        resultValue = resultName[j];

        if(value === resultValue) {
            resultNum[j]++;
            break;
        }

        if(j === resultName.length-1) {
            resultName.push(value);
            resultNum.push(1);
        }
    }
}

let resultObject;

if(resultName.length > 0) {
    resultObject = {
        name: resultName[0],
        num: resultNum[0]
    };
}

for(let i = 1; i < resultName.length; i++) {
    if(resultObject.num < resultNum[i]) {
        reslutObject = {
            name: resultName[i],
            num: resultNum[i]
        }
    }
}

console.log(resultObject);