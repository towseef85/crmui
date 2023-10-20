import AppDetailsView from '@crema/core/AppDetailsView';
import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Descriptions} from 'antd';

export default function VendorDetails({singleVendor, id}) {
  return (
    <AppDetailsView title='Vendor' id={id}>
      {singleVendor ? (
        <>
          <Descriptions
            title='Vendor Details'
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
              {singleVendor.ownerName}
            </Descriptions.Item>
            <Descriptions.Item label='Store name'>
              {singleVendor.storeName}
            </Descriptions.Item>
            <Descriptions.Item label='Email Address'>
              {singleVendor.emailId}
            </Descriptions.Item>
            <Descriptions.Item label='Mobile No'>
              {singleVendor.mobileNo}
            </Descriptions.Item>
            <Descriptions.Item label='Office Number'>
              {singleVendor.officeNumber}
            </Descriptions.Item>
            <Descriptions.Item label='CR Number'>
              {singleVendor.crNumber}
            </Descriptions.Item>
            <Descriptions.Item label='VAT Number'>
              {singleVendor.vatNumber}
            </Descriptions.Item>
            <Descriptions.Item label='Lead Source'>
              {singleVendor.leadSource}
            </Descriptions.Item>
            <Descriptions.Item label='Pickup Address'>
              {singleVendor.pickupAddress}
            </Descriptions.Item>
            <Descriptions.Item label='Location URL'>
              {singleVendor.locationUrl}
            </Descriptions.Item>
          </Descriptions>
        </>
      ) : (
        <Alert type='info' message='No Record Found for this Id' />
      )}
    </AppDetailsView>
  );
}
VendorDetails.propTypes = {
  singleVendor: PropTypes.object,
  id: PropTypes.string,
};
