import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import AppListView from '@crema/core/AppListView';
import {Button, Tag} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import CreateOrderStatus from './CreateOrderStatus';

export default function OrderStatusList({
  loading,
  setId,
  setsetId,
  orderStatusList,
}) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'engName',
      key: 'engName',
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (
        <>
          {isActive ? <Tag color='blue'>Yes</Tag> : <Tag color='blue'>No</Tag>}
        </>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (data) => (
        <Button
          type='text'
          onClick={() => setsetId({show: true, record: data})}
          icon={<EditOutlined style={{color: '#D18700'}} />}
        />
      ),
    },
  ];
  return (
    <>
      <AppListView
        title='Order'
        columns={columns}
        data={orderStatusList}
        loading={loading}
        hideAddButton={false}
        additionalButton={
          <Button
            type='primary'
            onClick={() => setsetId({show: true, record: null})}
            icon={<PlusCircleOutlined />}>
            Add Status
          </Button>
        }
      />
      <CreateOrderStatus setId={setId} loading={loading} setsetId={setsetId} />
    </>
  );
}

OrderStatusList.propTypes = {
  orderStatusList: PropTypes.array,
  loading: PropTypes.bool,
  setsetId: PropTypes.array,
  setId: PropTypes.array,
};
