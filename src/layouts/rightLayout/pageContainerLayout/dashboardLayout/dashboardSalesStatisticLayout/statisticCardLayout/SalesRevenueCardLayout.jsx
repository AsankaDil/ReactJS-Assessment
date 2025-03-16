import React from 'react'
import TextDisplay from '../../../../../../components/common/TextDisplay'
import Icon from '../../../../../../components/common/Icon'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function SalesRevenueCardLayout() {
  return (
    <>
      <div className={"dashboard-card sales-statistic-card"}>
        <div style={{ float: 'left', display: 'flex' }}>
          <div className='info-icon'>  </div>
          <div style={{ position: 'relative', top: '-4px', fontSize: '12px' }}>
            <TextDisplay prop={{ text: 'Update', className: '' }}></TextDisplay>
          </div>
        </div>
        <div className="card-content">
          <TextDisplay prop={{ text: 'Sales revenue increased', className: 'card-title' }}></TextDisplay>
          <div style={{ display: 'inline-flex', gap: '5px', float: 'left', width: '100%' }}>
            <TextDisplay prop={{ text: '20%', className: 'revenue-value-percentage-value orange-color-text' }}></TextDisplay>
            <TextDisplay prop={{ text: ' in one week', className: 'revenue-value-percentage-desc black-color-text' }}></TextDisplay>
          </div>
          <div className="card-footer-text">
            <TextDisplay prop={{ text: 'See analytics  ', className: '' }}></TextDisplay>
            <Icon prop={{ iconName: faChevronRight }}></Icon>
          </div>
        </div>
      </div></>
  )
}
