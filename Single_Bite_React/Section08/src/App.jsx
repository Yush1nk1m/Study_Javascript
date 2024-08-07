import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "NestJS 프로젝트하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "코딩테스트 준비하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(4);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중 targetId와 일치하는 id를 갖는 todo item의 isDone 속성 변경

    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
