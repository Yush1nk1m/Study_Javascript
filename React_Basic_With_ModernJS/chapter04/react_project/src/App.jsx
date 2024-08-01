/* 컴포넌트 파일의 확장자는 jsx로 사용할 것이 권장된다. */
import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

/* export */
export const App = () => { // JSX 표기법에서는 함수의 반환값으로 HTML 태그를 기술할 수 있고, 그것을 컴포넌트로 다뤄 화면을 구성한다.

    
    //console.log("렌더링");      // State 업데이트 시 컴포넌트가 재렌더링되어 함수 컴포넌트가 처음부터 다시 실행된다.
    // State 정의
    const [num, setNum] = useState(0);
    
    /* State의 값이 변했을 때만 경고 표시 */
    useEffect(() => {
        alert(`num의 값이 ${num}으로 변경되었습니다.`);
    }, [num]);      // 컴포넌트는 재렌더링을 많이 반복하기 때문에 재렌더링할 때마다 처리를 실행하는 것이 아닌 특정 State가 변경되었을 때마다 처리를 실행하게끔 만든다.

    // 버튼 클릭 시 실행되는 함수 정의
    // 버튼 클릭 시 State를 카운트 업
    const onClickButton = () => {
        setNum((prev) => prev + 1);     // setNum(num + 1)과 같이 작성하면 연속 호출 시 기존의 num 값만 반복해서 읽으므로 클릭을 해도 숫자가 1씩만 증가한다.
    }
    
    return (    // 여러 개의 태그를 반환하려면 return할 값을 ()로 감싼다.
        <>
            <h1 style={{ color: "red" }}>안녕하세요!</h1>
            <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
            <ColoredMessage color="pink">잘 지냅니다.</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
        </>
    );
    // return 이후는 한 개의 태그로 둘러 싸여 있어야 한다.
    // 불필요한 DOM을 생성하지 않기 위해 Fragment 태그(<Fragment></Fragment>)로 감싸거나 빈 태그(<></>)로 감쌀 수 있다.
};