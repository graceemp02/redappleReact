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
import { useEffect, useMemo, useState, useContext } from 'react';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UpdateCustomersContext } from '../UpdateCustomersContext';

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
let gRows = [];

const headStyle = {
  color: 'black',
  fontWeight: 'bold',
};
const MachinesPage = () => {
  const { updateCustomers, setUpdateCustomers } = useContext(UpdateCustomersContext);

  const [rows, setRows] = useState(gRows);
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [query, setQuery] = useState('');

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get('https://redapple.graceautomation.tech/php/machines.php', {
        cancelToken: source.token,
      })
      .then(result => {
        setRows(result.data);
      })
      .catch(error => console.log(error));
    return () => {
      source.cancel();
    };
  }, [updateCustomers]);
  const handleDel = async id => {
    console.log(`Customer with ${id} is requested to deleta`);
    let formData = new FormData();
    formData.append('toDel', id);
    await axios
      .post('https://redapple.graceautomation.tech/php/delCustomer.php', formData)
      .then(result => {
        console.log(result);
        setUpdateCustomers(pre => !pre);
      })
      .catch(error => console.log(error));
  };
  const filteredRows = useMemo(() => {
    return rows.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, rows]);

  const handleShow = index => {
    let user = rows[index];
    console.log(user);
  };
  const handleEdit = index => {
    let user = rows[index];
    navigate('/clints/edit', { state: user });
  };

  return (
    <div className='centerTable'>
      <Paper
        sx={{
          p: { xs: 1, sm: 3 },
          width: '95%',
          pt: 0,
          m: 0,
          overflow: 'auto',
          maxHeight: { xs: '85vh', sm: '93vh' },
        }}>
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
            MACHINES
          </Typography>
          <TextField
            display={isMobile ? 'none' : 'none'}
            value={query}
            variant='outlined'
            onChange={e => setQuery(e.target.value)}
            label='Search Machine'
            sx={{
              display: isMobile ? 'none' : '',
              bgcolor: 'white',
              p: '0 !important',
            }}
          />
          <Button
            onClick={() => navigate('/machines/new')}
            variant='contained'
            color='success'
            sx={{ maxWidth: 200 }}>
            Create New
          </Button>
        </div>
        <Table sx={{ fontSize: '1.65vh' }}>
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
              <TableCell>Name</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell sx={{ display: isMobile ? 'none' : '' }}>Location</TableCell>
              <TableCell sx={{ display: isMobile ? 'none' : '' }}>ApiToken</TableCell>
              <TableCell sx={{ display: isMobile ? 'none' : '' }}>Inspection Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ marginTop: '10vh' }}>
            {filteredRows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.cName}</TableCell>
                <TableCell sx={{ display: isMobile ? 'none' : '' }}>{row.location}</TableCell>
                <TableCell sx={{ display: isMobile ? 'none' : '' }}>{row.apiToken}</TableCell>
                <TableCell sx={{ display: isMobile ? 'none' : '' }}>{row.date}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'flex-start',
                    }}>
                    <Button
                      onClick={() => handleShow(index)}
                      variant='contained'
                      color='success'
                      sx={{
                        marginInline: { xs: 0, sm: 0.5 },
                        height: '20px',
                        width: '50px',
                        mb: '5px',
                      }}>
                      Show
                    </Button>
                    <Button
                      variant='contained'
                      onClick={() => handleEdit(index)}
                      sx={{
                        marginInline: { xs: 0, sm: 0.5 },
                        height: '20px',
                        width: '50px',
                        mb: '5px',
                      }}>
                      Edit
                    </Button>
                    {!isMobile && (
                      <Divider orientation='vertical' flexItem sx={{ marginInline: '5px' }} />
                    )}
                    <Button
                      onClick={() => handleDel(row.id)}
                      variant='contained'
                      color='error'
                      sx={{ marginInline: { xs: 0, sm: 0.5 }, height: '20px', width: '50px' }}>
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
            No Machine with entered name.
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default MachinesPage;
