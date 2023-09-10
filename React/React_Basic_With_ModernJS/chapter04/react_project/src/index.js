/* ReactDOM import */
import ReactDOM from "react-dom";
import { App } from "./App";

/* 인수 지정 */
/*
    리액트에서는 함수명을 HTML과 같이 태그로 감싸서 '컴포넌트'로 다룰 수 있다.
    index.html에서 div 태그의 id가 root이므로 해당 요소를 불러온다.
*/
ReactDOM.render(<App/>, document.getElementById("root"));       // App 함수의 내용을 root라는 id를 가진 HTML 요소의 아래에 추가한다.