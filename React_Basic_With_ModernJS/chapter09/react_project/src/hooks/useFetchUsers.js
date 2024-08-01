/* 사용자 정의 훅 함수 구현 */

/* 임시 State와 함수 정의 */
import { useState } from "react";
import axios from "axios";

// 사용자 목록을 얻는 사용자 정의 훅
export const useFetchUsers = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {

        // 버튼 클릭 시 로딩 on, 에러 플래그 off
        setIsLoading(true);
        setIsError(false);

        // API 실행
        axios
            .get("https://example.com/users")
            .then((result) => {
                // 성과 이름을 결합할 수 있도록 변환
                const users = result.data.map((user) => ({
                    id: user.id,
                    name: `${user.lastname} ${user.firstname}`,
                    age: user.age
                }));

                // 사용자 목록 State 업데이트
                setUserList(users);
            })
            .catch(() => setIsError(true))      // 에러가 발생하면 에러 플래그 on
            .finally(() => setIsLoading(false));    // 처리가 완료된 뒤에는 로딩 플래그 off
    };

    // 모아서 반환할 것이므로 객체에 설정
    return { userList, isLoading, isError, onClickFetchUser };
};

/* 임시 State와 함수 정의 */
