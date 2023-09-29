import React from 'react'
import PropTypes from 'prop-types';
import AppsHeader from '../AppsContainer/AppsHeader';
import AppsContent from '../AppsContainer/AppsContent';
import AppTableContainer from '../AppTableContainer';
import { useLocation } from 'react-router-dom';

export default function AppListView({columns,hideAddButton=true, data, title,loading, navigateTo, additionalButton=null}) {
    const location = useLocation()
    const columnsList =[{
      title:'#',
      dataIndex:'id',
      render:(j,i, index)=>(
          <>{index+1}</>
      )
      
    },
    ...columns
      
    ]
  return (
    <>
    <AppsHeader
    navigateTo={navigateTo ? navigateTo : `${location.pathname}/create`}
    title={title}
    hideAddButton={hideAddButton}
    additionalButton={additionalButton}
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
            columns={columnsList}
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
    navigateTo:PropTypes.string,
    hideAddButton:PropTypes.bool,
    additionalButton:PropTypes.any
}
