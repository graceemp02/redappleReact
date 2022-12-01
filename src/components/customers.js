/** @format */

import React, { useState } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { TextField, Typography } from '@mui/material';
const rows = ['Frozen', 'Frozen', 'Ice cream sandwich', 'Eclair', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread', 'Frozen yoghurt', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread'];

let newRows = rows.slice();

function Customers() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  function handleSearch(e) {
    newRows = [];
    setSearchTerm('');
    setSearchTerm(e.target.value);
    rows.forEach(val => {
      if (searchTerm === '') newRows.push(val);
      if (val.toLowerCase().includes(searchTerm.toLowerCase())) newRows.push(val);
    });
  }
  return (
    <div style={{ height: '50%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Typography variant='h5' fontWeight={'bold'} pl={1} display={'inline'} sx={{ textDecoration: 'Underline', color: 'black' }}>
          CUSTOMERS
        </Typography>
        <TextField
          variant='filled'
          onChange={handleSearch}
          label='Search Customer'
          sx={{
            bgcolor: 'white',
            p: '0 !important',
          }}
        />
      </div>
      <Paper marginBottom={2} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '1em' }}>
        <List component='nav' aria-label='secondary' sx={{ maxHeight: '42vh', overflow: 'auto', borderRadius: '10px' }}>
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
      <Paper></Paper>
    </div>
  );
}
export default Customers;
