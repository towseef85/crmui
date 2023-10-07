import React, { useEffect } from 'react'
import { Form } from 'antd'
import AppForm from '@crema/core/AppForm'
import { useDispatch, useSelector } from 'react-redux';
import { onGetList } from 'redux/actions';
import { GET_VENDORS } from 'shared/constants/ActionTypes';
import AppControls from '@crema/core/AppControls';
import { useParams } from 'react-router-dom';

export default function CreateOrderRequest() {
    const{id} =useParams()
    const {
      AppInputControl,
      AppSelectControl
    } = AppControls;
    const dispatch = useDispatch();
    const [orderRequestForm] = Form.useForm()
    const {vendorList} = useSelector(({marketing}) => marketing);

    useEffect(() => {
      dispatch(onGetList('Vendor', GET_VENDORS));
    }, []);
  
    const vendorOptions = vendorList.map((x) => {
      return {id: x.id, name: `${x.storeName}-${x.ownerName}`};
    });
    const deliveryType = Form.useWatch('deliveryType', orderRequestForm);
    return (
      <AppForm 
      formName={orderRequestForm}
      title='Order Request'
      controller='OrderRequest'
      id={id}
      >
        <AppSelectControl
                    disabled={id}
                    label='Vendor'
                    name='vendorId'
                    required={true}
                    options={vendorOptions}
                  />
                   <AppInputControl
                  label='Order Date'
                  type='date'
                  name='deliveryDate'
                  required={true}
                  format='yyyy-MM-dd'
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
                        min={1}
                        label='COD Charge'
                        name='codCharges'
                        required={deliveryType === 1}
                      />
                      <AppInputControl
                        min={1}
                        label='Order Amount'
                        name='orderAmount'
                        required={deliveryType === 1}
                      />
                    </>
                  )}
                    <AppInputControl
                  min={3}
                  label='Customer Name'
                  name='customerName'
                />
                <AppInputControl
                  min={3}
                  label='Customer Number'
                  name='customerNumber'
                />
      </AppForm>
    )
  }
