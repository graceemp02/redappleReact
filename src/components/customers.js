import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  "Frozen yoghurt",
  "Ice cream sandwich",
  "Eclair",
  "Cupcake",
  "Gingerbread",
  "Frozen yoghurt",
  "Ice cream sandwich",
  "Eclair",
  "Cupcake",
  "Gingerbread",
];
let newRows = rows.slice();
function Customers() {
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleSearch(e) {
    
    newRows = []
    setSearchTerm(e.target.value);
     console.log(newRows);
    rows.forEach((val) => {
      if (searchTerm === "") newRows.push(val)
      if (val.toLowerCase().includes(searchTerm.toLowerCase())) newRows.push(val);
    })
  }
  return (
    <TableContainer sx={{ height: "47vh" }}>
      <Table aria-label="customized table">
        <TableHead sx={{ bgColor: "#2599CA" }}>
          <TableRow>
            <StyledTableCell
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h5">CUSTOMERS</Typography>
              <TextField
                variant="filled"
                onChange={handleSearch}
                label="Search Customer"
                sx={{ bgcolor: "white", padding: 0 }}
              />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody component={Paper}>
          {newRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Customers;

// .fiter((val) => {
//   if (searchTerm === "") {
//     return val
//   } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
//     return val
//   }
// })
