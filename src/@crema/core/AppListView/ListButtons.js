import React from "react";
import { Button, Tooltip, Popconfirm } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

 const AppEditButton = ({ editTooltiptitle, data, onEditClick, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <Tooltip title={editTooltiptitle ? editTooltiptitle : "Edit"}>
      <Button
        type="text"
        onClick={onEditClick ? onEditClick : () => navigate(`${location.pathname}/create/${data}`)}
        icon={<EditOutlined style={{ color: "#0096FF" }} />}
        {...rest}
      />
    </Tooltip>
  );
};
AppEditButton.propTypes = {
    editTooltiptitle: PropTypes.string,
    data: PropTypes.any,
    onEditClick:PropTypes.func
  };
 const AppViewButton = ({ detailsTooltiptitle, data }) => {
  const navigate = useNavigate();
  return (
    <Tooltip title={detailsTooltiptitle ? detailsTooltiptitle : "Details"}>
      <Button
        type="text"
        onClick={() => navigate(`${data}`)}
        icon={<EyeOutlined style={{ color: "#00854d" }} />}
      />
    </Tooltip>
  );
};
AppViewButton.propTypes = {
    detailsTooltiptitle: PropTypes.string,
    data: PropTypes.any,
  };
 const AppDeleteButton = ({ deleteTooltiptitle, onDelete }) => {
  return (
    <Popconfirm title="Are you sure you want to delete" onConfirm={onDelete}>
      <Tooltip title={deleteTooltiptitle ? deleteTooltiptitle : "Delete"}>
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: "#FF0000" }} />}
        />
      </Tooltip>
    </Popconfirm>
  );
};
AppDeleteButton.propTypes = {
    deleteTooltiptitle: PropTypes.string,
    onDelete: PropTypes.func,
  };

  const AppListButtons ={
    AppEditButton,
    AppViewButton,
    AppDeleteButton
}

export default AppListButtons;