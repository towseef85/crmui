import React from 'react'
import PropTypes from 'prop-types';
import AppControls from '@crema/core/AppControls';
import { Form, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { onPost } from 'redux/actions';
import { POST_ORDERSTATUS } from 'shared/constants/ActionTypes';

export default function OrderStatusUpdate({showPopUp,setShowPopUp,orderStatusList}) {
  const dispatch = useDispatch()
    const {
        AppInputControl,
        AppSelectControl
      } = AppControls;
    const [statusForm]= Form.useForm()
    const onFinish=()=>{
        statusForm.validateFields()
        .then((value)=>{
          let newValues ={...value, orderId:showPopUp.id}
          dispatch(onPost(newValues,'OrderHistory',POST_ORDERSTATUS,statusForm))
        })
        .catch((info)=>{
          console.log("validation Fields",info);
        })
    }
    const onCancel=()=>{
      statusForm.resetFields();
      setShowPopUp({show:false, id:null})

    }
  return (
    <Modal
    open={showPopUp.show}
    centered
    onCancel={() => onCancel()}
    title='Update OrderStatus'
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
            <AppSelectControl
              label='Status'
              name='statusId'
              required={true}
              options={orderStatusList.map(x=>{return{id:x.id,name:x.engName}})}
            />
            <AppInputControl
              label='Remarks'
              name='remarks'
              isTextArea={true}
            />
        </Form>

    </Modal>
  )
}

OrderStatusUpdate.propTypes = {
    showPopUp: PropTypes.any,
    setShowPopUp: PropTypes.any,
    loading: PropTypes.bool,
    orderStatusList:PropTypes.array
  };
