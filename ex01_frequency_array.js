/* 문자열을 받아 그 중에서 가장 빈도수가 많은 단일문자를 찾는 함수 */

const countFrequency = str => {
    let resultName = new Array();
    let resultNum = new Array();

    let value;
    let resultValue;

    if(str.length < 1) {
        return '함수에 전달된 값이 문자열이 아닙니다!';
    }

    resultName.push(str[0]);
    resultNum.push(1);

    // 문자열 순회
    for(let i = 0; i < str.length; i++) {
        value = str[i];
        
        for(let j = 0; j < resultName.length; j++) {
            resultValue = resultName[j];

            if(value === resultValue) {
                resultNum[j]++;
                break;
            }
    
            if(j === resultName.length) {
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

    return resultObject;
}

console.log(countFrequency('김예원은 밥을 먹는다 김예원은 무언가를 한다 김김김'));