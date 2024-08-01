import {
    useState, 
    memo,           // 컴포넌트 메모이제이션: 컴포넌트의 이전 처리 결과를 저장해둠으로써 처리 속도를 높이는 기술
    useCallback,    // 함수 메모이제이션: 함수를 저장해둠으로써 처리 속도를 높이는 기술
    useMemo         // 변수 메모이제이션: 변수에 저장할 값의 계산을 저장해둠으로써 처리 속도를 높이는 기술
} from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {     // 메모이제이션 시 State나 Props의 변경이 있을 때에만 재렌더링된다. (부모 컴포넌트의 변화 영향을 받지 않는다.)
    console.log("APP 렌더링");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };

    const onClickReset = useCallback(() => {    // useCallback(함수 정의, 의존하는 변수들의 배열)
        setNum(0);
    }, []);

    const sum = useMemo(() => {     // useMemo(변수에 저장할 수치를 반환하는 함수 정의, 의존하는 변수들의 배열)
        return 1 + 3;   // 1 + 3은 최초 한 번만 계산되고 이후엔 저장된 값이 출력된다.
    }, []);

    return (
        <>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
            <p>sum = {sum}</p>
            <Child1 onClickReset={onClickReset}/>
            <Child4/>
        </>
    );
});