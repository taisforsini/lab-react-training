function BoxColor(props) {
  return (
    <div style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
      <p className="p-4 border border-dark">
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
