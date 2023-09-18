import React from "react";
import {RoutePermittedRole} from '../../shared/constants/AppEnums';
const Price = React.lazy(()=> import('./prices'))
const AddPrice = React.lazy(()=> import('./prices/CreatePrice'))
const Trips = React.lazy(() => import('./trips'))
export const settingPages = [
    {
        permittedRole: RoutePermittedRole.user,
        path: '/setting/prices',
        element: <Price />,
    },
    {
        permittedRole: RoutePermittedRole.user,
        path: ['/setting/prices/create','/setting/prices/create/:id'],
        element: <AddPrice />,
    },
    {
        permittedRole: RoutePermittedRole.user,
        path: '/setting/trips',
        element: <Trips />,
    }
]