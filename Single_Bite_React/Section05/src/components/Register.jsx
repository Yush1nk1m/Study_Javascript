// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input
          // 태그에 대한 참조를 전달하는 속성 ref
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}>
        </input>
      </div>

      <div>
        <input
          name="birth"
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="ek">영국</option>
          <option value="jp">일본국</option>
          <option value="ch">중국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" onChange={onChange}/>
      </div>

      <div>
        <button onClick={onSubmit}>제출</button>
      </div>
    </div>
  );
}

export default Register;