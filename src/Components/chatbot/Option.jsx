import React from 'react';

const Option = ({ option, onClick }) => {
  return (
    // 'when theres a search so need to add a search bar 
    <button className="option-button" onClick={() => onClick(option.id)}>
      {option.text}
    </button>
  );
};

export default Option;