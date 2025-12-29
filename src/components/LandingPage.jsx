import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import logo from '/OALogo.png'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  backgroundColor: '#F5F5DC'
}

export default function App() {
  const parallax = useRef(null)
  return (
    <div>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={style}
        >
          <div style={{width: '80%', margin: 'auto'}}>
            <img src={logo} style={{ width: '25%', display: 'block'}} />
            <div>
              <h1>welcome to design services!</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={style}>
          <h1>what we offer?</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={style}>
            <h1>meet the team.</h1>
          </ParallaxLayer>
      </Parallax>
    </div>
  )
}
