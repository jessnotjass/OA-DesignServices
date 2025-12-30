import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import logo from '/assets/OALogo.png'
import blueprint from '/assets/blueprint.png'
import hdla4 from '/assets/hdla4.png'
import hdla10 from '/assets/hdla10.png'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}

export default function App() {
  const parallax = useRef(null)
  return (
    <div>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={style}
        >
          <img src={blueprint} style={{ width: '95%', height: 'auto', opacity: '0.5'}}/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.75}
          style={style}
        >
          <div
            style={{
              width: '80%',
              margin: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
              }}>
            <img src={logo} style={{ width: '10%', display: 'block'}} />
            <div>
              <h1>welcome to design services!</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.75}
        >
          <img src={hdla10} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.5}
          style={style}>
            <div
            style={{
              width: '50%',
              margin: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
              }}>
              <h1>what we offer?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis imperdiet tellus a consectetur.
                In egestas, enim volutpat scelerisque varius, nisi velit tristique elit,
                vel fringilla velit elit vel lectus. Ut ut egestas velit. Nunc elementum scelerisque enim.
                Nulla dictum vel ipsum vitae tristique. Praesent lacus nisi, fringilla vel ligula nec, egestas semper quam.
                Aenean urna leo, maximus ac lacinia in, varius ut lorem. Nulla a aliquam eros, convallis convallis magna.
                Vivamus laoreet pellentesque est ut blandit. Vivamus dui dui, aliquet non tincidunt nec, condimentum sed neque.</p>
            </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.8}
          speed={0.5}
          style={style}>
            <h1>meet the team.</h1>
          </ParallaxLayer>
      </Parallax>
    </div>
  )
}
