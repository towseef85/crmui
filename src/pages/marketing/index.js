import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Vendors = React.lazy(()=> import('./vendors'))
const AddVendor = React.lazy(()=> import('./vendors/CreateVendor'))
const Drivers = React.lazy(()=> import('./drivers'))
const AddDriver = React.lazy(() => import('./drivers/CreateDriver'))
const Dashboard = React.lazy(() => import('../dashboard'))

export const marketingPages = [
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/marketing/vendors','/marketing/vendors/:id'],
      element: <Vendors />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/marketing/vendors/create','/marketing/vendors/create/:id'],
      element: <AddVendor />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/marketing/drivers','/marketing/drivers/:id'],
      element: <Drivers />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/marketing/drivers/create','/marketing/drivers/create/:id'],
      element: <AddDriver />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/dashboard',
      element: <Dashboard />,
    }
  ];