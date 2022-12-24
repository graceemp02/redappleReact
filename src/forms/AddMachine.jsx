/** @format */

import {
  Box,
  Button,
  createTheme,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
// import { DesktopDatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MyDialog from '../dialogs/MyDialog';
import { UpdateCustomersContext } from '../UpdateCustomersContext';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

let theme = createTheme();
const AddCustomer = () => {
  const [openDialog, setOpenDialog] = useState(false);

  //customer select
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const loading = options.length === 0;
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

    // formData.append('name', nameRef.current.value);
    // formData.append('email', emailRef.current.value);
    // formData.append('phone', phoneRef.current.value);
    // formData.append('pwd', pwdRef.current.value);
    // formData.append('companyName', cNameRef.current.value);
    // formData.append('companyId', cIdRef.current.value);
    // formData.append('companyPwd', cPwdRef.current.value);

    await axios
      .post('https://redapple.graceautomation.tech/php/addCustomer.php', formData)
      .then(result => {
        const res = result.data['res'];
        if (res === 'true') {
          //empty refs here
          setUpdateCustomers(pre => !pre);
          setOpenDialog(true);
        } else {
          console.log('New Customer is not added');
        }
      })
      .catch(error => console.log(error));
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
            // console.log(result);
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
          <Autocomplete
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
          />
          <TextField
            margin='normal'
            type='email'
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
            inputProps={{
              autoComplete: 'new-password',
            }}
            autoComplete='off'
            margin='normal'
            inputRef={apiRef}
            required
            fullWidth
            label='Api Token'
            size={isMobile ? 'small' : 'medium'}
          />
          <TextField
            inputProps={{
              autoComplete: 'new-password',
            }}
            autoComplete='off'
            margin='normal'
            inputRef={dateRef}
            required
            fullWidth
            label='Api Token'
            size={isMobile ? 'small' : 'medium'}
          />
          {/* <DesktopDatePicker
              className='datePicker'
              label='Select Date'
              inputFormat='DD/MM/YYYY'
              value={value}
              onChange={handleChange}
              renderInput={params => <TextField {...params} />}
            /> */}

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
