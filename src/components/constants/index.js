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
    id: 1,
    icon: <HomeRoundedIcon />,
    lable: 'Dashboard',
    route: '/',
    element: <DashboardPage />,
  },
  {
    id: 2,
    icon: <PeopleAltRoundedIcon />,
    lable: 'Customers',
    route: '/customers',
    element: <CustomersPage />,
  },
  {
    id: 3,
    icon: <SettingsRoundedIcon />,
    lable: 'Machines',
    route: '/machines',
    element: <MachinesPage />,
  },
  {
    id: 4,
    icon: <TrendingUpRoundedIcon />,
    lable: 'Reportings',
    route: '/reportings',
    element: <ReportingsPage />,
  },
  {
    id: 5,
    icon: <AddPhotoAlternateRoundedIcon />,
    lable: 'Advertisment',
    route: '/advertisment',
    element: <AdvertismentPage />,
  },
  {
    id: 6,
    icon: <ConstructionRoundedIcon />,
    lable: 'Installation',
    route: '/installation',
    element: <InstallationPage />,
  },
];

export const RelayItems = [
  {
    id: 1,
    lable: 'Low Fan',
  },
  {
    id: 2,
    lable: 'High Fan',
  },
  {
    id: 3,
    lable: 'UVC',
  },
  {
    id: 4,
    lable: 'Bipole',
  },
  {
    id: 5,
    lable: 'Return Damper',
  },
  {
    id: 6,
    lable: 'Supply Damper',
  },
  {
    id: 7,
    lable: 'Air Conditioning',
  },
  {
    id: 8,
    lable: 'Heat',
  },
];
