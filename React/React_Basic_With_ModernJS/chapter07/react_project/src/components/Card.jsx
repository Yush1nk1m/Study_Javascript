import { EditButton } from "./EditButton";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#e9dbd0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

export const Card = () => {
    // props로 관리자 플래그를 받는다.
    // 글로벌 State 사용으로 불필요하게 되었다.
    //const { isAdmin } = props;

    return (
        <div style={style}>
            <p>김유신</p>
            <EditButton/>
        </div>
    );
};