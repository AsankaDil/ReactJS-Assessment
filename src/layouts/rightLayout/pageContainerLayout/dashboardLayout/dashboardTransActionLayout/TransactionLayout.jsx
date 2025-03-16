import React from 'react'
import TextDisplay from '../../../../../components/common/TextDisplay'
import TransactoionDetailLayout from './transactionDetailLayout/TransactoionDetailLayout'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
const transactionList=[{transactionId:1,productName:'iPhone 14 Pro Max',status:'Completed',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:faPhone},
  {transactionId:2,productName:'Mac book Pro M1 13',status:'Pending',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:faLaptop},
  {transactionId:3,productName:'Roughneck sweater',status:'Completed',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:null},
  ,
  {transactionId:4,productName:'Roughneck sweater',status:'Pending',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:null}
  ,
  {transactionId:5,productName:'Roughneck sweater',status:'Pending',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:null},
  {transactionId:6,productName:'iPhone 14 Pro Max',status:'Completed',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:faPhone},
  {transactionId:7,productName:'Mac book Pro M1 13',status:'Pending',dateTime:'Jul 21st 2022 - 15:31 PM',orderNumber:'sasasas',icon:faLaptop},
  ]
export default function TransactionLayout() {
  return (
    <>
  <div className={"dashboard-card"}>
   
        <div className="card-content" >
          <TextDisplay prop={{ text: 'Transactions', className: 'card-title-transaction' }}></TextDisplay>

               {transactionList.map((dt, i) => {     
                  return  <TransactoionDetailLayout key={i} prop={dt}></TransactoionDetailLayout>
                  })}
        </div>
      </div></>
  )
}
