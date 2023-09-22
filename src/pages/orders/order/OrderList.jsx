import React from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import AppListButtons from '@crema/core/AppListView/ListButtons';
import {Space} from 'antd';

export default function OrderList({loading, vendorOrderList}) {
  const {AppEditButton, AppViewButton} = AppListButtons;
  const columns = [
    {
      title: 'vendor Name',
      dataIndex: 'vendor',
      key: 'storeName',
      render: (vendor) => <>{`${vendor.storeName}-${vendor.ownerName}`}</>,
    },
    {
      title: 'Delivery type',
      dataIndex: 'deliveryType',
      key: 'deliveryType',
      render: (deliveryType) => <>{deliveryType === 0 ? 'Online' : 'COD'}</>,
    },
    {
      title: 'Driver Name',
      dataIndex: 'driver',
      key: 'driver',
      render: (driver) => <>{driver.name}</>,
    },
    {
      title: 'Status',
      dataIndex: 'orderHistory',
      key: 'orderHistory',
      render: (orderHistory) => (
        <>{orderHistory?.slice(-1)[0].orderStatus.engName}</>
      ),
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle='Edit Driver' data={data} />
          <AppViewButton detailsTooltiptitle='Driver Details' data={data} />
        </Space>
      ),
    },
  ];
  return (
    <AppListView
      title='Order'
      columns={columns}
      data={vendorOrderList}
      loading={loading}
    />
  );
}

OrderList.propTypes = {
  vendorOrderList: PropTypes.array,
  loading: PropTypes.bool,
};
