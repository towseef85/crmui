import React, {useEffect, useState} from 'react';
import AppControls from '@crema/core/AppControls';
import {
  GET_DRIVERS,
  GET_VENDORPRICES,
  GET_VENDORS,
  POST_VENDORORDER,
} from 'shared/constants/ActionTypes';
import {Col, Form, Row} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import AppCrudHeader from '@crema/core/AppCrudHeader';
import {
  onGetList,
  onGetSingleVendorOrder,
  onPost,
  onUpdateRecord,
} from 'redux/actions';
import {useNavigate, useParams} from 'react-router-dom';
import AppsContainer from '@crema/core/AppsContainer';

export default function CreateOrder() {
  const {
    AppInputControl,
    AppSelectControl,
    AppSwitchControl,
    AppInputNumberControl,
  } = AppControls;
  const dispatch = useDispatch();
  const [isSamePickUpAddress, setIsSamePickUpAddress] = useState(true);
  const navigate = useNavigate();
  const [vendorForm] = Form.useForm();
  const {driverList, vendorPriceList} = useSelector(({general}) => general);
  const {vendorList,singleorder} = useSelector(({marketing}) => marketing);
  const {loading} = useSelector(({common}) => common);
  // const [singleOrder, setSingleOrder] = useState(null);
  const {id} = useParams();
  useEffect(async () => {
    if (id) {
      // const record = await onGetSingleRecordAsync(id);
      // const data = record.data?.data;
      dispatch(onGetSingleVendorOrder(id));
      // console.log(data);
      // setSingleOrder(data);
      if (singleorder) vendorForm.setFieldsValue(singleorder);
    }
    dispatch(onGetList('Vendor', GET_VENDORS));
    dispatch(onGetList('Driver', GET_DRIVERS));
  }, [id,singleorder===null]);
  const handleVendorPrice = (value) => {
    getPrices(value);
  };
  const getPrices = (value) => {
    dispatch(onGetList(`Vendor/GetVendorPrices/${value}`, GET_VENDORPRICES));
  };
  const vendorOptions = vendorList.map((x) => {
    return {id: x.id, name: `${x.storeName}-${x.ownerName}`};
  });
  const vendorprice = vendorPriceList
    ? vendorPriceList.map((x) => {
        return {
          id: x?.priceId,
          name: `${x?.price.km}KM - SAR ${x?.price.prices}`,
        };
      })
    : [];
  const driverOptions = driverList.map((x) => {
    return {id: x.id, name: x.name};
  });
  console.log('singleOrder', singleorder);
  const onFinish = (values) => {

    if (id) {
      debugger;
      let newValues = {...values, id: id};
      dispatch(onUpdateRecord(id, 'Order', newValues, navigate));
    } else {
      dispatch(onPost(values, 'Order', POST_VENDORORDER, vendorForm));
    }
  };
  const deliveryType = Form.useWatch('deliveryType', vendorForm);
  return (
    <AppsContainer title="Vendor Order" type='right' fullView>
    <div className='mail-detail'>
      <Form
        name='basic'
        form={vendorForm}
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete='off'>
        <AppCrudHeader
          formName={vendorForm}
          id={id}
          title='Vendor Order'
          loading={loading}
        />
        <div className='mail-detail-body'>
        <Row>
          <Col span={12}>
            <AppSelectControl
              disabled={id}
              label='Vendor'
              name='vendorId'
              required={true}
              onChange={handleVendorPrice}
              options={vendorOptions}
            />
            <AppSelectControl
              label='Vendor Price'
              name='priceId'
              required={true}
              options={vendorprice}
            />
            <AppSelectControl
              label='Driver'
              name='driverId'
              required={true}
              options={driverOptions}
            />
            <AppSelectControl
              label='Delivery Type'
              name='deliveryType'
              required={true}
              options={[
                {id: 1, name: 'COD'},
                {id: 0, name: 'Online'},
              ]}
            />
            {deliveryType === 1 && (
              <>
                <AppInputControl
                  min={2}
                  label='COD Charge'
                  name='codCharges'
                  required={deliveryType === 1}
                />
                <AppInputControl
                  min={2}
                  label='Order Amount'
                  name='orderAmount'
                  required={deliveryType === 1}
                />
              </>
            )}
          </Col>

          <Col span={12}>
            <AppInputControl
              label='Order Date'
              type='date'
              name='deliveryDate'
              required={true}
              format="yyyy-MM-dd"
            />
            <AppSwitchControl
              label='PickUp location Same'
              name='isSame'
              valuePropName='checked'
              initialValue={isSamePickUpAddress}
              onChange={(e) => setIsSamePickUpAddress(e)}
            />
            {!isSamePickUpAddress && (
              <AppInputControl
                label='PickUp Location'
                min={10}
                isTextArea={true}
                name='pickupLocation'
                required={!isSamePickUpAddress}
              />
            )}
            <AppInputControl
              min={4}
              label='Remarks'
              name='remarks'
              isTextArea={true}
            />
            <AppInputNumberControl
              defaultValue={0}
              min={0}
              label='Extra Charges'
              name='extraCharges'
            />
          </Col>
        </Row>
        </div>
      </Form>
    </div>
  </AppsContainer>
  );
}
