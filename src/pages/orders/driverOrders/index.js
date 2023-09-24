import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import OrderDetails from '../order/OrderDetails';
import DriverOrderList from './DriverOrderList';
import { useParams } from 'react-router-dom';
import { onGetList } from 'redux/actions';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import AppsContainer from '@crema/core/AppsContainer';
import { GET_DRIVERS } from 'shared/constants/ActionTypes';

export default function DriverOrders() {
  const dispatch = useDispatch()
  const {driverList} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    dispatch(onGetList('Driver',GET_DRIVERS))
},[dispatch])

const onGetMainComponent =()=>{
  if(id){    
    return <OrderDetails id={id} loading={loading}/>
  } else{
    return <DriverOrderList loading={loading} driverList={driverList}/>
  }
}
  return (
    <>
    <AppPageMetadata title="Driver Orders"/>
    <AppsContainer title="Driver Orders" type='bottom' fullView>

    {onGetMainComponent()}
    </AppsContainer>
 </>
  )
}