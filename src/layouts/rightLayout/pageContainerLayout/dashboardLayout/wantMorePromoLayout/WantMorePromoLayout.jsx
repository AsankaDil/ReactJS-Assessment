import React from 'react'
import TextDisplay from '../../../../../components/common/TextDisplay'

export default function WantMorePromoLayout() {
  return (
    <div className={"dashboard-card"} style={{height:'200px'}}>

              <div className="card-content" >
                <TextDisplay prop={{ text: 'Want more?', className: 'card-title-transaction' }}></TextDisplay>
                <div style={{display:'flex',gap:'5px'}}>
                <TextDisplay prop={{ text: 'Increase ', className: 'orange-color-text' }}></TextDisplay>
                <TextDisplay prop={{ text: 'Your sales', className: 'black-color-text' }}></TextDisplay>
                </div>
              </div>
            </div>
  )
}
