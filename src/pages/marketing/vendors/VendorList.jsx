import React from 'react'
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';

export default function VendorList({vendorList, loading}) {
    const columns=[
        {
            title:'Store Name',
          dataIndex:'storeName',
          key:'storeName',
        },
        {
            title:'Owner Name',
            dataIndex:'ownerName',
            key:'ownerName',
        },
        {
            title:'Mobile No',
            dataIndex:'mobileNo',
            key:'mobileNo',
        },
        {
            title:'Email Id',
            dataIndex:'emailId',
            key:'emailId',
        }

    ]
  return (
    <AppListView
    title='Vendor'
    columns={columns}
    data={vendorList}
    loading={loading}
    />

  )
}

VendorList.propTypes={
    vendorList: PropTypes.array,
    loading:PropTypes.bool,
  }
