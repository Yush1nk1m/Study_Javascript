import './App.css';
import Register from './components/Register';
// 컴포넌트: HTML 태그 집합을 반환하는 함수
// 컴포넌트의 이름은 반드시 대문자로 시작해야 한다.

// App 컴포넌트는 루트 컴포넌트라고 부른다.
function App() {

  return (
    <>
      <div>
        <Register />
      </div>
    </>
  );
}

export default App
