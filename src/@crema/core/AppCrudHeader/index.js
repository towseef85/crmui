import React from 'react'
import AppIconButton from '../AppIconButton'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { CloseOutlined, PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import PropTypes from 'prop-types';

export default function AppCrudHeader({title,loading,id,formName,additionButton=null}) {
    const navigate=useNavigate()
  return (
    <div className='apps-header'>
    <AppIconButton
      className='mail-detail-arrow'
      title={`Add ${title}`}
      icon={<BiArrowBack />}
      onClick={() => navigate(-1)}
    />
    <h5 className='mb-0 text-truncate'>{`Add ${title}`}</h5>
    <div className='mail-detail-header-action'>
      <Space>
        <Button
          type='primary'
          loading={loading}
          htmlType='submit'
          icon={<PlusCircleOutlined />}>
          {!id ? `Create ${title}` : `Update ${title}`}
        </Button>
        <Button
          icon={<RollbackOutlined />}
          onClick={() => formName.resetFields()}
          type='default'
          disabled={id}
          loading={loading}>
          Reset
        </Button>
        <Button
          icon={<CloseOutlined />}
          onClick={() => navigate(-1)}
          type='primary'
          loading={loading}
          danger>
          Cancel
        </Button>
        {additionButton}
      </Space>
    </div>
  </div>
  )
}
AppCrudHeader.propTypes = {
    title:PropTypes.string,
    loading:PropTypes.bool,
    id:PropTypes.string,
    formName: PropTypes.any,
    additionButton: PropTypes.any

}
