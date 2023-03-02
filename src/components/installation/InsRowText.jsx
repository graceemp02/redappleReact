/** @format */

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Stack, TableRow, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CustomerContext } from '../../CustomerContext';
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:nth-child(n) td': {
    paddingInline: 1,
  },
}));
const InsRowText = ({ lable, name }) => {
  const { customerID } = useContext(CustomerContext);
  const [upload, setUpload] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const inv = setInterval(() => {
      axios
        .get(`inspector/checkInput.php?id=${customerID}&name=${name}`, {
          cancelToken: source.token,
        })
        .then(res => {
          const data = res.data.res;
          if (data) {
            setUpload(data);
          } else setUpload(false);
        })
        .catch(err => console.log(err));
    }, 1000);
    return () => {
      source.cancel();
      clearInterval(inv);
    };
  }, [customerID]);

  return (
    <StyledTableRow>
      <StyledTableCell sx={{ padding: '10px !important' }}>{lable}</StyledTableCell>
      <StyledTableCell>
        <Stack gap={0.5} direction={{ xs: 'column', sm: 'row' }}>
          {!upload ? (
            'Pending'
          ) : (
            <Typography>
              {upload === '1' ? 'Verified' : upload === '0' ? 'Pending' : upload}
            </Typography>
          )}
        </Stack>
      </StyledTableCell>
      <StyledTableCell align='right'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingInline: '10px',
          }}></div>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default InsRowText;
