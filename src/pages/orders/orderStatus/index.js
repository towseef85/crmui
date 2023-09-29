
import React,{ useEffect, useState } from 'react'
import { onGetList } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ORDERSTATUS } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import OrderStatusList from './OrderStatusList'


export default function OrderStatus() {
  const dispatch = useDispatch()
  const [setId, setsetId] = useState({show:false, record:null})
  const {orderStatusList} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  useEffect(() => {
    //if(setId.id) dispatch(onGetSingleRecord('OrderStatus',setId.id,GET_SINGLEORDERSTATUS))
    dispatch(onGetList('OrderStatus',GET_ORDERSTATUS))
  }, []);

  
  return (
    <>
       <AppPageMetadata title="Order Status"/>
      <AppsContainer title="Order Status" type='bottom' fullView>
  
      <OrderStatusList 
      setsetId={setsetId} 
      setId={setId} 
      loading={loading}  
      orderStatusList={orderStatusList}
      />
      </AppsContainer>
    </>
  )
}
