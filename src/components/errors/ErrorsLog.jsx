/** @format */

import React, { useContext, useEffect, useState } from 'react';
import { CustomerContext } from '../../CustomerContext';
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const ErrorsLog = () => {
  const [rows, setRows] = useState([]);
  const { customerID } = useContext(CustomerContext);
  useEffect(() => {
    let intervalId;
    const fetchData = async () => {
      axios
        .get(`errors/log.php?cid=${customerID}`)
        .then(res => {
          const newData = res.data;
          if (JSON.stringify(newData) !== JSON.stringify(rows)) {
            setRows(res.data);
          }
        })
        .catch(err => console.log(err));
    };
    fetchData();
    intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [customerID, rows]);
  const handleAck = async () => {
    await axios
      .get(`errors/log.php?cid=${customerID}&ack=true`)
      .then(res => {})
      .catch(err => console.log(err));
  };
  return (
    <div>
      {rows.length > 0 ? (
        <>
          <Button size='large' variant='contained' sx={{ fontSize: 20, m: 1 }} onClick={handleAck}>
            Acknowledge Errors
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Cause</StyledTableCell>
                  <StyledTableCell>Solution</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: row.color }}>
                    <TableCell component='th' scope='row' sx={{ color: 'inherit' }}>
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{ color: 'inherit' }}
                      dangerouslySetInnerHTML={{ __html: row.cause }}
                    />
                    <TableCell
                      sx={{ color: 'inherit' }}
                      dangerouslySetInnerHTML={{ __html: row.sol }}
                    />
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Typography
          sx={{
            paddingBlock: 2,
            color: 'rgba(0,0,0,0.8)',
            border: '2px solid black',
            borderRadius: 2,
          }}>
          There is no error selected Customer.
        </Typography>
      )}
    </div>
  );
};

export default ErrorsLog;
