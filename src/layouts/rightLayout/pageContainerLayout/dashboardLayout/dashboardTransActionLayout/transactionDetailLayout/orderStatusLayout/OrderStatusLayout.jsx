import React from 'react';
import TextDisplay from '../../../../../../../components/common/TextDisplay';
import TransactionStaus from '../../../../../../../components/transaction/TransactionStaus';

export default function OrderStatusLayout({ prop }) {
  debugger;
  return (
    <div style={{ lineHeight: '17px', fontSize: '14px', width: '100%' }}>
      <div style={{ display: 'inline-block', width: '100%' }}>
        <div style={{ float: 'left' }}>
          {' '}
          <TextDisplay
            prop={{ text: prop.productName, className: '' }}
          ></TextDisplay>
        </div>
        <div style={{ float: 'right' }}>
          <TransactionStaus
            status={'Pending'}
            somethingElse='hi'
          ></TransactionStaus>
        </div>
      </div>
      <div style={{ display: 'inline-block', width: '100%' }}>
        <div style={{ float: 'left' }}>
          <TextDisplay
            prop={{
              text: prop.dateTime,
              className: 'grey-color-text fontsize-12',
            }}
          ></TextDisplay>
        </div>
        <div style={{ float: 'right' }}>
          <TextDisplay
            prop={{
              text: prop.orderNumber,
              className: 'grey-color-text fontsize-12',
            }}
          ></TextDisplay>
        </div>
      </div>
    </div>
  );
}
