/* 배열.map() */
// 배열 정의
const nameArr = ["김유신", "안연우", "초코"];

// 배열.map()으로 이용한다.
const nameArr2 = nameArr.map((name) => { return name; });

console.log(nameArr2);

nameArr.map((name) => console.log(name));