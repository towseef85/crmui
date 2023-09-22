import React,{ useEffect, useState } from 'react'
import { onGetList, onGetSingleVendorOrder } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import OrderDetails from './OrderDetails'
import OrderList from './OrderList'
import { GET_VENDORORDERS } from 'shared/constants/ActionTypes'

export default function Order() {
    const dispatch = useDispatch()
    const [singleOrder, setSingleOrder] = useState(null)
    const {vendorOrderList} = useSelector(({general})=> general)
    const {loading} = useSelector(({common}) => common);
    const {id} = useParams();
    useEffect(() => {
        if (id) {
          //dispatch(onGetSingleRecord('Order',id,setSingleOrder))
          dispatch(onGetSingleVendorOrder(id, setSingleOrder));
        }
        dispatch(onGetList('Order',GET_VENDORORDERS))
      }, [id]);

      const onGetMainComponent =()=>{
        if(id){    
            return <OrderDetails id={id} loading={loading} singleOrder={singleOrder}/>
          } else{
            return <OrderList loading={loading} vendorOrderList={vendorOrderList}/>
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
