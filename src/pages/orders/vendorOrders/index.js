import { onGetList } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DRIVERS, GET_VENDORORDERS, GET_VENDORS, GET_VENDORPRICES } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react'
import VendorOrderList from './VendorOrderList'
import CreateVendorOrder from './CreateVendorOrder'

export default function VendorOrders() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [isSamePickUpAddress, setIsSamePickUpAddress] = useState(true)
  const {vendorOrderList, driverList, vendorPriceList} = useSelector(({general})=> general)
  const [singleOrder, setSingleOrder] = useState(null)
  const {vendorList,singleorder} = useSelector(({marketing})=> marketing)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
   
    dispatch(onGetList('Order',GET_VENDORORDERS))
    dispatch(onGetList('Vendor',GET_VENDORS))
    dispatch(onGetList('Driver',GET_DRIVERS))
  },[])

const handleVendorPrice=(value)=>{
  getPrices(value)
}
 const getPrices=(value)=>{
  dispatch(onGetList(`Vendor/GetVendorPrices/${value}`,GET_VENDORPRICES))
 }
 
console.log("singleOrder",singleOrder)

  const onGetMainComponent =()=>{
    if(id  || location.pathname.includes('create')){    
      return (
      <CreateVendorOrder 
      id={id} 
      singleOrder={singleorder} 
      setSingleOrder={setSingleOrder}
      vendorList={vendorList} 
      driverList={driverList}
      isSamePickUpAddress={isSamePickUpAddress}
      setIsSamePickUpAddress={setIsSamePickUpAddress}
      vendorPriceList={vendorPriceList}
      handleVendorPrice={handleVendorPrice}
      getPrices={getPrices}
      
      />
      )
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
