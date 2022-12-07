/** @format */

import React, { useState } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { TextField, Typography } from '@mui/material';
import { useMemo } from 'react';
const customers = ['Anees', 'Malik', 'abc', 'h'];

// const customers = ['anees'];

function Customers() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [query, setQuery] = useState('');
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const filteredCustomers = useMemo(() => {
    return customers.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

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
          CUSTOMERS
        </Typography>
        <TextField
          value={query}
          autoFocus
          width={'50%'}
          variant='filled'
          onChange={e => setQuery(e.target.value)}
          label='Search Customer'
          size='small'
          sx={{
            background: 'rgba(255,255,255,0) ',
            p: '0 !important',
          }}
        />
      </div>
      <Paper
        sx={{
          marginBottom: '15px',
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
          {filteredCustomers.map((row, index) => {
            return (
              <>
                <ListItemButton
                  sx={{ paddingBlock: 0 }}
                  divider={filteredCustomers.length - 1 === index ? false : true}
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
