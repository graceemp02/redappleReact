/** @format */

import React, { useState } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { TextField, Typography } from '@mui/material';
const rows = ['Frozen', 'Ice cream sandwich', 'Eclair', 'Frozen', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread', 'Frozen yoghurt', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread'];

let newRows = rows.slice();

function Customers() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Typography variant='h4' fontWeight={'bold'} color={'black'} pl={1} sx={{ textDecoration: 'Underline' }}>
          MACHINES
        </Typography>
      </div>
      <Paper marginBottom={2} sx={{ flex: '1', width: '100%', bgcolor: 'background.paper', borderRadius: '1em' }}>
        <List component='nav' aria-label='secondary' sx={{minHeight:'340px', height: '45vh', overflow: 'auto' }}>
          {newRows.map((row, index) => {
            return (
              <>
                <ListItemButton
                  sx={{ paddingBlock: 0 }}
                  divider={newRows.length - 1 === index ? false : true}
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
    </div>
  );
}
export default Customers;
