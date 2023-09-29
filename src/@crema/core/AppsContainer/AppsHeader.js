import React from 'react';
import PropTypes from 'prop-types';
import './index.style.less';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons';
import AppIconButton from '../AppIconButton';
import { BiArrowBack } from 'react-icons/bi';

const AppsHeader = ({hasSearch=true, navigateTo, icon=<PlusCircleOutlined/>, title, hasBackButton=false, hideAddButton=false, showTitle=false,additionalButton}) => {
  const navigate = useNavigate()
  return <div className='apps-header'>
    {hasBackButton &&   <AppIconButton
              className='mail-detail-arrow'
              title={`Add ${title}`}
              icon={<BiArrowBack />}
              onClick={() => navigate(-1)}
            />}
            {showTitle && <h5 className='mb-0 text-truncate'>{`Add ${title}`}</h5>}
    <div className='order-header'>
    <div className='order-header-input-view'>
         {hasSearch &&  <Input type='search'/>}
        </div>
        <div className='order-header-right'>
       {hideAddButton &&  <Button type='primary' onClick={()=>navigate(navigateTo)}  icon={icon}>Add {title}</Button>}
        {additionalButton}
        </div>
    </div>
  </div>;
};

export default AppsHeader;
AppsHeader.defaultProps = {};

AppsHeader.propTypes = {
  hasSearch: PropTypes.bool,
  navigateTo:PropTypes.string,
  icon:PropTypes.any,
  title:PropTypes.string,
  hasBackButton:PropTypes.bool,
  hideAddButton:PropTypes.bool,
  showTitle:PropTypes.bool,
  additionalButton:PropTypes.any
};
