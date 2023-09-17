import React from 'react'
import PropTypes from 'prop-types';
import AppsContent from '../AppsContainer/AppsContent'
import AppAnimateGroup from '../AppAnimateGroup'
import AppsContainer from '../AppsContainer';
import AppPageMetadata from '../AppPageMetadata';
import AppIconButton from '../AppIconButton';
import { BiArrowBack } from 'react-icons/bi';
import { Button, Form, Space } from 'antd';
import { CloseOutlined, PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

export default function AppCreateView({title,children,loading, labelCol = 8,
    wrapperCol = 16,additionButton=null,controller,...rest }) {
        const navigate= useNavigate()
    const [formName] = Form.useForm()
    const onFinish=(values)=>{

        console.log(values,controller);
    }
    const onFinishFailed=()=>{

    }
  return (
    <>
    <AppPageMetadata title={title}/>
    <AppsContainer title={title} type='right' fullView>
    <div className='mail-detail'>
    <Form
      name="basic"
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
      autoComplete="off"
      {...rest}
    >
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
                
            <Button type='primary' loading={loading} htmlType='submit' icon={<PlusCircleOutlined/>}>
                {`Create ${title}`}
            </Button>
            <Button
                icon={<RollbackOutlined />}
                onClick={() => formName.resetFields()}
                type="default"
                loading={loading}
              >
                Reset
              </Button>
              <Button
                icon={<CloseOutlined />}
                onClick={() => navigate(-1)}
                type="primary"
                loading={loading}
                danger
              >
                Cancel
              </Button>
              {additionButton}
            
            </Space>
            </div>
    </div>
    <AppsContent isDetailView>
    <AppAnimateGroup type='bottom'>
    <div className='mail-detail-body'>
        {children}
    </div>

    </AppAnimateGroup>
    </AppsContent>
    </Form>
    </div>
    </AppsContainer>
    </>
  )
}
AppCreateView.propTypes={
    children: PropTypes.any,
    title:PropTypes.string,
    loading:PropTypes.bool,
    labelCol:PropTypes.number,
    wrapperCol:PropTypes.number,
    additionButton:PropTypes.any,
    controller:PropTypes.string
  }

