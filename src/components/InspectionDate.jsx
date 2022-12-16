/** @format */

import { Box, Button, Paper, TextField, Typography } from '@mui/material/';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useContext, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MachineContext } from '../MachineContext';
import { DateContext } from '../DateContext';

import axios from 'axios';

const IndoorSensors = () => {
  const [value, setValue] = useState(dayjs(new Date()));
  const { machineID } = useContext(MachineContext);
  const { setDate } = useContext(DateContext);

  const handleChange = newValue => {
    setValue(newValue);
    console.log(newValue.date());
    console.log(newValue.month() + 1);
    console.log(newValue.year());
  };
  const handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('api', machineID);
    formData.append('date', `${value.year()}-${value.month() + 1}-${value.date()}`);
    axios
      .post('https://redapple.graceautomation.tech/inspection.php', formData)
      .then(res => {
        console.log(
          res.data ? setDate(`${value.month() + 1}-${value.date()}-${value.year()}`) : 'error'
        );
      })
      .catch(error => console.log(error));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        sx={{
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1vh',
          p: '1vh',
        }}>
        <Typography
          fontWeight={'bold'}
          sx={{ textDecoration: 'Underline', color: 'black', fontSize: '3.1vh' }}>
          EDIT INSPECTION DATE
        </Typography>
        <Box
          onSubmit={handleSubmit}
          component='form'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBlock: '1vh',
          }}>
          <DesktopDatePicker
            label='Select Date'
            inputFormat='DD/MM/YYYY'
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} />}
          />
          <Button sx={{ height: '5vh' }} variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default IndoorSensors;
