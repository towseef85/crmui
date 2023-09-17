import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { onGetVendors } from 'redux/actions';
import {useParams} from 'react-router-dom';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import AppsContainer from '@crema/core/AppsContainer';
import VendorDetails from './VendorDetails';
import VendorList from './VendorList';

export default function Vendors() {
  const dispatch = useDispatch()
  const {vendorList} = useSelector(({marketing})=> marketing)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  
  useEffect(()=>{
    dispatch(onGetVendors())
},[dispatch])

const onGetMainComponent =()=>{
  if(id){    
    return <VendorDetails id={id} loading={loading}/>
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
