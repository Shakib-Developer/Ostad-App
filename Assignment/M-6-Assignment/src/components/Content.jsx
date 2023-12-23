import React, { useState } from 'react';

function Content() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    if (text.trim() !== '') {
      setDisplayText([...displayText, text]);
      setText('');
    }
  };
  

  const handleClearButtonClick = () => {
    setDisplayText([]);
  };

  return (
    <div className='content-area'>
      <input type='text' value={text} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add List</button>
      {displayText.length > 0 && (
        <>
        <ol>
          {displayText.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <button onClick={handleClearButtonClick}>Clear</button>
        </>
      )}
    </div>
  );
}

export default Content;

