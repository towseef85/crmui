import AppCreateView from '@crema/core/AppCreateView';
import React, {useState, useEffect} from 'react';
import AppControls from '@crema/core/AppControls';
import {Button, Col, Row, message} from 'antd';
import {POST_VENDORS, GET_PRICES} from 'shared/constants/ActionTypes';
import {DollarOutlined} from '@ant-design/icons';
import {onGetList} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import VendorPrices from './VendorPrices';
import {useParams} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

export default function CreateVendor() {
  const {id} = useParams();
  const {priceList} = useSelector(({general}) => general);
  const dispatch = useDispatch();
  const {AppInputControl} = AppControls;
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [vendorPrices, setVendorPrices] = useState([]);
  const [showPopUp, setshowPopUp] = useState(false);
  const [hasCondition, setHasCondition] = useState(true);

  useEffect(() => {
    dispatch(onGetList('Price', GET_PRICES));
  }, []);
  const onPriceSelection = () => {
    if (selectedPrices.length > 0) {
      let prices = selectedPrices.map((x) => {
        return {id: uuid(), priceId: x.id};
      });
      setVendorPrices(prices);
      setHasCondition(false);
      setshowPopUp(false);
      return;
    }
    message.error('Please Select Atleast one Price!');
  };
  return (
    <>
      <AppCreateView
        title='Vendor'
        controller='Vendor'
        action={POST_VENDORS}
        hasCondition={hasCondition}
        conditionMessage='Please select Prices for vendors'
        othervalues={{vendorPrice: vendorPrices}}
        additionButton={
          <Button
            type='primary'
            icon={<DollarOutlined />}
            onClick={() => setshowPopUp(true)}>
            Add Prices
          </Button>
        }>
        <Row>
          <Col span={12}>
            <AppInputControl
              min={4}
              label='Owner Name'
              name='ownerName'
              required={true}
            />
            <AppInputControl
              label='Mobile Number'
              min={10}
              name='mobileNo'
              required={true}
            />
            <AppInputControl
              label='Office Number'
              name='officeNumber'
              required={false}
            />
            <AppInputControl
              label='Lead Source'
              name='leadSource'
              required={false}
            />
          </Col>
          <Col span={12}>
            <AppInputControl
              label='Store Name'
              name='storeName'
              required={true}
            />
            <AppInputControl
              label='Email ID'
              type='email'
              name='emailId'
              required={true}
            />
            <AppInputControl
              label='Location Url'
              name='locationUrl'
              required={false}
            />
            <AppInputControl
              label='Pickup Address'
              name='pickupAddress'
              required={true}
              isTextArea={true}
            />
          </Col>
        </Row>
      </AppCreateView>
      <VendorPrices
        openPopUp={showPopUp}
        id={id}
        setshowPopUp={setshowPopUp}
        selectedPrices={selectedPrices}
        setSelectedPrices={setSelectedPrices}
        priceList={priceList}
        onPriceSelection={onPriceSelection}
      />
    </>
  );
}
