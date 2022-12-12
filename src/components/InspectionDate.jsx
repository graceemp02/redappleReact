/** @format */

import { Button, Paper, TextField, Typography } from '@mui/material/';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const IndoorSensors = () => {
  const [value, setValue] = useState(dayjs(new Date()));
  const handleChange = newValue => {
    setValue(newValue);
    console.log(value.date());
    console.log(value.month() + 1);
    console.log(value.year());
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        sx={{
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1em 1em 0em 0em',
          p: { xs: 1, sm: 2 },
        }}>
        <Typography
          variant='h5'
          fontWeight={'bold'}
          sx={{ textDecoration: 'Underline', color: 'black' }}>
          EDIT INSPECTION DATE
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBlock: '25px',
          }}>
          <DesktopDatePicker
            label='Select Date'
            inputFormat='DD/MM/YYYY'
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} />}
          />
          <Button sx={{ height: '40px' }} variant='contained'>
            Submit
          </Button>
        </div>
      </Paper>
    </LocalizationProvider>
  );
};

export default IndoorSensors;
