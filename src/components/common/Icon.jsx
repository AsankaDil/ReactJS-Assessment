import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({prop}) {
  return (
<>
<FontAwesomeIcon icon={prop.iconName} /></>
  )
}
