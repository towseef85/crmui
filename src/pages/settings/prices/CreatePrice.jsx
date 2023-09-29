import AppCreateView from '@crema/core/AppCreateView';
import {Col, Row} from 'antd';
import React, { useEffect } from 'react';
import AppControls from '@crema/core/AppControls';
import {POST_PRICES, GET_SINGLEPRICE} from 'shared/constants/ActionTypes';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSingleRecord } from 'redux/actions';


export default function CreatePrice() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {singlePrice} = useSelector(({general})=> general)
  useEffect(()=>{
    dispatch(onGetSingleRecord('Price',id,GET_SINGLEPRICE))
  },[id, singlePrice==null])
  const {AppInputNumberControl, AppSwitchControl} = AppControls;
  console.log("singlePrice",singlePrice);
  return (
    <AppCreateView id={id} initialValues={singlePrice} title='Price' controller='Price' action={POST_PRICES}>
      <Row>
        <Col span={18}>
          <AppInputNumberControl min={1} label='KM' name='km' required={true} />
          <AppInputNumberControl
            min={1}
            label='Price'
            name='prices'
            required={true}
          />
          <AppSwitchControl
            label='isActive'
            name='isActive'
            valuePropName='checked'
            defaultChecked
          />
        </Col>
      </Row>
    </AppCreateView>
  );
}
