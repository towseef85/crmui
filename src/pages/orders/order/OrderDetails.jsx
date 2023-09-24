import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Descriptions, Table, Typography } from 'antd';
import AppDetailsView from '@crema/core/AppDetailsView';

export default function OrderDetails({singleOrder,id}) {
  console.log("singleOrder",singleOrder);
  const columns=[
    {
      title:'#',
      dataIndex:'id',
      render:(j,i, index)=>(
          <>{index+1}</>
      )
      
    },
    {
      title: 'Status Date',
      dataIndex: 'statusUpdateDate',
      key: 'statusUpdateDate',
    },
    {
      title: 'Status',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      render: (orderStatus) => <>{orderStatus.engName}</>,
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
    }

  ]
  return (
    <AppDetailsView
    title='Order'
    id={id}
    navigateTo={`/order/vendororders/create${id}`}
    >
      {
      singleOrder ?
        <>
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
      <Descriptions.Item label="Order Number">{singleOrder.orderNumber}</Descriptions.Item>
      <Descriptions.Item label="Owner name">{singleOrder.vendor.ownerName}</Descriptions.Item>
      <Descriptions.Item label="Store name">{singleOrder.vendor.storeName}</Descriptions.Item>
      <Descriptions.Item label="Pickup Address">{singleOrder.vendor.pickupAddress}</Descriptions.Item>
      <Descriptions.Item label="Mobile Number">{singleOrder.driver.name}</Descriptions.Item>
      <Descriptions.Item label="Order Price">{`${10}KM - ${singleOrder.prices.prices}SAR`}</Descriptions.Item>
      <Descriptions.Item label="Order Date">{singleOrder.deliveryDate}</Descriptions.Item>
      <Descriptions.Item label="Time Slot">{singleOrder.deliveryType === 1 ? "COD":"Online"}</Descriptions.Item>
      {
        singleOrder.deliveryType === 1 &&
        <>
         <Descriptions.Item label="COD Charges">{singleOrder.codCharges}</Descriptions.Item>
        </>

      }
           <Descriptions.Item label="Extra Charges">{singleOrder.extraCharges}</Descriptions.Item>
  
    </Descriptions>
    <Typography.Title level={2} style={{padding:'15px'}}>Order History</Typography.Title>
    <Table pagination={false} columns={columns} dataSource={singleOrder?.orderHistory}/>
        </>
    :
    <Alert type='info' message="No Record Found for this Id"/>
   
    }
    </AppDetailsView>
  )
}
OrderDetails.propTypes = {
  singleOrder: PropTypes.any,
  id:PropTypes.string
}

