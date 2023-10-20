import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Space } from 'antd'
import { CloseOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'
import AppsContent from '../AppsContainer/AppsContent'
import AppAnimateGroup from '../AppAnimateGroup'
import PropTypes from 'prop-types';
import AppIconButton from '../AppIconButton'
import { onDeleteRecord } from 'redux/actions'

export default function AppDetailsView({title,children,navigateTo=null,id, showDelete=false, canEdit=false}) {
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigation =(location)=>{
      const loc = `${location.substring(0,location.lastIndexOf('/'))}/create/${id}`
      return loc
    }

    const onDelete =()=>{
        try{
            onDeleteRecord(id,'Driver')
            navigate(-1)
        }
        catch(error){
            console.log(error);
        }
        
    }
  return (
    <>
      <div className='apps-header'>
              <AppIconButton
                className='mail-detail-arrow'
                title={`${title} Details`}
                icon={<BiArrowBack />}
                onClick={() => navigate(-1)}
              />
              <h5 className='mb-0 text-truncate'>{`${title} Details`}</h5>
              <div className='mail-detail-header-action'>
                <Space>
                  <Button
                    type='primary'
                    disabled={canEdit}
                    onClick={()=>
                      navigate(
                        navigateTo? navigateTo : 
                        handleNavigation(location.pathname))}
                    icon={<PlusCircleOutlined />}>
                    
                    {`Update ${title}`}
                  </Button>
                  {
                    showDelete &&

                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => onDelete}
                    type='primary'
                    danger
                    >
                    Delete
                  </Button>
                  }
                  <Button
                    icon={<CloseOutlined />}
                    onClick={() => navigate(-1)}
                    type='default'
                    >
                    Cancel
                  </Button>
                 
                </Space>
              </div>
            </div>
            <AppsContent isDetailView>
              <AppAnimateGroup type='bottom'>
                <div className='mail-detail-body'>{children}</div>
              </AppAnimateGroup>
            </AppsContent>
    </>
  )
}
AppDetailsView.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    id:PropTypes.string,
    navigateTo:PropTypes.string,
    showDelete:PropTypes.bool,
    canEdit:PropTypes.bool
}