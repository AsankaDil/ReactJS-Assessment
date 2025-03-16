import React from 'react'
import SiteLogo from '../../components/common/SiteLogo'
import LeftMenuLayout from './leftMenu/LeftMenuLayout'


export default function LeftLayout() {
  return (
    <>
    <div  style={{width:'20%',backgroundColor:'rgb(229 229 229 / 13%)'}}>
    <SiteLogo></SiteLogo>
    <div>
<LeftMenuLayout></LeftMenuLayout>
   </div>
       </div>
       </>
  )
}
