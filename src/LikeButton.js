import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    color: 'blue',
  };

  handleIncrement = () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let count = this.state.count + 1;
    this.setState({ color, count });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={this.handleIncrement}
          style={{ backgroundColor: this.state.color }}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
