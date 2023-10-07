import { Modal } from 'antd'
import React from 'react'
import PropTypes from 'prop-types';

export default function OrderRequestPopUp({showPopUp, setShowPopUp, onFinish, orderRequestList}) {
  console.log("orderRequestList",orderRequestList);
  const onCancel =()=>{
    setShowPopUp(false)
  }

  return (
    <Modal
    open={showPopUp}
    centered
    onCancel={() => onCancel()}
    title='Order Requests'
    onOk={onFinish}
    width={550}>
    </Modal>
  )
}
OrderRequestPopUp.propTypes = {
  showPopUp: PropTypes.any,
  setShowPopUp: PropTypes.any,
  loading: PropTypes.bool,
  onFinish:PropTypes.func,
  orderRequestList:PropTypes.array
};
