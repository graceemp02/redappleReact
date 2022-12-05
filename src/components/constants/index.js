/** @format */

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import MachinesPage from '../../pages/Machines';
import InstallationPage from '../../pages/Installation';
import AdvertismentPage from '../../pages/Advertisment';
import ReportingsPage from '../../pages/Reportings';
import CustomersPage from '../../pages/Customers';
import DashboardPage from '../../pages/Dasjboard';
export const NavItems = [
  {
    id: 0,
    icon: <HomeRoundedIcon />,
    lable: 'Dashboard',
    route: '/',
    element: <DashboardPage />,
  },
  {
    id: 1,
    icon: <PeopleAltRoundedIcon />,
    lable: 'Customers',
    route: '/customers',
    element: <CustomersPage />,
  },
  {
    id: 2,
    icon: <SettingsRoundedIcon />,
    lable: 'Machines',
    route: '/machines',
    element: <MachinesPage />,
  },
  {
    id: 3,
    icon: <TrendingUpRoundedIcon />,
    lable: 'Reportings',
    route: '/reportings',
    element: <ReportingsPage />,
  },
  {
    id: 4,
    icon: <AddPhotoAlternateRoundedIcon />,
    lable: 'Advertisment',
    route: '/advertisment',
    element: <AdvertismentPage />,
  },
  {
    id: 5,
    icon: <ConstructionRoundedIcon />,
    lable: 'Installation',
    route: '/installation',
    element: <InstallationPage />,
  },
];
