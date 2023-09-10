/*  styled JSX 방식의 특징
    1. style 태그에 jsx 표기법을 사용해야 한다.
    2. 디폴트로 SCSS 표기법은 사용할 수 없다.
    3. NEXT.js에 내장되어 있다.
*/
export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="title">Styled JSX입니다.</p>
                <button className="button">버튼</button>
            </div>

            <style jsx>{`
                .container {
                    border: 1px solid #aaa;
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .title {
                    margin: 0;
                    color: #aaa;
                }

                .button {
                    background-color: #ddd;
                    border: none;
                    padding: 8px;
                    border-radius: 8px;
                    &:hover {
                        background-color: #aaa;
                        color: #fff;
                        cursor:pointer;
                    }
                }
            `}</style>
        </>
    );
};