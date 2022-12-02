/** @format */

import React, { useState } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { TextField, Typography } from '@mui/material';
// const rows = ['Fro?zen', 'Frozen', 'Ice cream sandwich', 'Eclair', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread', 'Frozen yoghurt', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread'];
const rows = ['anees'];
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
    <div style={{  height: '50%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Typography width={'50%'} fontSize={'auto'} variant='h4' fontWeight={'bold'} display={'inline'} sx={{ textDecoration: 'Underline', color: 'black' }}>
          CUSTOMERS
        </Typography>
        <TextField
          width={'50%'}
          variant='filled'
          onChange={handleSearch}
          label='Search Customer'
          size='small'
          sx={{
            bgcolor: 'white',
            p: '0 !important',
          }}
        />
      </div>
      <Paper sx={{marginBottom:'15px', flex: 1, width: '100%', bgcolor: 'background.paper', borderRadius: '1em', display: 'flex' }}>
        <List component='nav' aria-label='secondary' sx={{ flex: 1,  minHeight:'350px',height: '44vh', overflow: 'auto', borderRadius: '10px' }}>
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
