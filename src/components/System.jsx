/** @format */
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItem, Typography } from '@mui/material';
const circleStyle = {
  width: { xs: '.8em', sm: '1em' },
  height: { xs: '.8em', sm: '1em' },
  ml: '12px',
};

function Relays() {
  return (
    <div style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
      <Typography
        align='left'
        fontSize={'auto'}
        variant='h4'
        pl={2}
        fontWeight={'bold'}
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5 }}>
        SYSTEM OVERRIDE
      </Typography>

      <Paper
        sx={{
          flex: 3,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1em 1em 0em 0em',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <List
          component='nav'
          aria-label='relay controld'
          sx={{
            overflow: 'auto',
            borderRadius: '10px',
            paddingInline: 4,
          }}>
          <ListItem sx={{ paddingBlock: 0.6 }} divider>
            <ListItemText primary={'Override 1'} />
            <Button variant='contained' size='small'>
              Start
            </Button>
            <CircleIcon sx={circleStyle} />
          </ListItem>
          <ListItem sx={{ paddingBlock: 0.6 }} divider>
            <ListItemText primary={'Override 2'} />
            <Button variant='contained' size='small'>
              Start
            </Button>
            <CircleIcon sx={circleStyle} />
          </ListItem>
          <ListItem sx={{ paddingBlock: 0.6 }} divider>
            <ListItemText primary={'System RST'} />
            <Button variant='contained' size='small' sx={{ mr: { xs: 3.2, sm: 4.5 } }}>
              Press
            </Button>
          </ListItem>
        </List>
        <div style={{ display: 'flex', flex: 5, margin: '13px', flexDirection: 'column' }}>
          <List
            component='nav'
            aria-label='relay controld'
            sx={{
              border: '3px solid black',
              flex: 3,
              overflow: 'auto',
              borderRadius: '1em',
              paddingInline: 4,
              marginBottom:'.4em'
            }}>
            <ListItem sx={{ paddingBlock: 0.6 }} divider>
              <ListItemText primary={'Shift Start Time'} />
              <input
                value={9}
                style={{ width: '30%', textAlign: 'center', borderColor: 'whitesmoke' }}
              />
            </ListItem>
            <ListItem sx={{ paddingBlock: 0.6 }} divider>
              <ListItemText primary={'Shift End Time'} />
              <input
                value={17}
                style={{ width: '30%', textAlign: 'center', borderColor: 'whitesmoke' }}
              />
            </ListItem>
            <ListItem sx={{ paddingBlock: 0.6 }} divider>
              <ListItemText primary={'System Override Time'} />
              <input
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
              flex: 2,
              overflow: 'auto',
              borderRadius: '10px',
              paddingInline: 4,
            }}>
            <ListItem sx={{ paddingBlock: 0.3 }} divider>
              <ListItemText primary={'System Violated'} />

              <CircleIcon htmlColor='red' sx={circleStyle} />
            </ListItem>
            <ListItem sx={{ paddingBlock: 0.3 }} divider>
              <ListItemText primary={'Replace Filter'} />
              <CircleIcon sx={circleStyle} />
            </ListItem>
          </List>
        </div>
      </Paper>
    </div>
  );
}
export default Relays;