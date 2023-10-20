import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { onGetSingleRecord, onGetVendors } from 'redux/actions';
import {useParams} from 'react-router-dom';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import AppsContainer from '@crema/core/AppsContainer';
import VendorDetails from './VendorDetails';
import VendorList from './VendorList';
import { GET_SINGLEVENDOR } from 'shared/constants/ActionTypes';

export default function Vendors() {
  const dispatch = useDispatch()
  const {vendorList} = useSelector(({marketing})=> marketing)
  const {singleVendor} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  
  useEffect(()=>{
    if (id) {
      //dispatch(onGetSingleRecord('Order',id,setSingleOrder))
      dispatch(onGetSingleRecord('Vendor',id, GET_SINGLEVENDOR));
    }
    dispatch(onGetVendors())
},[dispatch, id])

const onGetMainComponent =()=>{
  if(id){    
    return <VendorDetails id={id} loading={loading} singleVendor={singleVendor}/>
  } else{
    return <VendorList loading={loading} vendorList={vendorList}/>
  }
}
  return (
    <>
    <AppPageMetadata title="Vendors"/>
    <AppsContainer title="Vendors" type='bottom' fullView>

    {onGetMainComponent()}
    </AppsContainer>
 </>
  )
}
