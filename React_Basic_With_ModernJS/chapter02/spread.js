/* 배열 */
const arr1 = [1, 2];
console.log('console.log(arr1):');
console.log(arr1);  // [ 1, 2 ] 와 같이 출력된다.

/* 스프레드 구문 */
console.log('console.log(...arr1): ');
console.log(...arr1);   // 1 2 와 같이 출력된다.

/* 일반적인 함수와 스프레드 구문 비교 */
const summaryFunc = (num1, num2) => console.log(`result of summaryFunc(): ${num1 + num2}`);

// 일반적으로 배열 값을 전달하는 경우
summaryFunc(arr1[0], arr1[1]);

// 스프레드 구문을 이용하는 경우
summaryFunc(...arr1);

/* 요소 모으기 */
const arr2 = [1, 2, 3, 4, 5];

// 분할 대입 시 남은 요소를 '모은다'
const [num1, num2, ...arr3] = arr2;     // 배열의 0번, 1번 인덱스 값을 num1, num2에 저장한 후 남은 요소들을 arr3에 모은다.

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
console.log(`console.log(...arr3):`);
console.log(...arr3);

/* 스프레드 구문을 이용해 새로운 배열 생성 */
const arr4 = [10, 20];
const arr5 = [30, 40];

// 스프레드 구문을 이용해 복사
const arr6 = [...arr4];

console.log(`arr4: ${arr4}`);
console.log(`arr6: ${arr6}`);

// 스프레드 구문을 이용해 결합
const arr7 = [...arr4, ...arr5];

console.log(`arr7: ${arr7}`);

/* 여러 객체 결합 */
const obj4 = { val1: 10, val2: 20 };
const obj5 = { val3: 30, val4: 40 };

// 스프레드 구문을 이용해 복사
const obj6 = { ...obj4 };

// 스프레드 구문을 이용해 결합
const obj7 = { ...obj4, ...obj5 };

console.log("obj6:");
console.log(obj6);
console.log("obj7:");
console.log(obj7);

/* 등호를 이용한 복사 시 예상치 못한 작동 */
// = 로 복사
const arr8 = arr4;

// arr8의 0번째 요소를 100으로 덮어 씀
arr8[0] = 100;

console.log(`arr4: ${arr4}`);
console.log(`arr8: ${arr8}`);

/* 스프레드 구문을 이용한 복사 */
const arr9 = [...arr4];

// arr9의 0번째 요소를 200으로 덮어 씀
arr9[0] = 200;

console.log(`arr4: ${arr4}`);
console.log(`arr9: ${arr9}`);