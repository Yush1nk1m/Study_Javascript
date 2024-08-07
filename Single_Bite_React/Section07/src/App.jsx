import { useEffect, useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(count);
    console.log(input);
  }, [count, input]); // dependency array (deps)

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
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

export default App;
