/* Styled Component 방식의 특징
   1. 스타일을 적용한 컴포넌트를 정의할 수 있다.
   2. 일반적인 CSS와 문법이 동일하다. (SCSS 표기법을 그대로 사용할 수 있다.)
*/
import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <SContainer>
            <STitle>styled components입니다.</STitle>
            <SButton>버튼</SButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    border: 1px solid #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const STitle = styled.p`
    margin: 0;
    color: #aaa;
`

const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #aaa;
        color: #fff;
        cursor: pointer;
    }
`