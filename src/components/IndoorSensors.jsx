/** @format */

import SenserContainer from './SenserContainer';
import { Paper, Typography } from '@mui/material/';
import SubTxt from './SubTxt';

const IndoorSensors = () => {
  return (
    <Paper
      sx={{
        marginBottom: '10px',
        flex: 4,
        height: '100%',
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
          INDOOR SENSORS
        </Typography>
        <Typography variant='body1'>
          Hum
          <br />
          34%
        </Typography>
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <SenserContainer max={100} lable={'---'} ht={0} />
        <SenserContainer max={100} lable={'---'} ht={0} />
        <SenserContainer max={100} lable={'VOC'} ht={1} />
        <SenserContainer max={1000} lable={<SubTxt lable={'CO'} sub={2} />} ht={900} />
        <SenserContainer max={100} lable={'CO'} ht={0} />
        <SenserContainer max={100} lable={'PM2.5'} ht={8} />
        <SenserContainer max={100} lable={'PM10'} ht={8} />
      </div>
    </Paper>
  );
};

export default IndoorSensors;
