import { onGetList } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DRIVERS } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import DriverDetails from './DriverDetails'
import DriverList from './DriverList'
import { useEffect } from 'react'

export default function Drivers() {
  const dispatch = useDispatch()
  const {driverList} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(()=>{
    dispatch(onGetList('Driver',GET_DRIVERS))
  },[])
  const onGetMainComponent =()=>{
    if(id){    
      return <DriverDetails id={id} loading={loading}/>
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