import React from 'react'
import TransactionSalesIcon from '../../../../../../components/transaction/TransactionSalesIcon'
import OrderStatusLayout from './orderStatusLayout/OrderStatusLayout'

export default function TransactoionDetailLayout({prop}) {
  return (
    <div style={{padding:'5px 0px',display:'flex',gap:'10px'}}>
        <TransactionSalesIcon prop={{ iconName: prop.icon }}></TransactionSalesIcon>
        <OrderStatusLayout prop={ prop }></OrderStatusLayout>

    </div>
  )
}
