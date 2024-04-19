import React, { useState } from 'react';

function TextForm() {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, you can send the textInput to an API or perform any other action
    console.log("Submitted text:", textInput);
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Enter text:</label><br />
        <input 
          type="text" 
          id="textInput" 
          name="textInput" 
          value={textInput} 
          onChange={handleChange} 
        /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TextForm;
