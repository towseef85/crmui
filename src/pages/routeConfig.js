import React from 'react';
import { BiGroup} from 'react-icons/bi';
import { MdOutlineAnalytics, MdOutlineDeliveryDining } from 'react-icons/md';

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
        path: '/marketing/vendors',
      },
      {
        id: 'drivers',
        title: 'Drivers',
        messageId: 'sidebar.orders.drivers',
        type: 'item',
        icon: <MdOutlineDeliveryDining />,
        path: '/marketing/drivers',
      },
    ],
  }
];
export default routesConfig;
