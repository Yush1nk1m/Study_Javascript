/* 존재하지 않는 속성을 출력 */
// name을 삭제
const myProfile = {
    age: 22,
};

// 존재하지 않는 name
var { name } = myProfile;

let message = `${name}님, 안녕하세요!`;
console.log(message);

/* 분할 대입 시 디폴트 값을 설정 */
var { name = "게스트" } = myProfile;
message = `${name}님, 안녕하세요!`;

console.log(message);
