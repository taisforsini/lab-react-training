import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    clicked: false,
  };

  updateClick = () => {
    let clickedTrue = !this.state.clicked;
    this.setState({
      clicked: clickedTrue,
    });
  };
  render() {
    return (
      <div onClick={this.updateClick}>
        {!this.state.clicked ? (
          <img src={this.props.img} />
        ) : (
          <img src={this.props.imgClicked} />
        )}
      </div>
    );
  }
}

export default ClickablePicture;
