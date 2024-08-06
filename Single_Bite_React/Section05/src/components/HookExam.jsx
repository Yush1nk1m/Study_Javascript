// React Hook
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문 또는 반복문 내부에서 호출될 수 없다.
// 3. 커스텀 훅을 만들 수 있다.

import useInput from "../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;
