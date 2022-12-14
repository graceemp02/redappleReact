/** @format */
import { useContext, useEffect, useState } from 'react';
import SenserContainer from './SenserContainer';
import { Paper, Typography } from '@mui/material/';
import SubTxt from './SubTxt';
import { MachineContext } from '../MachineContext';
import axios from 'axios';

const IndoorSensors = () => {
  const [res, setRes] = useState({});
  const { machineID } = useContext(MachineContext);
  useEffect(() => {
    axios
      .get('https://redapple.graceautomation.tech/indoor.php', {
        params: { api: machineID },
      })
      .then(result => {
        setRes(result.data);
      })
      .catch(error => console.log(error));
  }, [machineID]);
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
          {res.temp}°F
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
          {res.hum}%
        </Typography>
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <SenserContainer val={1} lable={'---'} ht={1} />
        <SenserContainer val={1} lable={'---'} ht={1} />
        <SenserContainer val={res.vocVl} lable={'VOC'} ht={res.vocHt} />
        <SenserContainer val={res.co2Vl} lable={<SubTxt lable={'CO'} sub={2} />} ht={res.co2Ht} />
        <SenserContainer val={res.coVl} lable={'CO'} ht={res.coHt} />
        <SenserContainer val={res.pm25Vl} lable={'PM2.5'} ht={res.pm25Ht} />
        <SenserContainer val={res.pm10Vl} lable={'PM10'} ht={res.pm10Ht} />
      </div>
    </Paper>
  );
};

export default IndoorSensors;
