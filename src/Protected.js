/** @format */

import { Box, createTheme, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileDrawer from './components/MobileDrawer';
import MiniDrawer from './components/MiniDrawer';

let theme = createTheme();
const Ptd = ({ Cmpt, pg }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem('admin_id');
  useEffect(() => {
    if (!id) {
      navigate('/login');
    }
  }, []);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
      {isMobile ? <MobileDrawer /> : <MiniDrawer page={pg} />}
      <Cmpt />
    </Box>
  );
};

export default Ptd;
