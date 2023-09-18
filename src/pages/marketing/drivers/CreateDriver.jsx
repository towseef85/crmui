import AppCreateView from '@crema/core/AppCreateView';
import React from 'react';
import AppControls from '@crema/core/AppControls';
import {POST_DRIVER} from 'shared/constants/ActionTypes';
import {Col, Row} from 'antd';

export default function CreateDriver() {
  const {AppInputControl, AppSelectControl} = AppControls;
  return (
    <AppCreateView title='Driver' controller='Driver' action={POST_DRIVER}>
      <Row>
        <Col span={18}>
          <AppInputControl
            min={4}
            label='Driver Name'
            name='name'
            required={true}
          />
          <AppInputControl
            label='Mobile Number'
            min={10}
            name='mobileNo'
            required={true}
          />
          <AppSelectControl
            label='Work Type'
            name='workType'
            required={true}
            options={[
              {id: 'FullTime', name: 'FullTime'},
              {id: 'PartTime', name: 'PartTime'},
            ]}
          />
          <AppSelectControl
            label='Status'
            name='status'
            required={true}
            options={[
              {id: 'Active', name: 'Active'},
              {id: 'InActive', name: 'InActive'},
            ]}
          />
        </Col>
      </Row>
    </AppCreateView>
  );
}
