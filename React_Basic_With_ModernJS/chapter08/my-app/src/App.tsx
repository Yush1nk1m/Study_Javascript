import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

// 타입 정의 불러오기
import type { User } from "./types/user";
import type { FC } from "react";    // 함수 타입에 대한 타입 정의

// 사용자 정보 타입 정의
//type User = {
//    id: number;
//    name: string;
//    age: number;
//    personalColor: string;
//};

export const App: FC<void> = () => {
    // 얻은 사용자 정보
    const [users, setUsers] = useState<User[]>([]);

    // 화면에 표시될 때 사용자 정보 얻기
    useEffect(() => {
        axios.get<User[]>("https://example.com/users").then((res) => { setUsers(res.data); })
    }, []);

    return (
        <div>
            {users.map((user: User) => (
                <ListItem
                    id={user.id}
                    name={user.name}
                    age={user.age}
                    personalColor={user.personalColor}
                    hobbies={user.hobbies}
                />
            ))}
        </div>
    );
};