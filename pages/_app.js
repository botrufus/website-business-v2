import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Head from '../components/header.js'
import Footer from '../components/footer.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
