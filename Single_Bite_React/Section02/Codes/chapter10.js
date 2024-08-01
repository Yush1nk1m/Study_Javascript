// 1. Date 객체를 생성하는 방법
let date1 = new Date();     // 생성자
let date2 = new Date(2001, 3, 6, 2, 0, 0);

// 2. 타임 스탬프: 시간이 "1970.01.01 00:00:00"으로부터 몇 ms가 지났는지를 의미하는 정수 값
let ts1 = date1.getTime();
let date3 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2001);
date1.setMonth(3 - 1);
date1.setDate(6);
date1.setHours(2);
date1.setMinutes(0);
date1.setSeconds(0);

// 5. 시간을 여러 포맷으로 출력하기
console.log('date1.toDateString(): ', date1.toDateString());
console.log('date1.toLocaleString(): ', date1.toLocaleString());