import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const VendorOrder = React.lazy(()=> import('./vendorOrders'))
const AddVendorOrder = React.lazy(()=> import('./vendorOrders/CreateVendorOrder'))
const DriverOrder = React.lazy(()=> import('./driverOrders'))

export const orderPages = [
    {
      permittedRole: RoutePermittedRole.user,
      path: '/order/vendororders',
      element: <VendorOrder />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/order/vendororders/create','/order/vendororders/create/:id'],
      element: <AddVendorOrder />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/order/driverorders',
      element: <DriverOrder />,
    }
   
  
  ];