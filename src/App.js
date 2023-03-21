/** @format */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import { CustomerContext } from './CustomerContext';
import { MachineContext } from './MachineContext';
import { UpdateCustomersContext } from './UpdateCustomersContext';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavItems } from './components/constants';
import Profile from './pages/Profile';
import { AddCustomer, AddMachine, EditMachine } from './forms';
import EditCustomer from './forms/EditCustomer';
import DashboardPage from './pages/Dasjboard';
import ShowMachine from './miniPages/ShowMachine';
import Ptd from './Protected';

let theme = createTheme({ typography: { fontSize: '2vh', button: { textTransform: 'none' } } });

function App() {
  const [customerID, setCustomerID] = useState(() => localStorage.getItem('admin_client'));
  const [machineID, setMachineID] = useState(localStorage.getItem('admin_api'));
  const [updateCustomers, setUpdateCustomers] = useState(false);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename='newadmin'>
          <CustomerContext.Provider value={{ customerID, setCustomerID }}>
            <MachineContext.Provider value={{ machineID, setMachineID }}>
              <UpdateCustomersContext.Provider value={{ updateCustomers, setUpdateCustomers }}>
                <Routes>
                  {NavItems.map(item => (
                    <Route
                      key={item.id}
                      path={`/${item.route}`}
                      element={<Ptd Cmpt={item.element} pg={item.id} />}
                    />
                  ))}
                  <Route element={<LoginPage />} path='/login' />
                  <Route element={<Ptd pg={1} Cmpt={DashboardPage} />} path='/*' />
                  <Route element={<Ptd pg={2} Cmpt={AddCustomer} />} path='/clints/new' />
                  <Route element={<Ptd pg={2} Cmpt={EditCustomer} />} path='/clints/edit' />
                  <Route element={<Ptd pg={3} Cmpt={AddMachine} />} path='/machines/new' />
                  <Route element={<Ptd pg={3} Cmpt={EditMachine} />} path='/machines/edit' />
                  <Route element={<Ptd pg={3} Cmpt={ShowMachine} />} path='/machines/detail' />
                  <Route element={<Ptd pg={7} Cmpt={Profile} />} path='/profile' />
                </Routes>
              </UpdateCustomersContext.Provider>
            </MachineContext.Provider>
          </CustomerContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
