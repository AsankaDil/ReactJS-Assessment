import React from 'react'
import TextDisplay from '../common/TextDisplay'

export default function TransactionStaus({prop}) {
  return (
    <div> {prop.status=="Pending" ? (
        <TextDisplay prop={{text:'Pending',className:'grey-color-text'}}></TextDisplay>
      ) : (
        <TextDisplay prop={{text:'Completed',className:'orange-color-text'}}></TextDisplay>
      )}</div>
  )
}
