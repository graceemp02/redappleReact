/** @format */
import { lazy, useContext, useEffect, useState } from 'react';
import { Stack, Button, Typography, Switch, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import OutReportsTable from './OutReportsTable';
import axios from 'axios';
import { MachineContext } from '../../MachineContext';
import InReportsTable from './InReportsTable';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// const InReportsTable = lazy(() => import('./InReportsTable'));
var date = new Date();
const InColumns = [
  { id: 'date', label: 'Date', minWidth: 50, numeric: true },
  { id: 'time', label: 'Time', minWidth: 50, numeric: true },
  { id: 'AQI', label: 'AQI', minWidth: 50, numeric: true },
  { id: 'In_Temperature', label: 'Temperature', minWidth: 50, numeric: true },
  { id: 'In_Humidity', label: 'Humidity', minWidth: 50, numeric: true },
  { id: 'In_CO2', label: 'CO2', minWidth: 50, numeric: true },
  { id: 'In_VOC', label: 'VOC', minWidth: 50, numeric: true },
  { id: 'In_PM_2.5', label: 'PM 2.5', minWidth: 50, numeric: true },
  { id: 'In_PM_10', label: 'PM 1.0', minWidth: 50, numeric: true },
  { id: 'In_CO', label: 'CO', minWidth: 50, numeric: true },
];
const Reports = () => {
  const { machineID } = useContext(MachineContext);
  const [data, setData] = useState([{}]);
  const [switchVal, setSwitchVal] = useState(() => {
    const oldSwitch = localStorage.getItem('admin_reportings_reports_switch');
    if (oldSwitch) {
      return oldSwitch === 'true';
    } else return false;
  });
  const [start, setStart] = useState(() =>
    new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString()
  );
  const [end, setEnd] = useState(new Date().toLocaleDateString());
  const [isLoading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    await axios
      .get(`reportings/reports.php?api=${machineID}&fromDate=${start}&toDate=${end}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  };
  const handleSwitch = e => {
    setSwitchVal(e.target.checked);
    localStorage.setItem('admin_reportings_reports_switch', e.target.checked);
  };
  const handleDate = async e => {
    e.preventDefault();
    await getData();
  };

  useEffect(() => {
    getData();
  }, [machineID]);

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.text('Indoor Reports', 20, 10);
    doc.autoTable({
      theme: 'grid',
      columns: InColumns.map(col => ({ ...col, dataKey: col.id })),
      body: data,
    });
    doc.save('table.pdf');
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
          <Stack
            component={'form'}
            onSubmit={handleDate}
            direction={{ xs: 'column', sm: 'row' }}
            gap={1}>
            <DesktopDatePicker
              disableMaskedInput
              inputFormat='MM-DD-YYYY'
              required
              label='Start Date'
              value={start}
              onChange={newValue => {
                setStart(`${newValue.$M + 1}/${newValue.$D}/${newValue.$y}`);
              }}
              renderInput={params => (
                <TextField
                  required
                  size='small'
                  sx={{ '&': { width: { xs: '70vw', sm: '12rem' } } }}
                  {...params}
                />
              )}
            />
            <DesktopDatePicker
              disableMaskedInput
              inputFormat='MM-DD-YYYY'
              required
              label='End Date'
              value={end}
              onChange={newValue => {
                setEnd(`${newValue.$M + 1}/${newValue.$D}/${newValue.$y}`);
              }}
              renderInput={params => (
                <TextField
                  required
                  size='small'
                  sx={{ '&': { width: { xs: '70vw', sm: '12rem' } } }}
                  {...params}
                />
              )}
            />
            <Button type='submit' disabled={isLoading} variant='contained'>
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
          <Button
            onClick={handlePDFDownload}
            size='small'
            disabled={isLoading}
            variant='contained'
            color='success'>
            PDF
          </Button>
          <Button size='small' disabled={isLoading} variant='contained' color='success'>
            Print
          </Button>
        </Stack>
      </Stack>
      {switchVal ? (
        <OutReportsTable data={data} loading={isLoading} />
      ) : (
        <InReportsTable columns={InColumns} data={data} loading={isLoading} />
      )}
    </div>
  );
};

export default Reports;
