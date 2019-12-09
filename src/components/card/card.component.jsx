import React from "react";
import "./card.styles.css";

import QUESTIONS_DATA from "../../assets/data/questions.data";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false
    };
  }

  render() {
    return (
      <div className='card-container'>
        <h2>Questions</h2>
        {QUESTIONS_DATA.frontend.questions.map(frontend => (
          <div className="card" key={frontend.id}>
            <h2>{frontend.question}</h2>
            <p>{frontend.answer}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
