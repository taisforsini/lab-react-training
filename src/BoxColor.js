function BoxColor(props) {
  return (
    <div style={{ background: `rgb(${props.r},${props.g},${props.b})` }}>
      <p className="p-4 border border-dark" style={{ color: 'white' }}>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
