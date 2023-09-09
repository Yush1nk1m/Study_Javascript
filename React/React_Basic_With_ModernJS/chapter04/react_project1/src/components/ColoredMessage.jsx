// 인수의 ( ) 단계에서 분할 대입
export const ColoredMessage = ({ color, children }) => {
    // Props 분할 대입
    //const { color, children } = props;

    const contentStyle = {
        color,  // 생략 표기법 사용 가능, props. 불필요
        fontSize: "20px",
    };

    return <p style={contentStyle}>{children}</p>;    // props. 불필요
};