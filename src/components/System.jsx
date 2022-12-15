/** @format */
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItem, Typography } from '@mui/material';
const circleStyle = {
  width: '2.7vh',
  height: '2.7vh',
  ml: '12px',
};
const hdnCircle = {
  width: '2.7vh',
  height: '2.7vh',
  ml: '12px',
  visibility: 'hidden',
};
const shortButton = {
  height: '3vh',
  minWidth: '3vw',
  fontSize: '1.5vh',
};

function System() {
  return (
    <div style={{ height: '50%', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography
        align='left'
        fontSize={'auto'}
        variant='h4'
        pl={2}
        fontWeight={'bold'}
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5, fontSize: '3.3vh!important' }}>
        SYSTEM OVERRIDE
      </Typography>

      <Paper
        sx={{
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1vh',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'auto',
          height: { xs: '370px !important', sm: '42vh' },
        }}>
        <List
          component='nav'
          aria-label='relay controld'
          sx={{
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
            <ListItemText sx={{ m: 0, fontSize: '2vh !important' }} primary={'Override 1'} />
            <Button variant='contained' size='small' sx={shortButton}>
              Start
            </Button>
            <CircleIcon sx={circleStyle} />
          </ListItem>
          <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
            <ListItemText sx={{ m: 0, fontSize: '2vh !important' }} primary={'Override 2'} />
            <Button variant='contained' size='small' sx={shortButton}>
              Start
            </Button>
            <CircleIcon sx={circleStyle} />
          </ListItem>
          <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
            <ListItemText sx={{ m: 0, fontSize: '2vh !important' }} primary={'System RST'} />
            <Button variant='contained' size='small' sx={shortButton}>
              Press
            </Button>
            <CircleIcon sx={hdnCircle} />
          </ListItem>
        </List>
        <div style={{ display: 'flex', margin: '0px 5px ', flexDirection: 'column' }}>
          <List
            component='nav'
            aria-label='relay controld'
            sx={{
              border: '3px solid black',
              overflow: 'auto',
              borderRadius: '1vh',
              marginBottom: '1px',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
              <ListItemText
                sx={{ m: 0, fontSize: '2vh !important' }}
                primary={'Shift Start Time'}
              />
              <input
                onChange={() => console.log()}
                value={9}
                style={{ width: '30%', textAlign: 'center', borderColor: 'whitesmoke' }}
              />
            </ListItem>
            <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
              <ListItemText sx={{ m: 0, fontSize: '2vh !important' }} primary={'Shift End Time'} />
              <input
                onChange={() => console.log()}
                value={17}
                style={{ width: '30%', textAlign: 'center', borderColor: 'whitesmoke' }}
              />
            </ListItem>
            <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
              <ListItemText
                sx={{ m: 0, fontSize: '2vh !important' }}
                primary={'System Override Time'}
              />
              <input
                onChange={() => console.log()}
                value={2}
                style={{ width: '30%', textAlign: 'center', borderColor: 'whitesmoke' }}
              />
            </ListItem>
          </List>
          <List
            component='nav'
            aria-label='relay controld'
            sx={{
              border: '3px solid black',
              overflow: 'auto',
              borderRadius: '1vh',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
              <ListItemText sx={{ m: 0, fontSize: '2vh !important' }} primary={'System Violated'} />

              <CircleIcon htmlColor='red' sx={circleStyle} />
            </ListItem>
            <ListItem sx={{ padding: '0.1rem 1rem', flex: 1 }} divider>
              <ListItemText sx={{ m: 0, fontSize: '2vh !important' }} primary={'Replace Filter'} />
              <CircleIcon sx={circleStyle} />
            </ListItem>
          </List>
        </div>
      </Paper>
    </div>
  );
}
export default System;
