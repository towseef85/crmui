import AppDetailsView from '@crema/core/AppDetailsView';
import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Descriptions} from 'antd';

export default function OrderRequestDetails({singleOrderRequest, id}) {
  console.log('si', singleOrderRequest);
  return (
    <AppDetailsView title='Order Request' id={id}>
      {singleOrderRequest ? (
        <>
          <Descriptions
            title='Order Request Details'
            bordered
            column={{
              xxl: 2,
              xl: 2,
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            }}>
            <Descriptions.Item label='Vendor Name'>
              {singleOrderRequest.vendor.ownerName}
            </Descriptions.Item>
            <Descriptions.Item label='Store name'>
              {singleOrderRequest.vendor.storeName}
            </Descriptions.Item>
            <Descriptions.Item label='Pickup Address'>
              {singleOrderRequest.vendor.pickupAddress}
            </Descriptions.Item>

            <Descriptions.Item label='Customer Name'>
              {singleOrderRequest.customerName}
            </Descriptions.Item>
            <Descriptions.Item label='Customer Number'>
              {singleOrderRequest.customerNumber}
            </Descriptions.Item>
            <Descriptions.Item label='Order Date'>
              {singleOrderRequest.deliveryDate}
            </Descriptions.Item>
            <Descriptions.Item label='Delivery Type'>
              {singleOrderRequest.deliveryType === 1 ? 'COD' : 'Online'}
            </Descriptions.Item>
            <Descriptions.Item label='Order Status'>
              {singleOrderRequest.orderDone ? 'Created' : 'No'}
            </Descriptions.Item>
            {singleOrderRequest.orderDone && (
              <Descriptions.Item label='Order Number'>
                {singleOrderRequest.orderNumber}
              </Descriptions.Item>
            )}
            {singleOrderRequest.deliveryType === 1 && (
              <>
                <Descriptions.Item label='COD Charges'>
                  {singleOrderRequest.codCharges}
                </Descriptions.Item>
              </>
            )}
          </Descriptions>
        </>
      ) : (
        <Alert type='info' message='No Record Found for this Id' />
      )}
    </AppDetailsView>
  );
}
OrderRequestDetails.propTypes = {
  singleOrderRequest: PropTypes.object,
  id: PropTypes.string,
};
