import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MirrorWorldProvider } from "@/lib/useMirrorWorld.js"



function MyApp({ Component, pageProps }) {
  return(
    <MirrorWorldProvider>
   <Component {...pageProps} />
    </MirrorWorldProvider>
  )
}

export default MyApp
