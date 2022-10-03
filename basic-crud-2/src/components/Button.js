const Button = ({ color, text, onclick }) => {
  return (
    <button
      onclick="onclick"
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
