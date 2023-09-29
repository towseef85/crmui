import React, {useEffect} from 'react';
import AppControls from '@crema/core/AppControls';
import {GET_DRIVERORDERS, GET_DRIVERS} from 'shared/constants/ActionTypes';
import {Button, Col, Form, Row, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import AppCrudHeader from '@crema/core/AppCrudHeader';
import {useParams} from 'react-router-dom';
import AppsContainer from '@crema/core/AppsContainer';
import {onGetList, onGetSingleRecord} from 'redux/actions';

export default function AddDriverPayment() {
  const {AppInputControl, AppSelectControl} = AppControls;
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const {id} = useParams();
  const [orderdriverForm] = Form.useForm();
  const {driverList} = useSelector(({general}) => general);
  const {loading} = useSelector(({common}) => common);
  useEffect(async () => {
    // if (id) {
    //   dispatch(onGetSingleVendorOrder(id));
    //   if (singleorder) vendorForm.setFieldsValue(singleorder);
    // }

    dispatch(onGetList('Driver', GET_DRIVERS));
  }, []);
  const driverOptions = driverList.map((x) => {
    return {id: x.id, name: x.name};
  });
  const onFinish = (values) => {
    console.log('values', values);
  };
  const handleDriverChange = (value) => {
    dispatch(
      onGetSingleRecord(`Driver/GetOrderForDriver`, value, GET_DRIVERORDERS),
    );
  };
  const driverId = Form.useWatch('driverId', orderdriverForm);
  const handleDriverOrder = () => {
    if (!driverId) return message.error('Please Select driver');
  };
  return (
    <AppsContainer title='Driver Order Payment' type='right' fullView>
      <div className='mail-detail'>
        <Form
          name='basic'
          form={orderdriverForm}
          onFinish={onFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete='off'>
          <AppCrudHeader
            formName={orderdriverForm}
            id={id}
            title='Driver Order Payment'
            loading={loading}
          />
          <div className='mail-detail-body'>
            <Row>
              <Col span={12}>
                <AppInputControl
                  disabled={true}
                  label='Payment Number'
                  name='number'
                />
                <AppInputControl
                  disabled={true}
                  label='Total Amount'
                  name='totalAmount'
                />
                <AppInputControl
                  isTextArea={true}
                  label='Remarks'
                  name='remarks'
                />
              </Col>
              <Col span={12}>
                <AppSelectControl
                  disabled={id}
                  label='Driver'
                  name='driverId'
                  required={true}
                  onChange={handleDriverChange}
                  options={driverOptions}
                />
                <AppInputControl
                  disabled={true}
                  label='Paid Amount'
                  name='paidAmount'
                />
                <AppInputControl
                  disabled={true}
                  label='Balance'
                  name='balance'
                />
                <Button onClick={handleDriverOrder} type='primary'>
                  Select Orders
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </AppsContainer>
  );
}
