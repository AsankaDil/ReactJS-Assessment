import React from 'react'
import SalesRevenueCardLayout from './statisticCardLayout/SalesRevenueCardLayout'
import OtherDataCardLayout from './statisticCardLayout/OtherDataCardLayout'
const commonCardData = [{ headerText: 'Net revenue', value: '$123,000', percentage: '5', percentageof: 'vs last month' },
{ headerText: 'Weekly sales', value: '$123,000', percentage: '71', percentageof: 'of total goals' },
{ headerText: 'Page visits', value: '423', percentage: '21', percentageof: 'higher' },
]
export default function SalesStatisticLayout() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}><SalesRevenueCardLayout></SalesRevenueCardLayout>
      {commonCardData.map((dt, i) => {
        return <OtherDataCardLayout key={i} prop={dt}></OtherDataCardLayout>
      })}
    </div>
  )
}
