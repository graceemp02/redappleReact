import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiniDrawer from "./components/MiniDrawer";
import DashboardPage from "./pages/Dasjboard";
import CustomersPage from "./pages/Customers";
import InstallationPage from "./pages/Installation";
import MachinesPage from "./pages/Machines";
import ReportingsPage from "./pages/Reportings";
import AdvertismentPage from "./pages/Advertisment";
import LoginPage from "./pages/Login";
import Box from "@mui/material/Box";
import { UserContext } from "./UserContext";
import { useState } from "react";

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


function App() {
  const [user, setUser] = useState('');
  

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route
                path='/dashboard'
                element={
                  <Box sx={{ p: 1, pl: 9 }}>
                    <MiniDrawer page='0' />
                    <DashboardPage />
                  </Box>
                }
              />
              <Route
                path='/customers'
                element={
                  <Box sx={{ p: 2, pl: 9 }}>
                    <MiniDrawer page='1' />
                    <CustomersPage />
                  </Box>
                }
              />
              <Route
                path='/machines'
                element={
                  <Box sx={{ p: 2, pl: 9 }}>
                    <MiniDrawer page='2' />
                    <MachinesPage />
                  </Box>
                }
              />
              <Route
                path='/reportings'
                element={
                  <Box sx={{ p: 2, pl: 9 }}>
                    <MiniDrawer page='3' />
                    <ReportingsPage />
                  </Box>
                }
              />
              <Route
                path='/advertisment'
                element={
                  <Box sx={{ p: 2, pl: 9 }}>
                    <MiniDrawer page='4' />
                    <AdvertismentPage />
                  </Box>
                }
              />
              <Route
                path='/installation'
                element={
                  <Box sx={{ p: 2, pl: 9 }}>
                    <MiniDrawer page='5' />
                    <InstallationPage />
                  </Box>
                }
              />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
