import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

//const VendorOrder = React.lazy(()=> import('./vendorOrders'))
const DriverOrder = React.lazy(()=> import('./driverOrders'))
const Order = React.lazy(()=>import('./order'))
const CreateOrder = React.lazy(()=> import('./order/CreateOrder'))

export const orderPages = [
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/order/vendororders','/order/vendororders/:id'],
      element: <Order />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/order/vendororders/create','/order/vendororders/create/:id'],
      element: <CreateOrder />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/order/driverorders',
      element: <DriverOrder />,
    }
   
  
  ];