/** @format */
import {  Typography } from '@mui/material';
import IndoorSensors from './IndoorSensors';
import OutdoorSensors from './OutdoorSensors';
import InspectionDate from './InspectionDate';

function Sensors() {
  return (
    <>
      <Typography
        align='left'
        fontSize={'auto'}
        variant='h4'
        pl={2}
        fontWeight={'bold'}
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5 }}>
        SENSORS
      </Typography>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <IndoorSensors />
        <OutdoorSensors/>
        <InspectionDate />
      </div>
    </>
  );
}
export default Sensors;
