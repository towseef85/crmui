import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import AppListButtons from '@crema/core/AppListView/ListButtons';
import {Button, Space, Tooltip} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import OrderStatusUpdate from './OrderStatusUpdate';

export default function OrderList({loading, vendorOrderList,orderStatusList}) {
  const {AppEditButton, AppViewButton} = AppListButtons;
  const [showPopUp, setShowPopUp] = useState({show:false, id:null})
  const columns = [
    {
      title: 'Order No',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      render:(orderNumber)=><>{`${orderNumber.slice(0,8)}...`}</>
    },
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
        <>{orderHistory[0].orderStatus.engName}</>
      ),
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (data) => (
        <Space>
             <Button
        type="text"
        onClick={()=>setShowPopUp({show:true, id:data.id})}
        icon={<CloudUploadOutlined  style={{ color: "#D18700" }} />}
      />
          <AppEditButton editTooltiptitle='Edit Driver' data={data.id} />
          <AppViewButton detailsTooltiptitle='Driver Details' data={data.id} />
          <Tooltip title="Update Order Status">
       
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <>
    
    <AppListView
      title='Order'
      columns={columns}
      data={vendorOrderList}
      loading={loading}
    />
    <OrderStatusUpdate
    showPopUp={showPopUp}
    setShowPopUp={setShowPopUp}
    loading={loading}
    orderStatusList={orderStatusList}
    />
    </>
  );
}

OrderList.propTypes = {
  vendorOrderList: PropTypes.array,
  loading: PropTypes.bool,
  orderStatusList:PropTypes.array
};
