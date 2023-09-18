import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/es/modal/Modal';
import {Table, Tag} from 'antd';

export default function VendorPrices({
  openPopUp,
  setshowPopUp,
  selectedPrices,
  priceList,
  setSelectedPrices,
  onPriceSelection,
}) {
  const columns = [
    {
      title: 'KM',
      dataIndex: 'km',
      key: 'km',
    },
    {
      title: 'Price',
      dataIndex: 'prices',
      key: 'prices',
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (data) =>
        data ? <Tag color='blue'>Yes</Tag> : <Tag color='red'>No</Tag>,
    },
  ];

  return (
    <Modal
      open={openPopUp}
      centered
      onCancel={() => setshowPopUp(false)}
      title='Select Prices'
      onOk={onPriceSelection}
      width={850}>
      <Table
        rowSelection={{
          type: 'checkbox',
          onSelect: (record) => {
            const getData = selectedPrices.find((x) => x.id === record.id);
            if (getData) {
              const filterData = selectedPrices.filter(
                (x) => x.id !== getData.id,
              );
              setSelectedPrices(filterData);
              return;
            }
            setSelectedPrices([...selectedPrices, record]);
          },
        }}
        rowKey={(record) => record.id}
        dataSource={priceList}
        columns={columns}
      />
    </Modal>
  );
}

VendorPrices.propTypes = {
  openPopUp: PropTypes.bool,
  id: PropTypes.string,
  setshowPopUp: PropTypes.bool,
  selectedPrices: PropTypes.array,
  setSelectedPrices: PropTypes.array,
  priceList: PropTypes.array,
  onPriceSelection: PropTypes.func,
};
