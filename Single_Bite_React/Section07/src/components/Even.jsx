import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트: 죽음
  useEffect(() => {
    // 클린업, 정리 함수: useEffect 종료(언마운트) 시 호출된다.
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
