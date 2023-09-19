import { onGetList, onGetSingleRecord, onGetVendors } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DRIVERS, GET_VENDORORDERS } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react'
import VendorOrderList from './VendorOrderList'
import CreateVendorOrder from './CreateVendorOrder'

export default function VendorOrders() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [singleOrder, setSingleOrder] = useState(null)
  const [showCODChargers, setShowCODChargers] = useState(false)
  const [isSamePickUpAddress, setIsSamePickUpAddress] = useState(true)
  const [vendorPrices, setVendorPrices] = useState([])
  const {vendorOrderList, driverList} = useSelector(({general})=> general)
  const {vendorList} = useSelector(({marketing})=> marketing)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    if(id) dispatch(onGetSingleRecord('Order',id,setSingleOrder))
    dispatch(onGetList('Order',GET_VENDORORDERS))
    dispatch(onGetVendors())
    dispatch(onGetList('Driver',GET_DRIVERS))
  },[])
  const handleDeliveryTypeChange=(value)=>{
    debugger;
    setShowCODChargers(value === 1 ? true : false)
 }
 const handleVendorPrice=(value)=>{
  const getVendorPrice = vendorList.find(x=>x.id === value)
  if(getVendorPrice){
    const prices = getVendorPrice
    .vendorPrices.map(x=>{
      return{
        id: x.id,
        name:`Price ${x.prices}-${x.km} KM`
      }
    })
    setVendorPrices(prices)
  }
 }
  const onGetMainComponent =()=>{
    if(id || location.pathname.includes('create')){    
      return (
      <CreateVendorOrder 
      id={id} 
      singleOrder={singleOrder} 
      vendorList={vendorList} 
      driverList={driverList}
      handleDeliveryTypeChange={handleDeliveryTypeChange}
      showCODChargers={showCODChargers}
      isSamePickUpAddress={isSamePickUpAddress}
      setIsSamePickUpAddress={setIsSamePickUpAddress}
      vendorPrices={vendorPrices}
      handleVendorPrice={handleVendorPrice}
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
