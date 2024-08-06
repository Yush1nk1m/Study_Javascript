const Button = ({ text="NULL", color="black", children=<></> }) => {
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button
      // onClick 이벤트 핸들러
      onClick={onClickButton}
      // onMouseEnter 이벤트 핸들러
      // onMouseEnter={onClickButton}
      style={{ color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
