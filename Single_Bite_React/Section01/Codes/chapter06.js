// 1. 묵시적 형 변환: 자바스크립트 엔진이 자동으로 형 변환하는 것
let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환: 내장 함수 등을 이용해 사용자가 직접 형 변환하는 것
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

let num1 = 20;
let numToStr1 = String(num1);