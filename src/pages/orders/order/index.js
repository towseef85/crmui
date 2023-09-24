import React,{ useEffect } from 'react'
import { onGetList, onGetSingleVendorOrder } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import OrderDetails from './OrderDetails'
import OrderList from './OrderList'
import { GET_ORDERSTATUS, GET_VENDORORDERS } from 'shared/constants/ActionTypes'

export default function Order() {
    const dispatch = useDispatch()
    const {singleorder} = useSelector(({marketing}) => marketing);
    const {vendorOrderList,orderStatusList} = useSelector(({general})=> general)
    const {loading} = useSelector(({common}) => common);
    const {id} = useParams();
    useEffect(() => {
        if (id) {
          //dispatch(onGetSingleRecord('Order',id,setSingleOrder))
          dispatch(onGetSingleVendorOrder(id));
        }
        dispatch(onGetList('Order',GET_VENDORORDERS))
        dispatch(onGetList('OrderHistory/GetOrderStatusList',GET_ORDERSTATUS))
      }, [id]);

      const onGetMainComponent =()=>{
        if(id){    
            return <OrderDetails id={id} loading={loading} singleOrder={singleorder}/>
          } else{
            return <OrderList loading={loading} vendorOrderList={vendorOrderList} 
            orderStatusList={orderStatusList}
            />
          }
      }
  return (
    <>
      <AppPageMetadata title="Orders"/>
      <AppsContainer title="Orders" type='bottom' fullView>
  
      {onGetMainComponent()}
      </AppsContainer>
    </>
  )
}
