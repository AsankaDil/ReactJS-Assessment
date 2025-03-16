import React from 'react'
import viteLogo from '/vite.svg'

export default function SiteLogo() {
  return (
    <>
            <div style={{  display:'flex',gap:10,padding:20}} >
              <div>
            <a href="https://vite.dev" target="_blank">
          <img src={viteLogo}  style={{  height: 27,width:27}} alt="Vite logo" /> 
        </a>
        </div>
     <div>Sales</div>
        </div>
    </>
  )
}
