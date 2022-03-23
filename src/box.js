import "./styles.css";

function Box(props) {
  return (
    <div className="boxInner">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Box;
