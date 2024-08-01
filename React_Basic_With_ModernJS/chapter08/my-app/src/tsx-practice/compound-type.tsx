export {};

/* intersection(교차) 타입:
    여러 타입을 조합해 새로운 타입 정의를 만들기 위해 사용한다.
*/
// 타입 & 타입으로 지정
const obj1: { str: string } & { num: number } = {
    str: "A",
    num: 10,
};

obj1.str = "20";     // OK
//obj1.num = "20";     // NG

/* 같은 타입 정의의 속성(str: string)이 존재하는 경우 */
type TypeA = {
    str: string;
    num: number;
}

type TypeB = {
    str: string;
    bool: boolean;
}

// TypeA와 TypeB로부터 새로운 TypeC를 작성
type TypeC = TypeA & TypeB;

const obj2: TypeC = {
    str: "A",
    num: 10,
    bool: false,
};

/* union(병합, 공용체) 타입 */
// 타입 | 타입으로 지정
let val1: string | number = "";
val1 = "A";     // OK
val1 = 10;      // OK
//val1 = [];      // NG