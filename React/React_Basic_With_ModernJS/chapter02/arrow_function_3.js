/* 인수가 두 개 이상인 경우 */
// 인수가 두 개 이상이면 에러
//const errorFunc = value1, value2 => {
//    return value1 + value2;
//};

// 인수가 두 개 이상이면 소괄호로 감싼다.
const func = (value1, value2) => {
    return value1 + value2;
};

console.log(`1 + 2 = ${func(1, 2)}`);