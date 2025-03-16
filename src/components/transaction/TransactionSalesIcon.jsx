import React from 'react'
import Icon from '../common/Icon'

export default function TransactionSalesIcon({prop}) {
  return (
     <div style={{width:'50px',height:'40px',borderRadius:'40px', backgroundColor:'#f0f0f0'}}>
              <span style={{verticalAlign:'-8px'}}><Icon prop={{ iconName: prop.iconName }}></Icon></span>
        </div>
  )
}
