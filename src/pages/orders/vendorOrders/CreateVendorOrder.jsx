import React, {useEffect} from 'react';
import AppControls from '@crema/core/AppControls';
import {POST_VENDORORDER} from 'shared/constants/ActionTypes';
import {Col, Form, Row} from 'antd';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import AppCrudHeader from '@crema/core/AppCrudHeader';
import {onGetSingleVendorOrder, onPost, onUpdateRecord} from 'redux/actions';
import {useNavigate} from 'react-router-dom';

export default function CreateVendorOrder({
  id,
  vendorList,
  driverList,
  singleOrder,
  isSamePickUpAddress,
  setIsSamePickUpAddress,
  handleVendorPrice,
  vendorPriceList,
  setSingleOrder,
  loading,
}) {
  const {
    AppInputControl,
    AppSelectControl,
    AppSwitchControl,
    AppInputNumberControl,
  } = AppControls;
  useEffect(() => {
    if (id) {
      //dispatch(onGetSingleRecord('Order',id,setSingleOrder))
      dispatch(onGetSingleVendorOrder(id, setSingleOrder));
    }
  }, [id]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vendorForm] = Form.useForm();
  const vendorOptions = vendorList.map((x) => {
    return {id: x.id, name: `${x.storeName}-${x.ownerName}`};
  });
  const driverOptions = driverList.map((x) => {
    return {id: x.id, name: x.name};
  });
  const vendorprice = vendorPriceList
    ? vendorPriceList.map((x) => {
        return {id: x.priceId, name: `${x.price.km}KM - SAR ${x.price.prices}`};
      })
    : [];

  const onFinish = (values) => {
    if (id) {
      let newValues = {...values, id: id};
      dispatch(onUpdateRecord(id, 'Order', newValues, navigate));
    } else {
      dispatch(onPost(values, 'Order', POST_VENDORORDER, vendorForm));
    }
  };
  const deliveryType = Form.useWatch('deliveryType', vendorForm);

  return (
    <div className='mail-detail'>
      <Form
        name='basic'
        form={vendorForm}
        onFinish={onFinish}
        disabled={loading}
        initialValues={singleOrder}
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
      </Form>
    </div>
  );
}
CreateVendorOrder.propTypes = {
  id: PropTypes.string,
  vendorList: PropTypes.array,
  driverList: PropTypes.array,
  singleOrder: PropTypes.any,
  handleDeliveryTypeChange: PropTypes.func,
  showCODChargers: PropTypes.bool,
  isSamePickUpAddress: PropTypes.any,
  setIsSamePickUpAddress: PropTypes.any,
  vendorPriceList: PropTypes.array,
  handleVendorPrice: PropTypes.func,
  setShowCODChargers: PropTypes.any,
  getPrices: PropTypes.func,
  setVendorPrices: PropTypes.any,
  loading: PropTypes.bool,
  setSingleOrder: PropTypes.any,
};
