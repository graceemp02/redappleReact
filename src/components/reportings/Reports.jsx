/** @format */
import { useState } from 'react';
import { Stack, Button, Typography, Switch, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import OutReportsTable from './OutReportsTable';
import InReportsTable from './InReportsTable';
var date = new Date();

const Reports = () => {
  const [switchVal, setSwitchVal] = useState(() => {
    const oldSwitch = localStorage.getItem('admin_reportings_reports_switch');
    if (oldSwitch) {
      return oldSwitch === 'true';
    } else return false;
  });
  const [start, setStart] = useState(new Date(date.getFullYear(), date.getMonth(), 1));
  const [end, setEnd] = useState(new Date());
  const [isLoading, setLoading] = useState(false);

  const handleSwitch = e => {
    setSwitchVal(e.target.checked);
    localStorage.setItem('admin_reportings_reports_switch', e.target.checked);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handleDate = () => {
    setLoading(true);
    setTimeout(() => {
      console.log(start.getFullYear());
      console.log(end);
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        sx={{ justifyContent: 'space-between', alignItems: 'center', marginBlock: 2 }}
        gap={3}>
        <Stack direction='row' alignItems='center' sx={{ order: 0 }}>
          <Typography variant='body1'>Indoor</Typography>
          <Switch
            disabled={isLoading}
            sx={{
              '.MuiSwitch-thumb': { color: '#1976d2' },
              '.MuiSwitch-track': { backgroundColor: '#1976d2' },
            }}
            checked={switchVal}
            onChange={handleSwitch}
          />
          <Typography variant='body1'>Outdoor</Typography>
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={1}>
            <DesktopDatePicker
              disableMaskedInput
              inputFormat='MMMM DD, YYYY'
              required
              label='Start Date'
              value={start}
              onChange={newValue => setStart(newValue)}
              renderInput={params => (
                <TextField
                  required
                  size='small'
                  sx={{ '&': { width: { xs: '70vw', sm: '11rem' } } }}
                  {...params}
                />
              )}
            />
            <DesktopDatePicker
              disableMaskedInput
              inputFormat='MMMM DD, YYYY'
              required
              label='End Date'
              value={end}
              onChange={newValue => setEnd(newValue)}
              renderInput={params => (
                <TextField
                  required
                  size='small'
                  sx={{ '&': { width: { xs: '70vw', sm: '11rem' } } }}
                  {...params}
                />
              )}
            />
            <Button disabled={isLoading} onClick={handleDate} variant='contained'>
              Submit
            </Button>
          </Stack>
        </LocalizationProvider>
        <Stack direction='row' gap={1}>
          <Button size='small' disabled={isLoading} variant='contained' color='success'>
            CSV
          </Button>
          <Button size='small' disabled={isLoading} variant='contained' color='success'>
            Excel
          </Button>
          <Button size='small' disabled={isLoading} variant='contained' color='success'>
            PDF
          </Button>
          <Button size='small' disabled={isLoading} variant='contained' color='success'>
            Print
          </Button>
        </Stack>
      </Stack>
      {switchVal ? <OutReportsTable loading={isLoading} /> : <InReportsTable loading={isLoading} />}
    </div>
  );
};

export default Reports;
