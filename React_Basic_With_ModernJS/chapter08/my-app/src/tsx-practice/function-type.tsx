export {};
/* 함수 타입, void 타입 */
// : void로 지정
// 함수 타입은 (인수: 인수 타입명): 반환값의 타입명 => {}
const funcA = (num: number): void => {
    console.log(num);
};

funcA(10);      // OK
//funcA("10");    // NG
//funcA();        // NG

/* 객체 타입 */
// : { : 타입명, : 타입명 ... }으로 설정
const obj: { str: string, num: number } = {
    str: "A",
    num: 10,
};

obj.str = "B";      // OK
obj.num = 20;       // OK
//obj.str = 10;       // NG
//obj.num = null;     // NG
//obj = 10;           // NG