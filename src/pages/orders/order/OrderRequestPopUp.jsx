import {Button, Modal, Table} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export default function OrderRequestPopUp({
  showPopUp,
  setShowPopUp,
  onSelect,
  orderRequestList,
}) {
  console.log('orderRequestList', orderRequestList);
  const onCancel = () => {
    setShowPopUp(false);
  };
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
      render: (orderDone) => <>{orderDone ? 'Yes' : 'No'}</>,
      key: 'orderDone',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (data) => (
        <Button type='primary' onClick={() => onSelect(data)}>
          Select
        </Button>
      ),
    },
  ];
  return (
    <Modal
      open={showPopUp}
      centered
      onCancel={() => onCancel()}
      title='Order Requests'
      footer={false}
      width={550}>
      <Table columns={columns} dataSource={orderRequestList} />
    </Modal>
  );
}
OrderRequestPopUp.propTypes = {
  showPopUp: PropTypes.any,
  setShowPopUp: PropTypes.any,
  loading: PropTypes.bool,
  onFinish: PropTypes.func,
  orderRequestList: PropTypes.array,
  onSelect: PropTypes.func,
};
