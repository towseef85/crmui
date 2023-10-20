import React from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import AppListButtons from '@crema/core/AppListView/ListButtons';
import {Space} from 'antd';

export default function DriverList({driverList, loading}) {
  const {AppEditButton, AppViewButton} = AppListButtons;
  const columns = [
    {
      title: 'Driver Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobileNo',
      key: 'mobileNo',
    },
    {
      title: 'Work Type',
      dataIndex: 'workType',
      key: 'workType',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle='Edit Driver' data={data} />
          <AppViewButton detailsTooltiptitle='Driver Details' data={data} />
          {/* <AppDeleteButton
            deleteTooltiptitle='Delete Driver'
            data={data}
            onDelete={() => console.log(data)}
          /> */}
        </Space>
      ),
    },
  ];
  return (
    <AppListView
      title='Driver'
      columns={columns}
      data={driverList}
      loading={loading}
    />
  );
}

DriverList.propTypes = {
  driverList: PropTypes.array,
  loading: PropTypes.bool,
};
