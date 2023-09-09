/* 속성명과 변수명이 같은 경우 */
const name = "김유신";
const age = 22;

// user 객체 정의(속성은 name과 age)
const user = {
    name: name,
    age: age,
};

console.log(user);

// 생략 표기법
const shortuser = {
    name,
    age,
};

console.log(shortuser);