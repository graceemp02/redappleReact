/** @format */

import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import axios from 'axios';
import { CustomerContext } from '../CustomerContext';
import { MachineContext } from '../MachineContext';

function Machines() {
  const { customerID } = useContext(CustomerContext);
  const { machineID, setMachineID } = useContext(MachineContext);
  const selectedApiClient = localStorage.getItem('admin_api_client');
  const [machines, setMachines] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(() => (machineID ? machineID : 0));
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get('machines.php', {
        params: { cid: customerID },
        cancelToken: source.token,
      })
      .then(result => {
        setMachines(result.data);
        if (!machineID || selectedApiClient !== customerID)
          setSelectedIndex(result.data[0].apiToken);
        setMachineID(result.data[0].apiToken);
        localStorage.setItem('admin_api', result.data[0].apiToken);
        localStorage.setItem('admin_api_client', customerID);
      })
      .catch(error => console.log(error));
    return () => {
      source.cancel();
    };
  }, [customerID]);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setMachineID(index);
    localStorage.setItem('admin_api', index);
    localStorage.setItem('admin_api_client', customerID);
  };
  return (
    <div style={{ height: { xs: 'auto', sm: '50%' }, display: 'flex', flexDirection: 'column' }}>
      <Typography
        fontSize={'3.3vh'}
        variant='h4'
        fontWeight={'bold'}
        display={'inline'}
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5, ml: 0.5, textAlign: 'left' }}>
        MACHINES
      </Typography>

      <Paper
        sx={{
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1vh',
          display: 'flex',
        }}>
        <List
          component='nav'
          aria-label='secondary'
          sx={{
            flex: 1,
            minHeight: 'auto',
            // height: { xs: 'auto', sm: '43vh' },
            maxHeight: { xs: '300px', sm: '43vh' },
            overflow: 'auto',
            borderRadius: '1vh',
          }}>
          {machines.map(row => {
            return (
              <>
                <ListItemButton
                  sx={{ padding: '0.3rem 1rem' }}
                  divider
                  key={row.apiToken}
                  selected={selectedIndex === row.apiToken}
                  onClick={event => handleListItemClick(event, row.apiToken)}>
                  <ListItemText
                    primary={row.name}
                    key={row.apiToken}
                    sx={{ m: 0, fontSize: '2vh !important' }}
                  />
                </ListItemButton>
              </>
            );
          })}
        </List>
      </Paper>
    </div>
  );
}
export default Machines;
