/* ReactDOM import */
import ReactDOM from "react-dom";

import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

/* 인수 지정 */
/*
    리액트에서는 함수명을 HTML과 같이 태그로 감싸서 '컴포넌트'로 다룰 수 있다.
    index.html에서 div 태그의 id가 root이므로 해당 요소를 불러온다.
*/
ReactDOM.render(
    <AdminFlagProvider>
        <App/>
    </AdminFlagProvider>,
    document.getElementById("root")
);