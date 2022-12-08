/** @format */

import React from 'react';

const SenserContainer = ({ max, lable, ht }) => {
  const containerHeight = (ht * 100) / max;
  return (
    <div style={{ width: 'calc(100%/8)' }}>
      <div className='sensorContainer'>
        <strong
          style={{
            height: `${containerHeight}%`,
            background: '#3aa5dd',
            width: '100%',
            display: 'block',
            position: 'absolute',
            bottom: 0,
          }}>
          {containerHeight ? containerHeight : 0}%
        </strong>
      </div>
      <p>
        {lable}
        <br />
        {ht}
      </p>
    </div>
  );
};

export default SenserContainer;
