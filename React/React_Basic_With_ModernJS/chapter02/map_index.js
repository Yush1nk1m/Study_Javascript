/* for문의 index를 이용해 요소를 순서대로 추출 */
const nameArr = ["김유신", "안연우", "초코"];

// 정의한 index를 이용
for (let index = 0; index < nameArr.length; index++) {
    console.log(`${index + 1}번째 원소는 ${nameArr[index]}입니다.`);
}

/* map 함수의 인수를 이용해 요소를 순서대로 추출 */
// 두 번째 인수에 index를 넣는다.
nameArr.map((name, index) => console.log(`${index + 1}번째 원소는 ${name}입니다.`));

/* map을 이용한 사양 구현 예 */
const newNameArr = nameArr.map((name) => {
    return `${name}님`;
});

console.log(newNameArr);