export {};
import { useState } from "react";
/* 제네릭: 타입의 정의를 사용할 때 동적으로 변경할 수 있는 기능을 제공한다. */
// 타입 정의 예
type CustomType<T> = {
    val: T;
}

/* CustomType 사용 방법 */
const strObj: CustomType<string> = { val: "A" };

/* string 이외의 값을 대입한 경우 */
// 다음과 같이 하면 에러가 발생한다.
//const strObjwrong: CustomType<string> = { val: 10 };

/* useState 정의 시 제네릭 이용 */
const [str, setStr] = useState<string>("");

/* 값을 string 이외의 값으로 업데이트한 경우 */
// string 이외의 값으로 변경할 수 없다.
//setStr(10);     // error