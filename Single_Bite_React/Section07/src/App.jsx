import { useEffect, useRef, useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트
  useEffect(() => {
    console.log("mount");
  }, []); // deps가 빈 배열이다.

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    // 마운트되는 순간은 제외한다.
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); // deps를 명시하지 않는다.

  // 3. 언마운트: 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

export default App;
