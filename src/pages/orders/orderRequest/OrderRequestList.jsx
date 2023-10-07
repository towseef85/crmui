import React from 'react'
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import AppListButtons from '@crema/core/AppListView/ListButtons';
import {Space} from 'antd';

export default function OrderRequestList({loading, orderRequestList}) {
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
          title: 'Delivery Date',
          dataIndex: 'deliveryDate',
          key: 'deliveryDate',
        },
        {
          title: 'Order Created',
          dataIndex: 'orderDone',
          render:(orderDone)=><>{orderDone?"Yes":"No"}</>,
          key: 'orderDone',
        },
        {
          title: 'Actions',
          key: 'id',
          render: (data) => (
            <Space>
              <AppEditButton disabled={data.orderDone} editTooltiptitle='Edit Order Request' data={data.id} />
              <AppViewButton detailsTooltiptitle='Order Request Details' data={data.id} />
            </Space>
          ),
        },
      ];
  return (
    <AppListView
    title='Order Request'
    columns={columns}
    data={orderRequestList}
    loading={loading}
  />
  )
}


OrderRequestList.propTypes = {
    orderRequestList: PropTypes.array,
    loading: PropTypes.bool,
  };
