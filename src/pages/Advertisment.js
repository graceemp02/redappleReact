/** @format */
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import Customers from '../components/Customers.jsx';
import Machines from '../components/machines';
import ImageUpload from '../components/ImageUpload.jsx';
import { useState } from 'react';
function AdvertismentPage() {
  const [adImg, setAdImg] = useState(null);
  return (
    <Stack gap={1} direction={{ xs: 'column', sm: 'row' }}>
      <div>
        <Customers />
        <Machines />
      </div>
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <Typography
          fontWeight={'bold'}
          sx={{
            textDecoration: 'Underline',
            textAlign: 'center',
            color: 'black',
            mb: 0.5,

            fontSize: '3.3vh!important',
          }}>
          ADVERTISEMENT
        </Typography>
        <Paper sx={{ flexGrow: 1, p: 1 }}>
          <Stack sx={{ justifyContent: 'space-between' }} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography fontSize='2vh'>
                Note:
                <ul style={{ marginLeft: '50px' }}>
                  <li>Size of image should not exceed 2MB.</li>
                  <li>{'File Must be in Squre Dimensions(i.e. aspect ratio 1/1)'}</li>
                  <li>Recomended dimensions of image are 1024 by 1024.</li>
                </ul>
                <br />
              </Typography>
              <Typography fontWeight='bold' fontSize='2vh'>
                Upload Image:
              </Typography>

              <ImageUpload imgData={setAdImg} />
              <Button variant='contained'>Upload for Selected Machine</Button>
              <Button color='success' variant='contained'>
                Upload for all Machine
              </Button>
              <Typography fontWeight='bold' fontSize='2vh'>
                Advertising Time:
              </Typography>
              <TextField type='number' />
              <br />
              <Button variant='contained'>Upload for Selected Machine</Button>
              <Button color='success' variant='contained'>
                Upload for all Machine
              </Button>
            </div>
            <Box sx={{ width: '40%', aspectRatio: '1/1', border: '1px solid black', m: 1, p: 1 }}>
              image priview
            </Box>
          </Stack>
        </Paper>
      </div>
    </Stack>
  );
}

export default AdvertismentPage;
