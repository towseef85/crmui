import React, { useEffect } from 'react'
import { Button, Form, Space, message } from 'antd'
import PropTypes from 'prop-types';
import AppPageMetadata from '../AppPageMetadata'
import AppsContainer from '../AppsContainer'
import { useNavigate } from 'react-router-dom'
import AppIconButton from '../AppIconButton'
import { BiArrowBack } from 'react-icons/bi'
import { CloseOutlined, PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons'
import AppsContent from '../AppsContainer/AppsContent'
import AppAnimateGroup from '../AppAnimateGroup'
import { GetUpdateData, onPost, onUpdateRecord } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { POST_DATA } from 'shared/constants/ActionTypes';

export default function AppForm({formName, children, title,id, loading, labelCol = 8,
  wrapperCol = 16,
  controller,
  action=POST_DATA,
  otherValues=null,
  hasCondition = false,
  conditionMessage = null,
  additionButton = null}) {
    useEffect(async()=>{
      if(id){
        const {data} = await GetUpdateData(id, controller)
        if(data.statusCode === 200){
          formName.setFieldsValue(data.data)
        }
      }
      else{
        formName.resetFields()
      }
    },[id])
    const dispatch=useDispatch()
  const navigate = useNavigate()
  const onFinish=(values)=>{
    if(hasCondition) return message.error(conditionMessage);
    if(id){
      if(otherValues){
        let newValues ={...values, ...otherValues,id:id}
        dispatch(onUpdateRecord(id,controller,newValues,navigate))
      }
      else{
        let newValues ={...values,id:id}
        dispatch(onUpdateRecord(id,controller,newValues,navigate))
      }

    }
    else{
      if(otherValues){
        let newValues ={...values, ...otherValues}
        dispatch(onPost(newValues,controller,action,formName))
      }
      else{
        dispatch(onPost(values,controller,action,formName))
      }
    }
  }
  const onFinishFailed=()=>{

  }

  const onCancel =()=>{
    navigate(-1)
  }
  return (
    <>  
    <AppPageMetadata title={title} />
    <AppsContainer title={title} type='right' fullView>
    <div className='mail-detail'>
    <Form
    form={formName}
    labelCol={{
      span: labelCol,
    }}
    wrapperCol={{
      span: wrapperCol,
    }}
    onFinish={onFinish}
    disabled={loading}
    onFinishFailed={onFinishFailed}

    >
              <div className='apps-header'>
              <AppIconButton
                className='mail-detail-arrow'
                title={id ? `Update ${title}` :`Add ${title}`}
                icon={<BiArrowBack />}
                onClick={onCancel}
              />
              <h5 className='mb-0 text-truncate'>{id ? `Update ${title}` :`Add ${title}`}</h5>
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
                    onClick={onCancel}
                    type='primary'
                    loading={loading}
                    danger>
                    Cancel
                  </Button>
                  {additionButton}
                </Space>
              </div>
            </div>
            <AppsContent isDetailView>
              <AppAnimateGroup type='bottom'>
                <div className='mail-detail-body'>{children}</div>
              </AppAnimateGroup>
            </AppsContent>
    </Form>
    </div>
    </AppsContainer>
    </>
  )
}

AppForm.propTypes = {
  children: PropTypes.any,
  formName:PropTypes.any,
  title: PropTypes.string,
  loading: PropTypes.bool,
  labelCol: PropTypes.number,
  wrapperCol: PropTypes.number,
  additionButton: PropTypes.any,
  controller: PropTypes.string,
  action: PropTypes.string,
  hasCondition: PropTypes.bool,
  conditionMessage: PropTypes.string,
  updateAction:PropTypes.string,
  otherValues:PropTypes.any,
  id:PropTypes.string,
  initialValues:PropTypes.any
};
