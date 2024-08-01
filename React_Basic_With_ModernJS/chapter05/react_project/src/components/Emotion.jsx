/* Emotion 방식의 특징
   1. 매우 다양한 사용 방법을 제공한다.
   2. Best Practice를 찾지 못했거나 다양한 방법을 시도할 때 좋은 선택지가 될 수 있다.
*/

// @jsxImportSource @emotion/react
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    // Style JSX 스타일로 작성하기: SCSS와 동일하게 작성 가능
    const containerStyle = css`
        border: 1px solid #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    // 인라인 스타일로 작성하기
    const titleStyle = css({
        margin: 0,
        color: "#aaa"
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion입니다.</p>
            <SButton>버튼</SButton>
        </div>
    );
};

// Styled Component 스타일로 작성하기
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
`;