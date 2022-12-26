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

import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

let theme = createTheme();
const AddCustomer = () => {
  const [openDialog, setOpenDialog] = useState(false);

  //customer select
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const loading = options.length === 0;
  const [date, setDate] = useState(dayjs(new Date()));
  const [age, setAge] = useState('');
  //customer select

  const customerRef = useRef();
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
    console.log(age);

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
          .get('https://redapple.graceautomation.tech/php/customers.php')
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

  //   useEffect(() => {
  //     if (!open) {
  //       setOptions([]);
  //     }
  //   }, [open]);

  //pasting mui useeffect

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
          {/* <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue);
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue);
              setInputValue(newInputValue);
            }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={option => option.name}
            options={options}
            loading={loading}
            renderInput={params => (
              <TextField
                {...params}
                label='Select Customer'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color='inherit' size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          /> */}
          {/* pasting copied select */}
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-helper-label'>Select Customer</InputLabel>
            <Select
              InputProps={{
                endAdornment: (
                  <React.Fragment>
                    {/* {loading ? <CircularProgress color='inherit' size={20} /> : null} */}
                    <CircularProgress color='inherit' size={20} />
                  </React.Fragment>
                ),
              }}
              required
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper'
              value={age}
              label='Age'
              onChange={e => {
                return setAge(e.target.value);
              }}>
              {options.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* pasting copied select */}
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
          <TextField
            autoComplete='off'
            margin='normal'
            inputRef={dateRef}
            required
            fullWidth
            label='Api Token'
            size={isMobile ? 'small' : 'medium'}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label='Select Inspection Date'
              inputFormat='DD/MM/YYYY'
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
