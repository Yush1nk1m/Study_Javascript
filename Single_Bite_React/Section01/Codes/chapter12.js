// 1. 함수 표현식: 호이스팅의 대상이 되지 않는다.
function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    // console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(11));