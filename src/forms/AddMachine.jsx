/** @format */

import {
  Box,
  Button,
  createTheme,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MyDialog from '../dialogs/MyDialog';
import { UpdateCustomersContext } from '../UpdateCustomersContext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CircularProgress from '@mui/material/CircularProgress';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

let theme = createTheme();
const AddCustomer = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const [options, setOptions] = useState([]);
  let loading = options.length === 0;
  // const loading = true;
  const [date, setDate] = useState(dayjs(new Date()));
  const [customerId, setCustomerId] = useState('');

  const nameRef = useRef();
  const locationRef = useRef();
  const apiRef = useRef();
  const dateRef = useRef();
  const { setUpdateCustomers } = useContext(UpdateCustomersContext);
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    console.log(customerId);
    console.log(nameRef.current.value);
    console.log(locationRef.current.value);
    console.log(apiRef.current.value);
    console.log(dateRef.current.value);

    // formData.append('name', nameRef.current.value);
    // formData.append('email', emailRef.current.value);
    // formData.append('phone', phoneRef.current.value);
    // formData.append('pwd', pwdRef.current.value);
    // formData.append('companyName', cNameRef.current.value);
    // formData.append('companyId', cIdRef.current.value);
    // formData.append('companyPwd', cPwdRef.current.value);

    // await axios
    //   .post('https://redapple.graceautomation.tech/php/addCustomer.php', formData)
    //   .then(result => {
    //     const res = result.data['res'];
    //     if (res === 'true') {
    //       //empty refs here
    //       setUpdateCustomers(pre => !pre);
    //       setOpenDialog(true);
    //     } else {
    //       console.log('New Machine is not added');
    //     }
    //   })
    //   .catch(error => console.log(error));
  };
  //pasting mui useeffect
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    if (active) {
      (async () => {
        await axios
          .get('customers.php')
          .then(result => {
            setOptions(result.data);
          })
          .catch(error => console.log(error));
      })();
    }

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <div className='centerTable'>
      <Paper sx={{ p: 4, width: '95%', pt: 0, overflow: 'auto', maxHeight: '93vh' }}>
        <div
          style={{
            background: 'white',
            position: 'sticky',
            height: '8vh',
            zIndex: '1',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Typography
            pl={1}
            display={'inline'}
            sx={{
              fontSize: '2.3vh',

              fontWeight: 'bold',
              color: 'black',
            }}>
            Add New Machine
          </Typography>
          <Button onClick={() => navigate('/machines')} variant='contained' sx={{ maxWidth: 200 }}>
            Back to List
          </Button>
        </div>
        <Box component='form' onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id='select-customer'>Select Customer</InputLabel>
            <Select
              endAdornment={
                <InputAdornment position='start'>
                  {loading ? (
                    <CircularProgress sx={{ mr: '10px' }} color='inherit' size={20} />
                  ) : null}
                </InputAdornment>
              }
              required
              labelId='select-customer'
              label='Select Customer'
              value={customerId}
              onChange={e => {
                return setCustomerId(e.target.value);
              }}>
              {options.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            margin='normal'
            inputRef={nameRef}
            required
            fullWidth
            label='Name'
            size={isMobile ? 'small' : 'medium'}
          />
          <TextField
            autoComplete='off'
            margin='normal'
            inputRef={locationRef}
            required
            fullWidth
            label='Location'
            size={isMobile ? 'small' : 'medium'}
          />
          <TextField
            autoComplete='off'
            margin='normal'
            inputRef={apiRef}
            required
            fullWidth
            label='Api Token'
            size={isMobile ? 'small' : 'medium'}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label='Select Inspection Date'
              inputFormat='YYYY-MM-DD'
              inputRef={dateRef}
              value={date}
              onChange={val => setDate(val)}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            type='submit'
            variant='contained'
            sx={{ maxWidth: 200, ml: '1vh', mt: '1vh' }}
            color='success'>
            Create Machine
          </Button>
        </Box>
      </Paper>
      {openDialog && (
        <MyDialog
          title='Success'
          des='New Machine is added Successful.'
          actions={[
            { onClick: () => navigate('/machines'), color: 'primary', text: 'Back to List' },
            { onClick: () => setOpenDialog(false), color: 'success', text: 'Create New' },
          ]}
        />
      )}
    </div>
  );
};

export default AddCustomer;
