import { useState } from 'react'
import { ModeContext } from '../contexts/ModeContext'
import { SideBarContext } from '../contexts/SideBarContext'
import '../styles/globals.css'

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    default:
      break
  }
    console.log(metric)
}

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState()
  const [toggle, setToggle] = useState()

  return (
    <ModeContext.Provider value={[mode, setMode]}>
      <SideBarContext.Provider value={[toggle, setToggle]}>
        <Component {...pageProps} />
      </SideBarContext.Provider>
    </ModeContext.Provider>
  )
}