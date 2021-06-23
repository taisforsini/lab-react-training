function Random(props) {
  let number = Math.round(Math.random() * (props.max - props.min) + props.min);

  return (
    <div>
      <p className="p-2 bg-light border">
        Random value between {props.min} and {props.max}: {number}
      </p>
    </div>
  );
}

export default Random;
