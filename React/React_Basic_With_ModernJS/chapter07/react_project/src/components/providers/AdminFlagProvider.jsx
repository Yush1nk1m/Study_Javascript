/* Context에서 글로벌 State를 사용하는 기본적인 방법
    1. React.createContext로 Context의 provider를 작성한다.
    2. 작성한 Context의 Provider로 글로벌 State를 다루고자 하는 컴포넌트를 감싼다.
    3. State를 참조할 컴포넌트에서 React.useContext를 사용한다.
*/
import { createContext } from "react";
import { useState } from "react";

// AdminFlagContext라는 Context Provider를 작성
export const AdminFlagContext = createContext({});

// Provider 작성
export const AdminFlagProvider = (props) => {
    const { children } = props;

    // 관리자 플래그 정의
    const [isAdmin, setIsAdmin] = useState(false);

    // AdminFlagContext 안에 Provider가 있으므로 각각 children을 감싼다.
    // value 안에 글로벌로 다룰 실제 값을 설정: 하나의 State가 변경되면 이 Context를 참조하는 모든 컴포넌트가 재렌더링되므로 많은 State를 포함하지 않아야 한다.
    // Context 객체로서 isAdmin과 setIsAdmin을 설정(객체 생략 표기법)
    return (
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AdminFlagContext.Provider>
    );
};