/** @format */

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import MachinesPage from '../../pages/Machines';
import InstallationPage from '../../pages/Installation';
import AdvertismentPage from '../../pages/Advertisment';
import ReportingsPage from '../../pages/Reportings';
import CustomersPage from '../../pages/Customers';
import DashboardPage from '../../pages/Dasjboard';
const iconStyle = { width: '1.5em', height: '1.5em' };
export const NavItems = [
  {
    id: 1,
    icon: <HomeOutlinedIcon sx={iconStyle} />,
    lable: 'Dashboard',
    route: '/',
    element: DashboardPage,
  },
  {
    id: 2,
    icon: <PeopleAltOutlinedIcon sx={iconStyle} />,
    lable: 'Customers',
    route: '/clints',
    element: CustomersPage,
  },
  {
    id: 3,
    icon: <SettingsOutlinedIcon sx={iconStyle} />,
    lable: 'Machines',
    route: '/machines',
    element: MachinesPage,
  },
  {
    id: 4,
    icon: <TrendingUpOutlinedIcon sx={iconStyle} />,
    lable: 'Reportings',
    route: '/reportings',
    element: ReportingsPage,
  },
  {
    id: 5,
    icon: <AddPhotoAlternateOutlinedIcon sx={iconStyle} />,
    lable: 'Advertisment',
    route: '/advertisment',
    element: AdvertismentPage,
  },
  {
    id: 6,
    icon: <ConstructionOutlinedIcon sx={iconStyle} />,
    lable: 'Installation',
    route: '/installation',
    element: InstallationPage,
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
