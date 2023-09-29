import React from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import {Tag} from 'antd';
import AppListButtons from '@crema/core/AppListView/ListButtons';

export default function PriceList({priceList, loading}) {

  const {AppEditButton} = AppListButtons;
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
    {
      title: 'Actions',
      key: 'id',
      render: (data) => 
          <AppEditButton 
          editTooltiptitle='Edit Price' data={data.id} />
    }
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
