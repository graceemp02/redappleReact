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

let iMachines = [];
function Machines() {
  const { customerID } = useContext(CustomerContext);
  const { setMachineID } = useContext(MachineContext);

  const [machines, setMachines] = useState(iMachines);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    axios
      .get('https://redapple.graceautomation.tech/machines.php', {
        params: { cid: customerID },
      })
      .then(result => {
        iMachines = result.data;

        setMachines(iMachines);
        setSelectedIndex(iMachines[0].apiToken);
        setMachineID(iMachines[0].apiToken);
      })
      .catch(error => console.log(error));
  }, [ customerID]);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setMachineID(index);
  };
  return (
    <div style={{ height: { xs: 'auto', sm: '50%' }, display: 'flex', flexDirection: 'column' }}>
      <Typography
        fontSize={'3.3vh'}
        variant='h4'
        fontWeight={'bold'}
        display={'inline'}
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5, ml: 0.5 ,textAlign:'left'}}>
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
                  key={row.id}
                  selected={selectedIndex === row.apiToken}
                  onClick={event => handleListItemClick(event, row.apiToken)}>
                  <ListItemText primary={row.name} sx={{ m: 0, fontSize: '2vh !important' }} />
                </ListItemButton>
              </>
            );
          })}
        </List>
      </Paper>
      <Paper></Paper>
    </div>
  );
}
export default Machines;
