import Header from '@/config'
import '@/styles/index.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
