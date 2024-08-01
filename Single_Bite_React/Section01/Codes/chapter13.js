// 1. 콜백 함수: 다른 함수의 인수로 전달되는 함수
function main(value) {
    value();
}

main(() => {
    // console.log("sub");
});

// 2. 콜백 함수의 활용
const repeat = (count, callback) => {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
})

repeat(5, (idx) => {
    console.log(idx * 3);
})