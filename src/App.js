/** @format */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MiniDrawer from './components/MiniDrawer';
import LoginPage from './pages/Login';
import { UserContext } from './UserContext';
import { CustomerContext } from './CustomerContext';
import { MachineContext } from './MachineContext';
import { useState } from 'react';
import MobileDrawer from './components/MobileDrawer';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useMediaQuery, Box } from '@mui/material';
import { NavItems } from './components/constants';
import Profile from './pages/Profile';

let theme = createTheme();
theme = responsiveFontSizes(theme, { factor: 5 });

function App() {
  const [user, setUser] = useState('');
  const [customerID, setCustomerID] = useState('');
  const [machineID, setMachineID] = useState('');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <CustomerContext.Provider value={{ customerID, setCustomerID }}>
              <MachineContext.Provider value={{ machineID, setMachineID }}>
                <Routes>
                  {NavItems.map(item => (
                    <Route
                      key={item.key}
                      path={`/${item.route}`}
                      element={
                        user ? (
                          <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                            {isMobile ? <MobileDrawer /> : <MiniDrawer page={`${item.id}`} />}
                            {item.element}
                          </Box>
                        ) : (
                          <LoginPage />
                        )
                      }
                    />
                  ))}
                  <Route
                    path='/profile'
                    element={
                      user ? (
                        <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                          {isMobile ? <MobileDrawer /> : <MiniDrawer page={6} />}
                          <Profile />
                        </Box>
                      ) : (
                        <LoginPage />
                      )
                    }
                  />
                </Routes>
              </MachineContext.Provider>
            </CustomerContext.Provider>
          </UserContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
