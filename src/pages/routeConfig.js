import React from 'react';
import { BiGroup, BiTrip, BiSolidUserAccount, BiUser} from 'react-icons/bi';
import { MdOutlineAnalytics, MdOutlineDeliveryDining, MdPriceCheck } from 'react-icons/md';
import {TbTruckDelivery} from 'react-icons/tb'

const routesConfig = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    messageId: 'sidebar.dashboard',
    icon: <MdOutlineAnalytics />,
    path: '/dashboard',
  },
  {
    id: 'marketing',
    title: 'Vendors',
    messageId: 'sidebar.marketing',
    type: 'group',
    children: [
      {
        id: 'vendors',
        title: 'Vendors',
        messageId: 'sidebar.marketing.vendors',
        type: 'item',
        icon: <BiGroup />,
        path: '/marketing/vendors',
      },
      {
        id: 'drivers',
        title: 'Drivers',
        messageId: 'sidebar.marketing.drivers',
        type: 'item',
        icon: <MdOutlineDeliveryDining />,
        path: '/marketing/drivers',
      },
    ],
  },
  {
    id: 'orders',
    title: 'orders',
    messageId: 'sidebar.orders',
    type: 'group',
    children: [
      {
        id: 'orders.vendors',
        title: 'Vendors',
        messageId: 'sidebar.orders.vendors',
        type: 'item',
        icon: <BiGroup />,
        path: '/order/vendororders',
      },
      {
        id: 'orders.drivers',
        title: 'Drivers',
        messageId: 'sidebar.orders.drivers',
        type: 'item',
        icon: <MdOutlineDeliveryDining />,
        path: '/order/driverorders',
      },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    messageId: 'sidebar.settings',
    type: 'group',
    children: [
      {
        id: 'settings.prices',
        title: 'Prices',
        messageId: 'sidebar.settings.prices',
        type: 'item',
        icon: <MdPriceCheck />,
        path: '/setting/prices',
      },
      {
        id: 'settings.trips',
        title: 'Trips',
        messageId: 'sidebar.settings.trips',
        type: 'item',
        icon: <BiTrip />,
        path: '/setting/trips',
      },
      {
        id: 'settings.users',
        title: 'Users',
        messageId: 'sidebar.settings.users',
        type: 'item',
        icon: <BiUser />,
        path: '/setting/user',
      }
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts',
    messageId: 'sidebar.account',
    type: 'group',
    children: [
      {
        id: 'accounts.vendor',
        title: 'Vendor Account',
        messageId: 'sidebar.account.vendor',
        type: 'item',
        icon: <BiSolidUserAccount />,
        path: '/account/vendor',
      },
      {
        id: 'accounts.driver',
        title: 'Driver Accounts',
        messageId: 'sidebar.account.driver',
        type: 'item',
        icon: <TbTruckDelivery />,
        path: '/account/driver',
      },
    ],
  }
];
export default routesConfig;
