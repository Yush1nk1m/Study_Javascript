function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업을 실행하는 함수 (executor)
    
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
}

// then, catch 메서드를 사용한 프로미스 체이닝
const p = add10(0);
p
    .then((result) => {
        console.log('result: ', result);

        return add10(result);
    })
    .then((result) => {
        console.log('result: ', result);

        return add10(result);
    })
    .then((result) => {
        console.log('result: ', result);
    })
    .catch((error) => {
        console.log('error: ', error);
    });