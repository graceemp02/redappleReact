/** @format */
import { styled } from '@mui/material/styles';

import {
  Button,
  createTheme,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let theme = createTheme();

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
let rows = [];
axios.get('https://redapple.graceautomation.tech/php/customers.php').then(result => {
  rows = result.data;
});
const headStyle = {
  color: 'black',
  fontWeight: 'bold',
};
const Customers = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [query, setQuery] = useState('');
  const filteredRows = useMemo(() => {
    return rows.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);
  return (
    <div className='centerTable'>
      <Paper sx={{ p: 2, width: '95%', pt: 0, overflow: 'auto', maxHeight: '93vh' }}>
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
              textDecoration: 'Underline',
              fontWeight: 'bold',
              color: 'black',
            }}>
            CUSTOMERS
          </Typography>
          <TextField
            display={isMobile ? 'none' : 'none'}
            value={query}
            variant='outlined'
            onChange={e => setQuery(e.target.value)}
            label='Search Customer'
            sx={{
              display: isMobile ? 'none' : '',
              bgcolor: 'white',
              p: '0 !important',
            }}
          />
          <Button
            onClick={() => navigate('/clints/new')}
            variant='contained'
            color='success'
            sx={{ maxWidth: 200 }}>
            Create New
          </Button>
        </div>

        <Table sx={{ fontSize: '1.7vh' }}>
          <TableHead
            sx={{
              outline: '1px solid black',
              position: 'sticky',
              top: '8.1vh',
              background: 'white',
              zIndex: 1,
              borderRadius: '.3em',
            }}>
            <TableRow sx={headStyle}>
              <TableCell>Ser</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell sx={{ display: isMobile ? 'none' : '' }}>email</TableCell>
              <TableCell sx={{ display: isMobile ? 'none' : '' }}>Cell No</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ marginTop: '10vh' }}>
            {filteredRows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell sx={{ display: isMobile ? 'none' : '' }}>{row.email}</TableCell>
                <TableCell sx={{ display: isMobile ? 'none' : '' }}>{row.phone}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'flex-start',
                    }}>
                    <Button
                      variant='contained'
                      color='success'
                      sx={{ marginInline: 0.5, height: '20px', width: '50px', mb: '5px' }}>
                      Show
                    </Button>
                    <Button
                      variant='contained'
                      sx={{ marginInline: 0.5, height: '20px', width: '50px', mb: '5px' }}>
                      Edit
                    </Button>
                    {!isMobile && (
                      <Divider orientation='vertical' flexItem sx={{ marginInline: '5px' }} />
                    )}
                    <Button
                      variant='contained'
                      color='error'
                      sx={{ marginInline: 0.5, height: '20px', width: '50px' }}>
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {filteredRows.length === 0 && (
          <Typography sx={{ textAlign: 'center', fontSize: '2vh', margin: '4vh' }}>
            No Customer with entered name.
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default Customers;
