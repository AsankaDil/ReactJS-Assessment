import React from 'react'
import TextDisplay from '../../../components/common/TextDisplay'


export default function MenuLayout({ prop }) {
  debugger
  const headerTextPropert = { text: prop.headerText, className: 'left-menu-header-text grey-color-text fontsize-14' }
  return (
    <>
      <div>
        <TextDisplay prop={headerTextPropert}></TextDisplay>
      </div>
      <div style={{ padding: '10px' }}>{
        prop.menus.map((mnu, i) => {
          const menuText = { text: mnu.name, className: 'left-menu-item-text' }
          return <TextDisplay style={{ padding: '20px' }} key={i} prop={menuText}></TextDisplay>
        })}

      </div>
    </>

  )
}
