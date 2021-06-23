function IdCard(props) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.picture}
            className="img-fluid rounded-start idCard"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">
              <strong>First name: </strong>
              {props.firstName}
            </p>
            <p className="card-text">
              <strong>Last name: </strong>
              {props.lastName}
            </p>
            <p className="card-text">
              <strong>Gender: </strong>
              {props.gender}
            </p>
            <p className="card-text">
              <strong>Height: </strong>
              {props.height}
            </p>
            <p className="card-text">
              <strong>Birth: </strong>
              {props.birth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
