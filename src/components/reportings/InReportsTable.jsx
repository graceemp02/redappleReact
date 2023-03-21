/** @format */

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const columns = [
  { id: 'date', label: 'Date', minWidth: 50 },
  { id: 'time', label: 'Time', minWidth: 50 },
  { id: 'AQI', label: 'AQI', minWidth: 50 },
  { id: 'In_Temperature', label: 'Temperature', minWidth: 50 },
  { id: 'In_Humidity', label: 'Humidity', minWidth: 50 },
  { id: 'In_CO2', label: 'CO2', minWidth: 50 },
  { id: 'In_VOC', label: 'VOC', minWidth: 50 },
  { id: 'In_PM_2.5', label: 'PM 2.5', minWidth: 50 },
  { id: 'In_PM_10', label: 'PM 1.0', minWidth: 50 },
  { id: 'In_CO', label: 'CO', minWidth: 50 },
];

function createData(date, time, aqi, temp, hum, co2, voc, pm25, pm10, co) {
  return { date, time, aqi, temp, hum, co2, voc, pm25, pm10, co };
}

// const rows = [createData('date', 'time', 'aqi', 'temp', 'hum', 'co2', 'voc', 'pm25', 'pm10', 'co')];
// const rows = () => {

// }
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function InReportsTable({ loading, data }) {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 25;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '70vh' }}>
        <Table size='small' stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <StyledTableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {loading
                          ? 'Loading...'
                          : column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25]}
        component='div'
        count={data.length}
        rowsPerPage={25}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}
