import React from 'react'

export default function TextDisplay({prop}) {
  return (
    <div className={prop.className}>{prop.text}</div>
  )
}
