import {Form, Modal} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import AppControls from '@crema/core/AppControls';
import {onPost, onUpdateRecord} from 'redux/actions';
import {useDispatch} from 'react-redux';
import {POST_ORDERSTATUS} from 'shared/constants/ActionTypes';

export default function CreateOrderStatus({
  setId,
  setsetId,
  singleOrderStatus,
}) {
  console.log('setId', setId);
  const dispatch = useDispatch();
  const {AppInputControl, AppSwitchControl} = AppControls;
  const [statusForm] = Form.useForm();
  if (setId) {
    statusForm.setFieldsValue(setId.record);
  }
  const onFinish = () => {
    if (setId?.record?.id) {
      statusForm
        .validateFields()
        .then((value) => {
          let newvalues = {
            ...value,
            id: setId?.record?.id,
            arbName: value.engName,
          };
          dispatch(onUpdateRecord(setId.record.id, 'OrderStatus', newvalues));
        })
        .catch((info) => {
          console.log('validation Fields', info);
        });
    } else {
      statusForm
        .validateFields()
        .then((value) => {
          let newValues = {...value, arbName: value.engName};
          dispatch(
            onPost(newValues, 'OrderStatus', POST_ORDERSTATUS, statusForm),
          );
        })
        .catch((info) => {
          console.log('validation Fields', info);
        });
    }
  };
  const onCancel = () => {
    setsetId({show: false, record: null});
    statusForm.resetFields();
  };
  console.log('singleOrderStatus', singleOrderStatus);
  return (
    <Modal
      open={setId.show}
      centered
      onCancel={() => onCancel()}
      title={setId?.record?.id ? 'Update Order Status' : 'Add Order Status'}
      okText={setId?.record?.id ? 'Update' : 'OK'}
      onOk={onFinish}
      width={550}>
      <Form
        name='basic'
        form={statusForm}
        onFinish={onFinish}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        autoComplete='off'>
        <AppInputControl label='Name' name='engName' required={true} />
        <AppInputControl
          label='Description'
          name='description'
          isTextArea={true}
        />
        <AppSwitchControl
          label='Is Active'
          name='isActive'
          valuePropName='checked'
        />
      </Form>
    </Modal>
  );
}
CreateOrderStatus.propTypes = {
  setsetId: PropTypes.array,
  setId: PropTypes.array,
  singleOrderStatus: PropTypes.object,
};
