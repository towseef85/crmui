import React from 'react';
import {Table, Modal} from 'antd';
import PropTypes from 'prop-types';

export default function DriverOrdersPopup({
  driverOrderList,
  showPopUp,
  setShowPopUp,
  selectedOrders,
  setSelectedOrders,
}) {
  console.log('driverOrderList', driverOrderList);
  const columns = [
    {
      title: 'Driver Name',
      dataIndex: 'driver',
      key: 'driver',
      render: (driver) => <>{driver.name}</>,
    },
    {
      title: 'Order No',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'vendor Name',
      dataIndex: 'vendor',
      key: 'storeName',
      render: (vendor) => <>{`${vendor.storeName}-${vendor.ownerName}`}</>,
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
    },
    {
      title: 'COD Charges',
      dataIndex: 'codCharges',
      key: 'codCharges',
    },
    {
      title: 'Order Amount',
      dataIndex: 'orderAmount',
      key: 'orderAmount',
    },
    {
      title: 'total',
      key: 'total',
      render: (data) => <>{data.codCharges + data.orderAmount}</>,
    },
  ];
  const onCancel = () => {
    setShowPopUp(false);
    setSelectedOrders([]);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Modal
      open={showPopUp}
      centered
      onCancel={() => onCancel()}
      title='Update OrderStatus'
      onOk={onFinish}
      width={950}>
      {driverOrderList.length > 0 && (
        <Table
          columns={columns}
          dataSource={driverOrderList}
          rowKey={(record) => record.id}
          rowSelection={{
            type: 'checkbox',
            onSelect: (record) => {
              const getData = selectedOrders.find((x) => x.id === record.id);
              if (getData) {
                const filterData = selectedOrders.filter(
                  (x) => x.id !== getData.id,
                );
                setSelectedOrders(filterData);
                return;
              }
              setSelectedOrders([...selectedOrders, record]);
            },
          }}
        />
      )}
    </Modal>
  );
}
DriverOrdersPopup.propTypes = {
  showPopUp: PropTypes.any,
  setShowPopUp: PropTypes.any,
  driverOrderList: PropTypes.array,
  selectedOrders: PropTypes.array,
  setSelectedOrders: PropTypes.any,
};
