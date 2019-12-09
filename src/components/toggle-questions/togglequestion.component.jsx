import React, { Component } from "react";

class ToggleQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  toggleHidden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    const { question, answer } = this.props;
    const { isHidden } = this.state;
    return (
      <div>
        <h2>{question}</h2>
        {!isHidden && <p>{answer}</p>}
        {!isHidden ? (
          <button onClick={this.toggleHidden}>Hide Answer</button>
        ) : (
          <button onClick={this.toggleHidden}>Reveal Answer</button>
        )}
      </div>
    );
  }
}
export default ToggleQuestion;
