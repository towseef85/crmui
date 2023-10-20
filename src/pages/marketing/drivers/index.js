import { onGetList, onGetSingleRecord } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DRIVERS, GET_DRIVERSINGLE } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import DriverDetails from './DriverDetails'
import DriverList from './DriverList'
import { useEffect } from 'react'

export default function Drivers() {
  const dispatch = useDispatch()
  const {driverList,singleDriver} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    if(id) dispatch(onGetSingleRecord('Driver',id,GET_DRIVERSINGLE))
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