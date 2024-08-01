// 함수 선언
function greeting() {
    console.log("안녕하세요.");
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);

// Hoisting
function getArea(width, height) {
    // 중첩 함수 선언
    function another() {
        console.log("another");
    }

    another();
    let area = width * height;

    return area;
}