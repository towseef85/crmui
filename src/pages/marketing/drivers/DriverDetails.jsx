import AppDetailsView from '@crema/core/AppDetailsView';
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Alert, Descriptions } from 'antd';

export default function DriverDetails({singleDriver}) {
  const {id}=useParams()
  return (
    <AppDetailsView
    title='Driver'
    id={id}
    navigateTo={`/marketing/drivers/create/${id}`}
    >
      {
      singleDriver ?

        <Descriptions
      title="Driver Details"
      bordered
      column={{
        xxl: 2,
        xl: 2,
        lg: 2,
        md: 2,
        sm: 1,
        xs: 1,
      }}
    >
      <Descriptions.Item label="name">{singleDriver.name}</Descriptions.Item>
      <Descriptions.Item label="Mobile Number">{singleDriver.mobileNo}</Descriptions.Item>
      <Descriptions.Item label="Work Type">{singleDriver.workType}</Descriptions.Item>
      <Descriptions.Item label="Time Slot">{singleDriver.timeSlot}</Descriptions.Item>
      <Descriptions.Item label="Status">{singleDriver.status}</Descriptions.Item>
  
    </Descriptions>:
    <Alert type='info' message="No Record Found for this Id"/>
    }
    </AppDetailsView>
  )
}
DriverDetails.propTypes = {
  singleDriver: PropTypes.any
}
