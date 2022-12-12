/** @format */

import React from 'react';

const SenserContainer = ({ val, lable, ht }) => {
  return (
    <div style={{ width: 'calc(100%/8)' }}>
      <div className='sensorContainer'>
        <strong
          style={{
            height: `${ht}%`,
            background: '#3aa5dd',
            width: '100%',
            display: 'block',
            position: 'absolute',
            bottom: 0,
          }}>
          {ht ? ht.toFixed(2) : 0}%
        </strong>
      </div>
      <p>
        {lable}
        <br />
        {val}
      </p>
    </div>
  );
};

export default SenserContainer;
