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
import { ReloadContext } from '../ReloadContext';

let iMachines = [];
function Machines() {
  const { customerID } = useContext(CustomerContext);
  const { setMachineID } = useContext(MachineContext);
  const { reload } = useContext(ReloadContext);

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
  }, [reload, customerID]);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setMachineID(index);
  };
  return (
    <div style={{ height: { xs: 'auto', sm: '50%' }, display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Typography
          // width={'50%'}
          fontSize={'3.3vh'}
          variant='h4'
          fontWeight={'bold'}
          display={'inline'}
          sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5, ml: 0.5 }}>
          MACHINES
        </Typography>
      </div>
      <Paper
        sx={{
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1em 1em 0em 0em',
          display: 'flex',
        }}>
        <List
          component='nav'
          aria-label='secondary'
          sx={{
            flex: 1,
            minHeight: 'auto',
            height: { xs: 'auto', sm: '44vh' },
            maxHeight: { xs: '300px', sm: '44vh' },
            overflow: 'auto',
            borderRadius: '1vh',
          }}>
          {machines.map(row => {
            return (
              <>
                <ListItemButton
                  sx={{ padding: '0.3rem' }}
                  divider
                  key={row.id}
                  selected={selectedIndex === row.apiToken}
                  onClick={event => handleListItemClick(event, row.apiToken)}>
                  <ListItemText primary={row.name} sx={{ m: 0, fontSize: '2vh !important' }} />
                </ListItemButton>
              </>
            );
          })}
          <ListItemButton></ListItemButton>
        </List>
      </Paper>
      <Paper></Paper>
    </div>
  );
}
export default Machines;