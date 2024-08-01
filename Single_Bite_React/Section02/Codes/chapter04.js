// 1. Spread 연산자: 객체나 배열에 저장된 여러 값을 뿌려주는 기능
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

function funcA(p1, p2, p3) {
    console.log('p1, p2, p3: ', p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
function funcB(one, ...rest) {
    console.log('one: ', one);
    console.log('rest: ', rest);
}

funcB(...arr1);