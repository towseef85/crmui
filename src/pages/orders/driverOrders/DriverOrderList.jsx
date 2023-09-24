import React from 'react'
import { Col, Form, Table } from 'antd'
import AppsHeader from '@crema/core/AppsContainer/AppsHeader'
import AppsContent from '@crema/core/AppsContainer/AppsContent'
import AppControls from '@crema/core/AppControls'
import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux'
import { onGetSingleRecord } from 'redux/actions'
import { GET_DRIVERORDERS } from 'shared/constants/ActionTypes'

export default function DriverOrderList({driverList}) {
    const {AppSelectControl} = AppControls
    const dispatch = useDispatch()
    const {driverOrderList} = useSelector(({general})=> general)
    const handleDriverSelect=(value)=>{
        dispatch(onGetSingleRecord(`Driver/GetOrderForDriver`,value,GET_DRIVERORDERS))
    }
    console.log("driverOrderList",driverOrderList);
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
          render:(orderNumber)=><>{`${orderNumber.slice(0,8)}...`}</>
        },
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
        }
      ];
  return (
    <>
     
    <AppsHeader
    title="Add Payment"
    hideAddButton={false}
    />
    <AppsContent
    style={{
      paddingTop: 10,
      paddingBottom: 10,
    }}>
        <Col span={20} offset={2}>
            <Form>

            <AppSelectControl
            label="Select Driver"
            name="driverId"
            onChange={handleDriverSelect}
            options={driverList.map(x=>{return{id:x.id, name:x.name}})}
            />
            </Form>
            {
            driverOrderList.length>0 &&
            <Table columns={columns} dataSource={driverOrderList} />
        }
        </Col>
       
    </AppsContent>
    </>
  )
}

DriverOrderList.propTypes = {
    driverList: PropTypes.array,
    loading: PropTypes.bool,
  };
  
