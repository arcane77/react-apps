import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increase} style={{ marginRight: '10px', borderRadius:'7px', backgroundColor:'transparent',padding:'7px' }}>increase</button>
      <button onClick={decrease} style={{ backgroundColor:'black',color:'white', borderRadius:'7px',padding:'7px' }}>decrease</button>
    </div>
  );
};

export default Counter;
