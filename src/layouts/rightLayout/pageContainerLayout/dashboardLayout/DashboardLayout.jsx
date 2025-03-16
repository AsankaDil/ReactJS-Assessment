import React from 'react'
import SalesStatisticLayout from './dashboardSalesStatisticLayout/SalesStatisticLayout'
import ProductLaunchedvsSalesLayout from './productLaunchedvsSalesLayout/ProductLaunchedvsSalesLayout'
import TransactionLayout from './dashboardTransActionLayout/TransactionLayout'
import AnalyticLayout from './analyticLayout/AnalyticLayout'
import OrdersbySourcesLayout from './orderesBySourcesLayout/OrdersbySourcesLayout'
import WantMorePromoLayout from './wantMorePromoLayout/WantMorePromoLayout'


export default function DashboardLayout() {
  return (
    <>
      <div>
        <SalesStatisticLayout></SalesStatisticLayout>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '35%' }}>
            <div style={{ padding: '20px 20px 20px 0px' }}>
              <ProductLaunchedvsSalesLayout></ProductLaunchedvsSalesLayout>
            </div>
            <div style={{ padding: '0px 20px 20px 0px' }}>
              <TransactionLayout></TransactionLayout>
            </div>
          </div>
          <div style={{ width: '65%' }}>
            <AnalyticLayout></AnalyticLayout>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ width: '50%', paddingRight: '20px' }}>
                <OrdersbySourcesLayout></OrdersbySourcesLayout>
              </div>
              <div style={{ width: '50%', paddingRight: '20px' }}>
                <WantMorePromoLayout></WantMorePromoLayout>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
