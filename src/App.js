/** @format */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MiniDrawer from './components/MiniDrawer';
import LoginPage from './pages/Login';
import { UserContext } from './UserContext';
import { CustomerContext } from './CustomerContext';
import { MachineContext } from './MachineContext';
import { DateContext } from './DateContext';
import { UpdateCustomersContext } from './UpdateCustomersContext';

import { useState } from 'react';
import MobileDrawer from './components/MobileDrawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery, Box } from '@mui/material';
import { NavItems } from './components/constants';
import Profile from './pages/Profile';
import { AddCustomer, AddMachine, EditMachine } from './forms';
import EditCustomer from './forms/EditCustomer';
import DashboardPage from './pages/Dasjboard';
import ShowMachine from './miniPages/ShowMachine';

let theme = createTheme({ typography: { fontSize: '2vh', button: { textTransform: 'none' } } });
// theme = responsiveFontSizes(theme, { factor: 4 });

function App() {
  const [user, setUser] = useState('');
  const isLogedin = localStorage.getItem('id');
  const [customerID, setCustomerID] = useState('');
  const [machineID, setMachineID] = useState('');
  const [date, setDate] = useState('');
  const [updateCustomers, setUpdateCustomers] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        {/* <BrowserRouter> */}
        <BrowserRouter basename='newadmin'>
          <UserContext.Provider value={{ user, setUser }}>
            <CustomerContext.Provider value={{ customerID, setCustomerID }}>
              <MachineContext.Provider value={{ machineID, setMachineID }}>
                <DateContext.Provider value={{ date, setDate }}>
                  <UpdateCustomersContext.Provider value={{ updateCustomers, setUpdateCustomers }}>
                    <Routes>
                      {NavItems.map(item => (
                        <Route
                          key={item.id}
                          path={`/${item.route}`}
                          element={
                            isLogedin ? (
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
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={6} />}
                              <Profile />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path='/*'
                        element={
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={6} />}
                              <DashboardPage />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />

                      <Route
                        path='/clints/new'
                        element={
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={'2'} />}
                              <AddCustomer />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path='/clints/edit'
                        element={
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={'2'} />}
                              <EditCustomer />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path='/machines/new'
                        element={
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={'3'} />}
                              <AddMachine />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path='/machines/edit'
                        element={
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={'3'} />}
                              <EditMachine />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                      <Route
                        path='/machines/detail'
                        element={
                          isLogedin ? (
                            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                              {isMobile ? <MobileDrawer /> : <MiniDrawer page={'3'} />}
                              <ShowMachine />
                            </Box>
                          ) : (
                            <LoginPage />
                          )
                        }
                      />
                    </Routes>
                  </UpdateCustomersContext.Provider>
                </DateContext.Provider>
              </MachineContext.Provider>
            </CustomerContext.Provider>
          </UserContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
