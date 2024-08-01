export {};
/* string(문자열) 타입 */
// : string으로 지정
let str: string = "A";
str = "10";     // OK
//str = 10;       // NG

/* number(수치) 타입 */
// : number로 지정
let num: number = 0;
num = 10;       // OK
//num = "10";     // NG

/* boolean(논릿값) 타입 */
// : boolean으로 지정
let bool: boolean = true;
bool = false;       // OK
//bool = 1;           // NG

/* Array(배열) 타입 */
// : Array<타입명> 또는 : 타입명[]으로 지정
// 수치를 저장하는 배열인 경우
const arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];
arr1.push(10);      // OK
arr2.push(10);      // OK
//arr1.push("10");    // NG
//arr2 = 10;          // NG

/* null 타입 */
// : null로 지정
let null1: null = null;
null1 = null;       // OK
//null1 = 10;         // NG

/* undefined 타입 */
// : undefined로 지정
let undefined1: undefined = undefined;
undefined1 = undefined;     // OK
//undefined1 = 10;            // NG

/* any 타입 */
// : any로 지정
let any1: any;
any1 = false;       // OK
any1 = 10;          // OK
any1 = undefined;   // OK