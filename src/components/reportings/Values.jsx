/** @format */

import React, { useEffect, useState } from 'react';

// import './value.css';
let interval;
const Values = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter !== 70) {
      interval = setInterval(() => {
        if (counter == 70) {
          clearInterval();
        } else {
          setCounter(prevCount => prevCount + 10);
        }
      }, 200);
    }
    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className='skill'>
      <div className='outer'>
        <div className='inner'>
          <div id='num'>{counter}%</div>
        </div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='160px' height='160px'>
        <defs>
          <linearGradient id='GradientColor'>
            <stop offset='0%' stopColor='#e91e63' />
            <stop offset='100%' stopColor='#673ab7' />
          </linearGradient>
        </defs>
        <circle cx='80' cy='80' r='70' strokeLinecap='round' />
      </svg>
    </div>
  );
};

export default Values;
