/* 잘못된 return 생략 */
// {}로 감쌌지만 return을 이용하지 않았다.
const func = (num1, num2) => {
    num1 + num2;
};

// 실행 결과 출력(아무것도 반환되지 않는다.)
console.log(`1 + 2 = ${func(1, 2)}`);   // undefined