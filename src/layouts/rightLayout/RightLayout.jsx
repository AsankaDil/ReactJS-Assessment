import React from 'react'
import HeaderLayout from './header/HeaderLayout'
import PageContainerLayout from './pageContainerLayout/PageContainerLayout'

export default function RightLayout() {
  return (
    <div style={{flex:'1',padding: '20px'}}>
      <HeaderLayout></HeaderLayout>
      <PageContainerLayout></PageContainerLayout>
    
    </div>
  )
}
