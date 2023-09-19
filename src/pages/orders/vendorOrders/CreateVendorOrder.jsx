import AppCreateView from '@crema/core/AppCreateView';
import React from 'react';
import AppControls from '@crema/core/AppControls';
import {PUT_VENDORORDER} from 'shared/constants/ActionTypes';
import {Col, Row} from 'antd';
import PropTypes from 'prop-types';

export default function CreateVendorOrder({
  vendorList,
  driverList,
  singleOrder,
  handleDeliveryTypeChange,
  showCODChargers,
  isSamePickUpAddress,
  setIsSamePickUpAddress,
  handleVendorPrice,
  vendorPrices
}) {
  const {AppInputControl, AppSelectControl, AppSwitchControl} = AppControls;
  const vendorOptions = vendorList.map(x=>{return{id:x.id, name:`${x.storeName}-${x.ownerName}`}})
  const driverOptions = driverList.map(x=>{return{id:x.id, name:x.name}})
console.log('vendorList',vendorList);
  return (
    <AppCreateView
      labelCol={10}
      wrapperCol={14}
      title='Vendor Order'
      controller='Order'
      action={PUT_VENDORORDER}
      initialValues={singleOrder ? singleOrder : null}>
      <Row>
        <Col span={12}>
          <AppSelectControl
            label='Vendor'
            name='vendorId'
            required={true}
            onChange={handleVendorPrice}
            options={vendorOptions}
          />
           <AppSelectControl
            label='Vendor Price'
            name='priceId'
            required={true}
            options={vendorPrices}
          />
          <AppSelectControl
            label='Driver'
            name='driverId'
            required={true}
            options={driverOptions}
          />
          <AppSelectControl
            label='Delivery Type'
            name='deliveryType'
            required={true}
            onChange={handleDeliveryTypeChange}
            options={[
              {id: 1, name: 'COD'},
              {id: 0, name: 'Online'}
             
            ]}
          />
          {showCODChargers && (
            <>
              <AppInputControl
                min={2}
                label='COD Charge'
                name='codCharges'
                required={showCODChargers}
              />
              <AppInputControl
                min={2}
                label='Order Amount'
                name='orderAmount'
                required={showCODChargers}
              />
            </>
          )}
        
        
    
        </Col>
        <Col span={12}>
        <AppInputControl
            label='Order Date'
            min={10}
            name='orderDate'
            required={true}
            type='date'
          />
        <AppSwitchControl
            label='PickUp location Same'
            name='isSame'
            valuePropName='checked'
            initialValue={isSamePickUpAddress}
            onChange={(e) => setIsSamePickUpAddress(e)}
          />
          {!isSamePickUpAddress && (
            <AppInputControl
              label='PickUp Location'
              min={10}
              isTextArea={true}
              name='pickupLocation'
              required={!isSamePickUpAddress}
            />
          )}
           <AppInputControl
                min={4}
                label='Remarks'
                name='remarks'
                isTextArea={true}
           />
              <AppInputControl
                min={4}
                label='Extra Charges'
                name='extraCharges'
           />
        </Col>
      </Row>
    </AppCreateView>
  );
}
CreateVendorOrder.propTypes = {
  vendorList: PropTypes.array,
  driverList: PropTypes.array,
  singleOrder: PropTypes.any,
  handleDeliveryTypeChange:PropTypes.func,
  showCODChargers:PropTypes.bool,
  isSamePickUpAddress:PropTypes.any,
  setIsSamePickUpAddress:PropTypes.any,
  vendorPrices:PropTypes.array,
  handleVendorPrice:PropTypes.func
};
