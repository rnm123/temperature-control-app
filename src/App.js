

import React, { useState } from 'react';
import './index.css'
function App() {

  let[temp,setTemp] = useState(10);
  let[tempcolor,setTempcolor] = useState('cold');
  const increament=()=>{
    let newtemp = temp+1;
    if(newtemp>18){
        setTempcolor('hot')
    }
    setTemp(newtemp);
  }
  const decreament=()=>{
    let newtemp = temp-1;
    if(newtemp<15){
      setTempcolor('cold')
  }
    setTemp(newtemp);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempcolor}` }>{temp}</div>   
      </div>
      <div className='button-container'>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
      </div>
    </div>
  );
}

export default App;
