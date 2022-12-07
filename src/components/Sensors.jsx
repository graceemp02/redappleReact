/** @format */
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button, ListItem, Switch, Typography } from '@mui/material';
import { RelayItems } from './constants';
import { useState } from 'react';

const circleStyle = {
  width: { xs: '.8em', sm: '1em' },
  height: { xs: '.8em', sm: '1em' },
  ml: '12px',
};
const disableButton = {
  bgcolor: '#2196f3 !important',
  color: '#fff !important',
  opacity: '0.5',
};
function Relays() {
  const [switchValue, setSwitchValue] = useState(false);
  const handleSwitchChange = e => {
    setSwitchValue(e.target.checked);
  };

    return (
      <>
        <Typography
          align='left'
          fontSize={'auto'}
          variant='h4'
          pl={2}
          fontWeight={'bold'}
          sx={{ textDecoration: 'Underline', color: 'black', mb: .5 }}>
          SENSORS
        </Typography>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Paper
            sx={{
              marginBottom: '15px',
              flex: 4,
              width: '100%',
              bgcolor: 'background.paper',
              borderRadius: '1em',
              display: 'flex',
              flexDirection: 'column',
              p: 1,
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>
                Temp
                <br />
                74.4°F
              </Typography>
              <Typography
                variant='h5'
                fontWeight={'bold'}
                sx={{ textDecoration: 'Underline', color: 'black' }}>
                INDOOR SENSORS
              </Typography>
              <Typography>
                Hum
                <br />
                34%
              </Typography>
            </div>
                    <div style={{display:'flex'}}>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
                        <Box sx={{border:'1px solid black', height:'300px'}} flex={1} xs={1.5} lg={1.5}>hello </Box>
            </div>
            <div></div>
          </Paper>
          <Paper
            sx={{
              flex: 2,
              width: '100%',
              bgcolor: 'background.paper',
              borderRadius: '1em',
              display: 'flex',
            }}></Paper>
          <Paper
            sx={{
              marginBottom: '15px',
              flex: 4,
              width: '100%',
              bgcolor: 'background.paper',
              borderRadius: '1em',
              display: 'flex',
            }}></Paper>
        </div>
      </>
    );
}
export default Relays;
