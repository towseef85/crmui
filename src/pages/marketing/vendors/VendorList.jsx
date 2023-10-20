import React from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import AppListButtons from '@crema/core/AppListView/ListButtons';
import {Space} from 'antd';

export default function VendorList({vendorList, loading}) {
  const {AppEditButton, AppViewButton} = AppListButtons;
  const columns = [
    {
      title: 'Store Name',
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: 'Owner Name',
      dataIndex: 'ownerName',
      key: 'ownerName',
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobileNo',
      key: 'mobileNo',
    },
    {
      title: 'Email Id',
      dataIndex: 'emailId',
      key: 'emailId',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle='Edit Vendor' data={data.id} />
          <AppViewButton detailsTooltiptitle='Vendor Details' data={data.id} />
        </Space>
      ),
    },
  ];
  return (
    <AppListView
      title='Vendor'
      columns={columns}
      data={vendorList}
      loading={loading}
    />
  );
}

VendorList.propTypes = {
  vendorList: PropTypes.array,
  loading: PropTypes.bool,
};
