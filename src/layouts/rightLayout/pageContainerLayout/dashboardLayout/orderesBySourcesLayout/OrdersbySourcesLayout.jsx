import React from 'react'
import TextDisplay from '../../../../../components/common/TextDisplay'

export default function OrdersbySourcesLayout() {
  return (

        
        <div className={"dashboard-card"} style={{height:'200px'}}>
         
              <div className="card-content" >
                <TextDisplay prop={{ text: 'Orderes', className: 'card-title-transaction' }}></TextDisplay>
              </div>
            </div>
        
  )
}
