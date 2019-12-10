import React from "react";
import "./card.styles.css";

import QUESTIONS_DATA from "../../assets/data/questions.data";
import ToggleQuestion from "../toggle-questions/togglequestion.component";

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        {/* <h2>Questions</h2> */}
        {QUESTIONS_DATA.frontend.questions.map(frontend => (
          <div className="card" key={frontend.id}>
            <ToggleQuestion
              question={frontend.question}
              answer={frontend.answer}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
