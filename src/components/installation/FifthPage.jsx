/** @format */

import { Typography, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MyTableRow from './RowFile';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: '1.7vh',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.7vh',
  },
}));

const FifthPage = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Field</StyledTableCell>
              <StyledTableCell align='left'>Data</StyledTableCell>
              <StyledTableCell align='center'>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <MyTableRow name='roughFau' lable='Rough FAU set up- Pictures' />
            <MyTableRow name='roughDuct' lable='Rough Ductwork Design' />
            <MyTableRow name='roughWiring' lable='Rough Wiring Pictures' />
            <MyTableRow name='roughTV' lable='Rough TV Mount Locations Showing Wiring as well' />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FifthPage;
