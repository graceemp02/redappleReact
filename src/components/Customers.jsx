/** @format */

import { useState, useContext, useMemo, useEffect } from 'react';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { TextField, Typography } from '@mui/material';
import axios from 'axios';
import { CustomerContext } from '../CustomerContext';
let customers = [];
axios
  .get('https://redapple.graceautomation.tech/customers.php')
  .then(result => {
    customers = result.data;
  })
  .catch(error => console.log(error));
function Customers() {
  const { setCustomerID } = useContext(CustomerContext);
  const [selectedIndex, setSelectedIndex] = useState(customers[0].id);
  const [query, setQuery] = useState('');
  useEffect(() => {
    setCustomerID(customers[0].id);
  }, []);
  const handleListItemClick = (event, index) => {
    setCustomerID(index);
    setSelectedIndex(index);
  };
  const filteredCustomers = useMemo(() => {
    return customers.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <div style={{ height: { xs: 'auto', sm: '50%' }, display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          position: 'relative',
        }}>
        <Typography
          width={'50%'}
          fontWeight={'bold'}
          display={'inline'}
          sx={{
            textDecoration: 'Underline',
            color: 'black',
            mb: 0.5,
            ml: 0.2,
            fontSize: '3.3vh!important',
          }}>
          CUSTOMERS
        </Typography>
        <TextField
          value={query}
          autoFocus
          variant='filled'
          onChange={e => setQuery(e.target.value)}
          label='Search Customer'
          size='small'
          sx={{
            maxHeight: '3.3vh',
            width: '45%',
            position: 'absolute',
            right: 0,
            top: 0,
            fontSize: '2vh',
            marginTop: '-15px',
          }}
        />
      </div>
      <Paper
        sx={{
          marginBottom: '15px',
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1vh',
          display: 'flex',
          padding:0
        }}>
        <List
          component='nav'
          aria-label='customers'
          sx={{
            flex: 1,
            minHeight: 'auto',
            // height: { xs: 'auto', sm: '42vh' },
            maxHeight: { xs: '300px', sm: '42vh' },
            overflow: 'auto',
            borderRadius: '1vh',
          }}>
          {filteredCustomers.map(row => {
            return (
              <>
                <ListItemButton
                  sx={{ padding: '0.3rem 1rem' }}
                  divider={filteredCustomers.length - 1 === row.id ? false : true}
                  key={row.id}
                  selected={selectedIndex === row.id}
                  onClick={event => handleListItemClick(event, row.id)}>
                  <ListItemText primary={row.name} sx={{ m: 0, fontSize: '2vh !important' }} />
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
