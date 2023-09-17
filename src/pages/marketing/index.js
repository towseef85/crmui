import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Vendors = React.lazy(()=> import('./vendors'))
const AddVendor = React.lazy(()=> import('./vendors/CreateVendor'))
const Drivers = React.lazy(()=> import('./drivers'))
const Dashboard = React.lazy(() => import('../dashboard'))

export const marketingPages = [
    {
      permittedRole: RoutePermittedRole.user,
      path: '/marketing/vendors',
      element: <Vendors />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/marketing/vendors/create','/marketing/vendors/create/:id'],
      element: <AddVendor />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/marketing/drivers',
      element: <Drivers />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/dashboard',
      element: <Dashboard />,
    }
  ];