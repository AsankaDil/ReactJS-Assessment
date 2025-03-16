import React from 'react'
import GlobalSearch from '../../../components/header/GlobalSearch'
import Notification from '../../../components/header/Notification'
import UserData from '../../../components/header/UserData'
import Breadcrumb from '../../../components/header/Breadcrumb'

export default function HeaderLayout() {
  return (
    <>
      <div style={{ minHeight: '100px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '80%' }}><GlobalSearch></GlobalSearch></div>
          <div style={{ margin: '3px 0px 0px 10px', width: '2%' }}><Notification></Notification></div>
          <div style={{ margin: '3px 0px 0px 20px', width: '10%' }}><UserData></UserData></div>

        </div>
        <span style={{ float: 'left', marginTop: '20px' }}><Breadcrumb></Breadcrumb></span>
      </div>
    </>
  )
}
