import React from 'react';

export default function Wrapper({ children }) {
  return <div style={{ minHeight: '100vh', display: 'flex' }}>{children}</div>;
}
