// 5가지 배열 요소 순회 및 탐색 메서드

// 1. forEach: 모든 요소를 순회하면서 각가의 요소에 특정 동작을 수행하는 메서드
let arr1 = [1, 2, 3];

arr1.forEach((item, idx, arr) => {
    // console.log('idx, item * 2: ', idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

// 2. includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf: 특정 요소의 인덱스를 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);

// 4. findIndex: 모든 요소를 순회하면서 콜백 함수를 만족하는 요소의 위치를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item <= 3);

let objectArr = [
    { name: "김유신" },
    { name: "안연우" },
];

// console.log(objectArr.findIndex((item) => item.name === "김유신"));

// 5. find: 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 반환하는 메서드
let arr5 = [
    { name: "김유신" },
    { name: "안연우" },
];

// console.log(arr5.find((item) => item.name === "김유신"));