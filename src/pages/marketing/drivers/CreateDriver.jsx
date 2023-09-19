import AppCreateView from '@crema/core/AppCreateView';
import React, { useEffect,useState } from 'react';
import AppControls from '@crema/core/AppControls';
import {POST_DRIVER} from 'shared/constants/ActionTypes';
import {Col, Row} from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onGetSingleRecord } from 'redux/actions';

export default function CreateDriver() {
  const dispatch = useDispatch()
  const [singleDriver, setSingleDriver] = useState(null)
  const [showTimeSlot, setShowTimeSlot] = useState(false)
  const {id} = useParams()
  useEffect(()=>{
    if(id){
      dispatch(onGetSingleRecord('Driver',id,setSingleDriver))
    
    }
  },[id])
  const {AppInputControl, AppSelectControl} = AppControls;
  const handleWorkTypeChange=(value)=>{
    setShowTimeSlot(value === "PartTime" ? true : false)
  }

  return (
    <AppCreateView id={id} title='Driver' controller='Driver' action={POST_DRIVER}
    initialValues={singleDriver}
    >
      <Row>
        <Col span={18}>
          <AppInputControl
            min={4}
            label='Driver Name'
            name='name'
            required={true}
          />
          <AppInputControl
            label='Mobile Number'
            min={10}
            name='mobileNo'
            required={true}
          />
          <AppSelectControl
            label='Work Type'
            name='workType'
            required={true}
            onChange={handleWorkTypeChange}
            options={[
              {id: 'FullTime', name: 'FullTime'},
              {id: 'PartTime', name: 'PartTime'},
            ]}
          />
          {(id || showTimeSlot) &&
        
          <AppInputControl
            label="Time Slot"
          name="timeSlot"
          required={showTimeSlot}
          extra="Please Enter Start Time and End Time"
        />
          }
          <AppSelectControl
            label='Status'
            name='status'
            required={true}
            options={[
              {id: 'Active', name: 'Active'},
              {id: 'InActive', name: 'InActive'},
            ]}
          />
        </Col>
      </Row>
    </AppCreateView>
  );
}
