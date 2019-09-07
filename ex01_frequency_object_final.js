/* 문자열을 받아 그 중에서 가장 빈도수가 많은 단일문자를 찾는 함수 */

const countFrequency = str => {
    let result = new Array();

    let value;
    let resultValue;

    if(str.length < 1) {
        return '함수에 전달된 값이 문자열이 아닙니다!';
    }

    // 문자열 순회
    for(let i = 0; i < str.length; i++) {
        value = str[i];
        
        // result 배열들에 아무 값이 없을 경우 for문이 정상적으로 작동하지 않으므로 따로 분리함
        if(i === 0) {
            result.push({v: value, cnt: 1});
        }
    
        for(let j = 0; j < result.length; j++) {
            resultValue = result[j].v;
    
            if(value === resultValue) {
                result[j].cnt++;
                break;
            }
    
            if(j === result.length-1) {
                result.push({v: value, cnt: 1});
            }
        }
    }
    
    let resultObject;
    
    if(result.length > 0) {
        resultObject = {
            value: result[0].v,
            cnt: result[0].cnt
        };
    }
    
    for(let i = 1; i < result.length; i++) {
        if(resultObject.num < result[i].cnt) {
            reslutObject = {
                value: result[i].v,
                cnt: result[i].cnt
            }
        }
    }

    return resultObject;
}

console.log(countFrequency('김예원은 밥을 먹는다 김예원은 무언가를 한다 김김김'));