// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input 
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
    </div>
  );
}

export default Register;