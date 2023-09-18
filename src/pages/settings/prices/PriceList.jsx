import React from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import {Tag} from 'antd';

export default function PriceList({priceList, loading}) {
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
    <AppListView
      title='Price'
      columns={columns}
      data={priceList}
      loading={loading}
    />
  );
}
PriceList.propTypes = {
  priceList: PropTypes.array,
  loading: PropTypes.bool,
};
