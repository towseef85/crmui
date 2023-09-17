import React from 'react'
import PropTypes from 'prop-types';
import AppsHeader from '../AppsContainer/AppsHeader';
import AppsContent from '../AppsContainer/AppsContent';
import AppTableContainer from '../AppTableContainer';
import { useLocation } from 'react-router-dom';

export default function AppListView({columns, data, title,loading, navigateTo}) {
    const location = useLocation()
  return (
    <>
    <AppsHeader
    navigateTo={navigateTo ? navigateTo : `${location.pathname}/create`}
    title={title}
    hideAddButton={true}
    />
    <AppsContent
    style={{
      paddingTop: 10,
      paddingBottom: 10,
    }}>
        <AppTableContainer
            className='order-table'
            hoverColor
            data={data}
            columns={columns}
            loading={loading}
            />
    </AppsContent>
    </>
  )
}
AppListView.propTypes={
    columns: PropTypes.array,
    title:PropTypes.string,
    loading:PropTypes.bool,
    data:PropTypes.array,
    navigateTo:PropTypes.string
}
