import React,{useEffect} from 'react'
import { onGetList } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRICES } from 'shared/constants/ActionTypes'
import PriceDetails from './PriceDetails'
import PriceList from './PriceList'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';


export default function Prices() {

  const dispatch = useDispatch()
  const {priceList} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    dispatch(onGetList('Price',GET_PRICES))
  },[])
  const onGetMainComponent =()=>{
    if(id){    
      return <PriceDetails id={id} loading={loading}/>
    } else{
      return <PriceList loading={loading} priceList={priceList}/>
    }
  }
    return (
      <>
      <AppPageMetadata title="Prices"/>
      <AppsContainer title="Prices" type='bottom' fullView>
  
      {onGetMainComponent()}
      </AppsContainer>
   </>
    )
  }
