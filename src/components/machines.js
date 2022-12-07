/** @format */

import React, { useState } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {  Typography } from '@mui/material';
const machines = [
  'Anees',
  'Malik',
  'abc',
  'h',
  
];

// const machines = ['anees'];

function Machines() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
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
          width={'50%'}
          fontSize={'auto'}
          variant='h4'
          fontWeight={'bold'}
          display={'inline'}
          sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5 }}>
          MACHINES
        </Typography>
      </div>
      <Paper
        sx={{
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1em',
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
            borderRadius: '10px',
          }}>
          {machines.map((row, index) => {
            return (
              <>
                <ListItemButton
                  sx={{ paddingBlock: 0 }}
                  divider={machines.length - 1 === index ? false : true}
                  key={row}
                  selected={selectedIndex === index}
                  onClick={event => handleListItemClick(event, index)}>
                  <ListItemText primary={row} />
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
