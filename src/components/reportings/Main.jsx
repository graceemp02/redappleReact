/** @format */

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';
import { Reports, Trends, Values } from './index';
let theme = createTheme({ typography: { fontSize: 15, button: { textTransform: 'none' } } });
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Main() {
  const [value, setValue] = React.useState(() => {
    const memoTab = +localStorage.getItem('admin_reportings_tab');
    if (memoTab) {
      return memoTab;
    } else {
      localStorage.setItem('admin_reportings_tab', 0);
      return 0;
    }
  });

  const handleChange = (event, newValue) => {
    console.log(newValue);
    localStorage.setItem('admin_reportings_tab', newValue);
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Display Values' />
            <Tab label='Reports' />
            <Tab label='Trends' />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Values />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Reports />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Trends />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
