import React from 'react'
import TextDisplay from '../../../../../../components/common/TextDisplay'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../../../../components/common/Icon';

export default function OtherDataCardLayout({ prop }) {
  debugger;
  return (
    <>
      <div className={"dashboard-card sales-statistic-card"}>
        <div className="card-content">
          <TextDisplay prop={{ text: prop.headerText, className: 'card-title' }}></TextDisplay>
          <div style={{ display: 'inline-flex', gap: '5px', float: 'left', width: '100%' }}>
            <TextDisplay prop={{ text: prop.value, className: 'card-value black-color-text' }}></TextDisplay>
          </div>
          <div className="card-footer-text">
            <Icon prop={{ iconName: faArrowTrendUp }}></Icon>
            <TextDisplay prop={{ text: ' See analytics  ', className: '' }}></TextDisplay>
          </div>
        </div>
      </div></>
  )
}
