import React from 'react';

const Option = ({ option, onClick }) => {
  return (
    <button className="option-button" onClick={() => onClick(option.id)}>
      {option.text}
    </button>
  );
};

export default Option;