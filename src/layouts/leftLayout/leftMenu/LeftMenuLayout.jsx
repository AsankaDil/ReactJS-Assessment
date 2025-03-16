import React from 'react'
import MenuLayout from './MenuLayout'

export default function LeftMenuLayout() {
  const menus = [{
    headerText: "ADMINISTRATOR", menus: [
      { id: 1, name: 'Dashboard' },
      { id: 2, name: 'Socials' },
      { id: 3, name: 'Documents' }]
  }, {
    headerText: "SETTINGS", menus: [
      { id: 1, name: 'Roles' },
      { id: 2, name: 'Requests' },
      { id: 3, name: 'Preferences' }]
  }];

  return (

    <div style={{ padding: '10px' }}>{
      menus.map((mnu, i) => {
        return <MenuLayout key={i} prop={mnu}></MenuLayout>
      })}
    </div>
  )
}
