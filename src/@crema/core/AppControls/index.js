import React from 'react'
import PropTypes from 'prop-types';
import { Switch, Form, InputNumber, Upload, Button, Input, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const AppSwitchControl=({label, name, valuePropName,initialValue=true, ...rest})=>{
    return(
        <Form.Item
        label={label}
        name={name}
        valuePropName={valuePropName}
        initialValue={initialValue}
       
      >
        <Switch
          checkedChildren="Yes"
          unCheckedChildren="No"
          {...rest}
        />
      </Form.Item>
    )

}
AppSwitchControl.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    valuePropName:PropTypes.any,
    initialValue:PropTypes.bool
}
const AppSelectControl=({label,name,options,required,...rest})=>{
    return(
      <Form.Item
        label={label}
        name={name}
        rules={[
          {
            required:required,
            message:`Please Select ${label}`
          }
        ]}
        >
          <Select placeholder={`Select ${label}`} {...rest}>
            {
              options && options.map(x=>(
                <Select.Option key={x.id} value={x.id}>{x.name}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
    )
}
AppSelectControl.propTypes={
  label:PropTypes.string,
  name:PropTypes.string,
  options:PropTypes.array,
  required:PropTypes.bool
}
const AppInputNumberControl=({label, name, min=1,max=100000000, defaultValue=1, required, ...rest })=>{
return(
  <Form.Item
  label={label}
  name={name}
  initialValue={defaultValue}
  hasFeedback
  rules={[
    {
      required: required,
      message: `Please Enter ${label}`,
    }
  ]}
  {...rest}
>
  <InputNumber style={{width:'90%'}} min={min} max={max}/>
  </Form.Item>
)
}
AppInputNumberControl.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    min:PropTypes.number,
    max:PropTypes.number,
    defaultValue:PropTypes.any,
    required:PropTypes.bool,
}

const AppInputControl=({
  name,
  label,
  min=2,
  required = false,
  type = "text",
  isTextArea = false,
  rows = 2,
  ...rest
})=>{
  return (
    <Form.Item
      label={label}
      name={name}
      hasFeedback
      rules={[
        {
          required: required,
          message: `Please Enter ${label}`,
        },
        {
          min: min ? min : "",
          message: `Please Enter Atleast ${min} Charactars`,
        },
        {
            type:type,
            message:`The Input is not valid ${type}`
        }
      ]}
      {...rest}
    >
      {isTextArea ? (
        <Input.TextArea rows={rows} placeholder={`Please Enter ${label}`} />
      ) : (
        <Input type={type} placeholder={`Please Enter ${label}`} />
      )}
    </Form.Item>
  );
}

AppInputControl.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    min:PropTypes.number,
    type:PropTypes.any,
    required:PropTypes.bool,
    isTextArea:PropTypes.bool,
    rows:PropTypes.number
}

const AppUploadControl=({
  label,
  name = "imageData",
  required,
  setFileList,
  hasRecord,
  imageData,
})=> {
  if (hasRecord) setFileList(imageData);
  return (
    <Form.Item
      label={label}
      name={name}
      extra="Image size should not exceed more than 2 MB"
      valuePropName="fileList"
      getValueFromEvent={(e) => {
        return e?.fileList;
      }}
      rules={[
        {
          required: required,
          message: "Please Upload Image",
        },
        {
          validator(_, fileList) {
            return new Promise((resolve, reject) => {
              if (fileList && fileList[0]?.size > 300000) {
                reject("File size exceeded");
              } else {
                resolve("success");
              }
            });
          },
        },
      ]}
    >
      {/* <input
      value={fileList}
      type="file"
      ref={uploadref}
      accept=".jpeg,.png,.jpg"
    /> */}
      <Upload
        maxCount={1}
        fileList="picture-card"
        accept=".jpg,.jpeg,.png"
        beforeUpload={(file) => {
          if (file.size > 300000) {
            console.log("File size exceeded");
            return false;
          } else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              setFileList(fileReader.result);
            };
            fileReader.onerror = (error) => {
              console.log(error);
            };
            return false;
          }
        }}
        onRemove={() => {
          setFileList(null);
        }}
      >
        <Button icon={<UploadOutlined />}>
          {imageData ? "Change Image" : "Upload Image"}
        </Button>
      </Upload>
    </Form.Item>
  );
}
AppUploadControl.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    required: PropTypes.bool,
  fileList:PropTypes.any,
  setFileList:PropTypes.any,
  hasRecord:PropTypes.bool,
  imageData:PropTypes.any,
}

const AppControls ={
    AppSwitchControl,
    AppInputNumberControl,
    AppInputControl,
    AppUploadControl,
    AppSelectControl
}

export default AppControls;