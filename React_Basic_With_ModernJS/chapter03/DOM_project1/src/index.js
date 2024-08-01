console.log("test");    // 출력 테스트

/* ID를 지정해 요소 얻기 */
// getElementById 사용
const title1 = document.getElementById("title");
console.log(title1);

// querySelector 사용
const title2 = document.querySelector("#title");
console.log(title2);

/* 클래스명으로 요소 얻기 */
// getElementByClassName 사용
const containers = document.getElementsByClassName("container");
console.log(containers);

// querySelector 사용
const container = document.querySelector(".container");
console.log(container);

// querySelectorAll 사용
const allContainer = document.querySelectorAll(".container");
console.log(allContainer);