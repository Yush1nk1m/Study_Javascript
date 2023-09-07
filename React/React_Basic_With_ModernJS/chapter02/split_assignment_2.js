/* 배열 인덱스를 지정해서 대입 */
const myProfile = ["김유신", 22];

let message = `내 이름은 ${myProfile[0]}입니다. 나이는 ${myProfile[1]}세입니다.`;
console.log(message);

/* 배열에 분할 대입 */
// 베열 분할 대입
const [name, age] = myProfile;

message = `내 이름은 ${name}입니다. 나이는 ${age}세입니다.`;
console.log(message);

/* 배열에서 필요한 요소만 추출 */
// 첫 번째만 필요한 경우
const [newName] = myProfile;