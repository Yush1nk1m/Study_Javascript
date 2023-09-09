/* 컴포넌트 파일의 확장자는 jsx로 사용할 것이 권장된다. */
import { ColoredMessage } from "./components/ColoredMessage";

/* export */
export const App = () => { // JSX 표기법에서는 함수의 반환값으로 HTML 태그를 기술할 수 있고, 그것을 컴포넌트로 다뤄 화면을 구성한다.
    // 버튼 클릭 시 실행되는 함수 정의
    const onClickButton = () => alert("Button has been clicked.");
    
    return (    // 여러 개의 태그를 반환하려면 return할 값을 ()로 감싼다.
        <>
            <h1 style={{ color: "red" }}>안녕하세요!</h1>
            <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
            <ColoredMessage color="pink">잘 지냅니다.</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
        </>
    );
    // return 이후는 한 개의 태그로 둘러 싸여 있어야 한다.
    // 불필요한 DOM을 생성하지 않기 위해 Fragment 태그(<Fragment></Fragment>)로 감싸거나 빈 태그(<></>)로 감쌀 수 있다.
};