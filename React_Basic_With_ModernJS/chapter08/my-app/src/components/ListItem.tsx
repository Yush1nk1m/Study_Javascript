// 타입 정의 불러오기
import type { User } from "../types/user";
import type { FC } from "react";    // 함수 타입에 대한 타입 정의

// Props 타입 정의
//type User = {
//    id: number;
//    name: string;
//    age: number;
//    personalColor: string;
//};

// props에 타입을 정의
export const ListItem: FC<User> = (props: User) => {
    const { id, name, age, personalColor, hobbies } = props;

    return (
        <p style={{ color: personalColor }}>
            {id}: {name}({age}) {hobbies?.join(" / ")}
        </p>
    );
};