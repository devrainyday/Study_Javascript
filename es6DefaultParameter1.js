// 기본 매개변수(Default Parameters)
// 예제 작성 및 실행 결과 : 기본 매개변수는 왼쪽부터 X, 오른쪽부터 작성해야 한다
// 오른쪽이 빈채로 왼쪽에 기본 매개변수를 사용할 수 없다
const calculate = (rank, years = 1) => {

    let pay = 0;

    switch(rank) {
        case 'clerk': pay=180; break;
        case 'developer': pay=200; break;
        case 'desiner': pay=200; break;
        case 'executive': pay=250; break;
    }

    let annual = (pay * 12) + (years * 50);
    return annual;
}

console.log(calculate('clerk'));
console.log(calculate('developer', 5));