import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system'
import React from 'react'

function CDashboard() {
  return (
    <div>
      <Typography fontWeight={'bold'} align='left' pl={2} variant='h5' sx={{ textDecoration: 'Underline', color: 'black' }}>
        Dashboard
      </Typography>
      <div style={{ display: 'flex', backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-between', padding: '.75em', minHeight: '95vh' }}>
        <div>AQI</div>
        <div>F</div>
        <div>HEALTHY INDOOR AIR QUALITY</div>
        <div>Humidty</div>
        <div>Confrence Room</div>
      </div>
    </div>
  );
}

export default CDashboard;