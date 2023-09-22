import React from 'react';
import PropTypes from 'prop-types';
import {onPost,onUpdateRecord} from 'redux/actions';
import AppsContent from '../AppsContainer/AppsContent';
import AppAnimateGroup from '../AppAnimateGroup';
import AppsContainer from '../AppsContainer';
import AppPageMetadata from '../AppPageMetadata';
import AppIconButton from '../AppIconButton';
import { useDispatch } from 'react-redux';
import {BiArrowBack} from 'react-icons/bi';
import {Button, Form, Space, message} from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  CloseOutlined,
  PlusCircleOutlined,
  RollbackOutlined,
} from '@ant-design/icons';

export default function AppCreateView({
  title,
  children,
  loading,
  labelCol = 8,
  wrapperCol = 16,
  additionButton = null,
  controller,
  othervalues=null,
  action,
  id,
  hasCondition = false,
  conditionMessage = null,
  initialValues=null,
  ...rest
}) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [formName] = Form.useForm();
  const onFinish = (values) => {
    if (hasCondition) return message.error(conditionMessage);
    debugger;
    if(id){
      if(othervalues){
        let newValues ={...values, ...othervalues,id:id}
        dispatch(onUpdateRecord(id,controller,newValues,navigate))
      }
      else{
        let newValues ={...values,id:id}
        dispatch(onUpdateRecord(id,controller,newValues,navigate))
      }
    }
    else{
      if(othervalues){
        let newValues ={...values, ...othervalues}
        dispatch(onPost(newValues,controller,action,formName))
      }
      else{
        dispatch(onPost(values,controller,action,formName))
      }
    }

    
  };
  const onFinishFailed = () => {};
  console.log("initialValues",initialValues);
  if(initialValues) formName.setFieldsValue(initialValues)
  return (
    <>
 <AppPageMetadata title={title} />
      <AppsContainer title={title} type='right' fullView>
        <div className='mail-detail'>
          <Form
            name='basic'
            form={formName}
            onFinish={onFinish}
            disabled={loading}
            onFinishFailed={onFinishFailed}
            labelCol={{
              span: labelCol,
            }}
            wrapperCol={{
              span: wrapperCol,
            }}
            autoComplete='off'
            {...rest}>
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
            <AppsContent isDetailView>
              <AppAnimateGroup type='bottom'>
                <div className='mail-detail-body'>{children}</div>
              </AppAnimateGroup>
            </AppsContent>
          </Form>
        </div>
      </AppsContainer>
    </>
  );
}
AppCreateView.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  loading: PropTypes.bool,
  labelCol: PropTypes.number,
  wrapperCol: PropTypes.number,
  additionButton: PropTypes.any,
  controller: PropTypes.string,
  action: PropTypes.string,
  hasCondition: PropTypes.bool,
  conditionMessage: PropTypes.string,
  othervalues:PropTypes.any,
  initialValues:PropTypes.any,
  id:PropTypes.string,
  watchValue:PropTypes.any,
  retunvalue:PropTypes.any
};
