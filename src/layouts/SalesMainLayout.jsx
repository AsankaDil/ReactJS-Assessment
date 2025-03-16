import React from 'react'
import LeftLayout from './leftLayout/LeftLayout'
import RightLayout from './rightLayout/RightLayout'

export default function SalesMainLayout() {
  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex' }}>
        <LeftLayout></LeftLayout>
        <RightLayout></RightLayout>
      </div>
    </>
  )
}
