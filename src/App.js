import React, { useState } from 'react'

const InputDisplay = () =>{
  const [InputValue,setInputValue] = useState('');

  const handleInputChange = (event)=>{
    setInputValue(event.target.value)
  };

  return(
  <div>
    <form>
      <input type="text" 
      value={InputValue} 
      id="InputValue"
      onChange={handleInputChange} />
      </form>
    
    <div>
      <p>{InputValue}</p>
      </div>
      </div>
  );
};
export default InputDisplay;