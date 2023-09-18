import React from 'react'
import ecommerceData from '@crema/services/db/ecommerce'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import SalesState from './salesState'
import { Col } from 'antd'
import { AppRowContainer } from '@crema'
import ReportCard from './ReportCard'
import RecentOrders from './RecentOrders'
import Revenue from './Revenue'

export default function Dashboard() {
  return (
    <>
     <AppPageMetadata title='Dashboard' />

        <AppRowContainer>
          {ecommerceData.salesState.map((data) => (
            <Col xs={24} sm={12} lg={6} key={'a' + data.id}>
              <SalesState data={data} />
            </Col>
          ))}
            {ecommerceData.reportCards.map((reportVal) => (
            <Col xs={24} lg={8} key={'d' + reportVal.id + Math.random()}>
              <ReportCard data={reportVal} />
            </Col>
          ))}
             <Col xs={24} lg={18} key={'e'}>
            <RecentOrders recentOrders={ecommerceData.recentOrders} />
          </Col>
          <Col xs={24} lg={6} key={'f'}>
            <Revenue />
          </Col>
      </AppRowContainer>

    </>
  )
}
