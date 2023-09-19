import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const VendorOrder = React.lazy(()=> import('./vendorOrders'))
const DriverOrder = React.lazy(()=> import('./driverOrders'))

export const orderPages = [
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/order/vendororders','/order/vendororders/:id','/order/vendororders/create'],
      element: <VendorOrder />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/order/driverorders',
      element: <DriverOrder />,
    }
   
  
  ];