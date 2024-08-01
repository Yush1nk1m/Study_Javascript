/* 분할 대입을 이용하지 않고 문자열을 출력 */
let myProfile = {
    name: "김유신",
    age: 22,
};

let message = `내 이름은 ${myProfile.name}입니다. 나이는 ${myProfile.age}세입니다.`;
console.log(message);

/* 분할 대입 이용 */
myProfile = {
    name: "김유신",
    age: 22,
};

// 객체 분할 대입
var { name, age } = myProfile;

message = `내 이름은 ${name}입니다. 나이는 ${age}세입니다.`;
console.log(message);

/* 일부만 추출 */
// 일부만 추출한다.
var { age } = myProfile;

/* 순서를 바꾸어 추출 */
// 순서는 관계 없다.
var { age, name } = myProfile;

/* 추출한 속성에 별명 지정 */
// 콜론으로 다른 변수명을 이용
const { name: newName, age: newAge } = myProfile;

message = `내 이름은 ${newName}입니다. 나이는 ${newAge}세입니다.`;
console.log(message);