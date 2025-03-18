import React from 'react';
import LeftLayout from './leftLayout/LeftLayout';
import RightLayout from './rightLayout/RightLayout';
import Wrapper from './common/Wrapper';

export default function SalesMainLayout() {
  return (
    <Wrapper>
      <LeftLayout />
      <RightLayout />
    </Wrapper>
  );
}
