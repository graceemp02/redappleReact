/** @format */

import SenserContainer from './SenserContainer';
import { Paper, Typography } from '@mui/material/';
import SubTxt from './SubTxt';

const OutdoorSensors = () => {
  return (
    <Paper
      sx={{
        marginBottom: '10px',
        flex: 4,
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: '1em',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='body1'>
          Temp
          <br />
          74.4°F
        </Typography>
        <Typography
          variant='h5'
          fontWeight={'bold'}
          sx={{ textDecoration: 'Underline', color: 'black' }}>
          OUTDOOR SENSORS
        </Typography>
        <Typography variant='body1'>
          Hum
          <br />
          34%
        </Typography>
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <SenserContainer max={100} lable={<SubTxt lable={'O'} sub={3} />} ht={0} />
        <SenserContainer max={100} lable={<SubTxt lable={'SO'} sub={2} />} ht={0} />
        <SenserContainer max={100} lable={<SubTxt lable={'NO'} sub={2} />} ht={1} />
        <SenserContainer max={1000} lable={<SubTxt lable={'CO'} sub={2} />} ht={392} />
        <SenserContainer max={100} lable={'CO'} ht={0} />
        <SenserContainer max={100} lable={'PM2.5'} ht={8} />
        <SenserContainer max={100} lable={'PM10'} ht={8} />
      </div>
    </Paper>
  );
};

export default OutdoorSensors;
