import React from 'react'
import TextDisplay from '../../../../../components/common/TextDisplay'

export default function ProductLaunchedvsSalesLayout() {
  return (
    <>
      <div className="dashboard-card">
        <div style={{ display: 'flex' }}>
          <div>
            <TextDisplay prop={{ text: 'prop.headerText', className: 'card-title' }}></TextDisplay>
            <div style={{ display: 'inline-flex', gap: '5px', width: '100%' }}>
              <TextDisplay prop={{ text: 'a', className: 'card-value black-color-text' }}></TextDisplay>
            </div>
            <div className="card-footer-text">
              <TextDisplay prop={{ text: ' See analytics  ', className: '' }}></TextDisplay>
            </div>
          </div>
          <div>
            <TextDisplay prop={{ text: 'prop.headerText', className: 'card-title' }}></TextDisplay>
            <div style={{ display: 'inline-flex', gap: '5px', width: '100%' }}>
              <TextDisplay prop={{ text: 'a', className: 'card-value black-color-text' }}></TextDisplay>
            </div>
            <div className="card-footer-text">
              <TextDisplay prop={{ text: ' See analytics  ', className: '' }}></TextDisplay>
            </div>
          </div>
        </div>
      </div></>
  )
}
