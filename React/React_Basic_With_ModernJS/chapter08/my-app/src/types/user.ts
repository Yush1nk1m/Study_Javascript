export type User = {
    id: number;
    name: string;
    age: number;
    personalColor?: string;     // ?를 붙이면 생략 가능하다는 의미이다.
    hobbies?: string[];
};