import AppCreateView from '@crema/core/AppCreateView';
import {Col, Row} from 'antd';
import React from 'react';
import AppControls from '@crema/core/AppControls';
import {POST_PRICES} from 'shared/constants/ActionTypes';

export default function CreatePrice() {
  const {AppInputNumberControl, AppSwitchControl} = AppControls;
  return (
    <AppCreateView title='Price' controller='Price' action={POST_PRICES}>
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
