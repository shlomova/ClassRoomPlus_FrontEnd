import React from 'react';
import Option from './Option';

const Question = ({ question, onOptionClick }) => {
    return (
      <div className="question-container">
        
        <p className="question-text">{question.text}</p>
        <div className="options-container">
          {question.options.map(option => (
            <Option key={option.id} option={option} onClick={onOptionClick} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Question;
  