import { onGetList } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_VENDORORDERS } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react'
import VendorOrderDetails from './VendorOrderDetails'
import VendorOrderList from './VendorOrderList'

export default function VendorOrders() {
  const dispatch = useDispatch()
  const {vendorOrderList} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    dispatch(onGetList('VendorOrder',GET_VENDORORDERS))
  },[])
  const onGetMainComponent =()=>{
    if(id){    
      return <VendorOrderDetails id={id} loading={loading}/>
    } else{
      return <VendorOrderList loading={loading} vendorOrderList={vendorOrderList}/>
    }
  }
    return (
      <>
      <AppPageMetadata title="VendorOrder"/>
      <AppsContainer title="VendorOrder" type='bottom' fullView>
  
      {onGetMainComponent()}
      </AppsContainer>
   </>
    )
  }
