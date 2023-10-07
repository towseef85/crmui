import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

//const VendorOrder = React.lazy(()=> import('./vendorOrders'))
const DriverOrder = React.lazy(()=> import('./driverOrders'))
const Order = React.lazy(()=>import('./order'))
const CreateOrder = React.lazy(()=> import('./order/CreateOrder'))
const OrderStatus = React.lazy(() => import('./orderStatus'))
const AddDriverpayment = React.lazy(() => import('./driverOrders/AddDriverPayment'))
const OrderRequest = React.lazy(()=> import('./orderRequest'))
const AddOrderRequest = React.lazy(()=> import('./orderRequest/CreateOrderRequest'))

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
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/order/driverorders/create',
      element: <AddDriverpayment />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: '/order/orderstatus',
      element: <OrderStatus />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/order/orderrequest','/order/orderrequest/:id'],
      element: <OrderRequest />,
    },
    {
      permittedRole: RoutePermittedRole.user,
      path: ['/order/orderrequest/create','/order/orderrequest/create/:id'],
      element: <AddOrderRequest />,
    }
   
  
  ];