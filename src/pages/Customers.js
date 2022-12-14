/** @format */
import { styled } from '@mui/material/styles';

import {
  Button,
  // createTheme,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  // useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';

// let theme = createTheme();

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const rows = [
  {
    sr: 1,
    name: 'anees',
    email: 'anees@anees.com',
    phone: '03036889723',
  },
  {
    sr: 2,
    name: 'anees',
    email: 'anees@anees.com',
    phone: '03036889723',
  },
  {
    sr: 3,
    name: 'anees',
    email: 'anees@anees.com',
    phone: '03036889723',
  },
  {
    sr: 4,
    name: 'anees',
    email: 'anees@anees.com',
    phone: '03036889723',
  },
];
const headStyle = {
  color: 'black',
  fontWeight: 'bold',
};
const Customers = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className='centerTable'>
      <Paper sx={{ p: 3, width: '95%', overflow: 'auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Typography
            variant='h5'
            pl={1}
            display={'inline'}
            sx={{ textDecoration: 'Underline', fontWeight: 'bold', color: 'black' }}>
            CUSTOMERS
          </Typography>
          <TextField
            variant='outlined'
            label='Search Customer'
            sx={{
              bgcolor: 'white',
              p: '0 !important',
            }}
          />
          <Button variant='contained' color='success' sx={{ width: 200 }}>
            Create New
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow sx={headStyle}>
              <TableCell>Ser</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Cell No</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.sr}>
                <TableCell>{row.sr}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'flex-start',
                    }}>
                    <Button variant='contained' color='success' sx={{ marginInline: 0.5 }}>
                      Show{'            '}
                    </Button>
                    <Button variant='contained' sx={{ marginInline: 0.5 }}>
                      Edit
                    </Button>
                    <Divider orientation='vertical' flexItem />
                    <Button variant='contained' color='error' sx={{ marginInline: 0.5 }}>
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Customers;
