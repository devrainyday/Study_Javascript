// 날짜
console.log(new Date().toLocaleDateString()); 
// 날짜 + 시간(12 기준)
console.log(new Date().toLocaleString()); 
// 시간
console.log(new Date().toTimeString()); 

// 타임존 : 동일한 로컬 시간을 따르는 지역을 의미
// 보통 국가별로 각자의 고유한 타임존을 사용하고 있으며, 
// 미국이나 캐나다처럼 면적이 넓은 나라의 경우 지역별로 각긱 다른 타임존을 사용하기도 한다.
console.log(new Date().getTimezoneOffset()); // -540 : 9시간 * 60분

console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay()); // 월 : 1

console.log(new Date().getHours()); // 시간(24 기준)
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());