/** @format */

import { Box, Button, Paper, TextField, Typography } from '@mui/material/';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useContext, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MachineContext } from '../MachineContext';
import { ReloadContext } from '../ReloadContext';

import axios from 'axios';

const IndoorSensors = () => {
  const [value, setValue] = useState(dayjs(new Date()));
  const { machineID } = useContext(MachineContext);
  const { reload, setReload } = useContext(ReloadContext);

  const handleChange = newValue => {
    setValue(newValue);
    console.log(newValue.date());
    console.log(newValue.month() + 1);
    console.log(newValue.year());
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submit fn is called');
    let formData = new FormData();
    formData.append('api', machineID);
    formData.append('date', `${value.year()}-${value.month() + 1}-${value.date()}`);
    axios
      .post('https://redapple.graceautomation.tech/inspection.php', formData)
      .then(res => {
        console.log(res.data);
        console.log(reload);
        res.data && setReload(reload + 1);
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
          borderRadius: '1em 1em 0em 0em',
          p: { xs: 1, sm: 2 },
        }}>
        <Typography
          variant='h5'
          fontWeight={'bold'}
          sx={{ textDecoration: 'Underline', color: 'black' }}>
          EDIT INSPECTION DATE
        </Typography>
        <Box
          onSubmit={handleSubmit}
          component='form'
          sx={{
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
          <Button sx={{ height: '40px' }} variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default IndoorSensors;
