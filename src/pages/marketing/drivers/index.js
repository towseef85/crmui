import { onGetList, onGetSingleRecord } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DRIVERS } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import DriverDetails from './DriverDetails'
import DriverList from './DriverList'
import { useEffect, useState } from 'react'

export default function Drivers() {
  const dispatch = useDispatch()
  const {driverList} = useSelector(({general})=> general)
  const [singleDriver, setSingleDriver] = useState(null)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    if(id) dispatch(onGetSingleRecord('Driver',id,setSingleDriver))
    dispatch(onGetList('Driver',GET_DRIVERS))
  },[id])
  const onGetMainComponent =()=>{
    if(id){    
      return <DriverDetails id={id} loading={loading} singleDriver={singleDriver}/>
    } else{
      return <DriverList loading={loading} driverList={driverList}/>
    }
  }
    return (
      <>
      <AppPageMetadata title="Drivers"/>
      <AppsContainer title="Drivers" type='bottom' fullView>
  
      {onGetMainComponent()}
      </AppsContainer>
   </>
    )
  }