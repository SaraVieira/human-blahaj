import Header from '@/config'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import '@/styles/index.css'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('FSVYGODH', {
      includedDomains: ['blahaj.xyz'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
