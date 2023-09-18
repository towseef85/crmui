import AppCreateView from '@crema/core/AppCreateView';
import React, { useState } from 'react';
import AppControls from '@crema/core/AppControls';
import {PUT_VENDORORDER} from 'shared/constants/ActionTypes';
import {Col, Row} from 'antd';


export default function CreateVendorOrder() {
    const {AppInputControl, AppSelectControl, AppSwitchControl} = AppControls;
    const [showCODChargers, setShowCODChargers] = useState(false)
    const [isSamePickUpAddress, setIsSamePickUpAddress] = useState(true)
    const handleDeliveryTypeChange=(value)=>{
       setShowCODChargers(value === "COD" ? true : false)
    }
  return (
    <AppCreateView   labelCol = {10}
    wrapperCol = {14} title='Vendor Order' controller='VendorOrder' action={PUT_VENDORORDER}>
      <Row>
        <Col span={14}>
        <AppSelectControl
            label='Vendor'
            name='vendorId'
            required={true}
            options={[
              {id: 'FullTime', name: 'FullTime'},
              {id: 'PartTime', name: 'PartTime'},
            ]}
          />
          <AppSelectControl
            label='Driver'
            name='driverId'
            required={true}
            options={[
              {id: 'Active', name: 'Active'},
              {id: 'InActive', name: 'InActive'},
            ]}
          />
           <AppSelectControl
            label='Delivery Type'
            name='deliveryType'
            required={true}
            onChange={handleDeliveryTypeChange}
            options={[
              {id: 'Online', name: 'Online'},
              {id: 'COD', name: 'COD'},
            ]}
          />
          {
            showCODChargers &&
            <>
            <AppInputControl
            min={4}
            label='COD Charge'
            name='CodCharge'
            required={showCODChargers}
          />
          <AppInputControl
          min={4}
          label='Order Amount'
          name='orderAmount'
          required={showCODChargers}
        />
            </>

          }
          
          <AppInputControl
            label='Order Date'
            min={10}
            name='orderDate'
            required={true}
            type='date'
          />
          <AppSwitchControl
          label="PickUp location Same"
          name="isSame"
          valuePropName="checked"
          initialValue={isSamePickUpAddress}
          onChange={(e)=> setIsSamePickUpAddress(e)}          
        />
       { !isSamePickUpAddress &&
        <AppInputControl
            label='PickUp Location'
            min={10}
            isTextArea={true}
            name='pickupLocation'
            required={!isSamePickUpAddress}
            type='date'
          />
       }
           
        </Col>
      </Row>
    </AppCreateView>
  )
}
