import React from 'react'
import TextDisplay from '../../../../../components/common/TextDisplay'

export default function AnalyticLayout() {
  return (
    <div style={{padding:'20px 20px 20px 0px'}}>
        
        <div className={"dashboard-card"} style={{height:'300px'}}>
         
              <div className="card-content" >
                <TextDisplay prop={{ text: 'Analytics', className: 'card-title-transaction' }}></TextDisplay>
              </div>
            </div>
        

        </div>
  )
}
