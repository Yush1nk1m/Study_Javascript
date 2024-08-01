/* 디폴트 값 설정 */
const sayHello = (name = "게스트") => console.log(`${name}님, 안녕하세요!`);

sayHello();
sayHello("김유신");