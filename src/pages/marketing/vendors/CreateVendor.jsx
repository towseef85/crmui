import AppCreateView from '@crema/core/AppCreateView'
import React, { useState } from 'react'
import AppControls from '@crema/core/AppControls'
import { Button, Col, Row } from 'antd'

export default function CreateVendor() {
  const {AppInputControl} = AppControls
  const [vendorPrices, setVendorPrices] = useState([])
  const [showPopUp, setshowPopUp] = useState(false)
  console.log(setVendorPrices, showPopUp);

  return (
    <AppCreateView
    title='Vendor'
    controller="Vendor"
    othervalues={vendorPrices}
    additionButton={<Button type='primary' onClick={()=> setshowPopUp(true)}>Add Prices</Button>}
    >
      <Row>
        <Col span={12}>
          <AppInputControl min={4} label="Owner Name" name="ownerName" required={true}  />
          <AppInputControl label="Mobile Number" min={10} name="mobileNo" required={true}  />
          <AppInputControl label="Office Number" name="officeNumber" required={false}  />
          <AppInputControl label="Lead Source" name="leadSource" required={false}  />
        </Col>
        <Col span={12}>
          <AppInputControl label="Store Name" name="storeName" required={true}  />
          <AppInputControl label="Email ID" type='email' name="emailId" required={true}  />
          <AppInputControl label="Location Url" name="locationUrl" required={false}  />
          <AppInputControl label="Pickup Address" name="pickupAddress" required={true} isTextArea={true}  />
        </Col>
      </Row>
    </AppCreateView>
  )
}
