import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MirrorWorldProvider } from "@/lib/useMirrorWorld.js"
import { useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service worker registered: ", registration);
          })
          .catch((error) => {
            console.log("Service worker registration failed: ", error);
          });
      });
    }
  }, [router]);
  return(
    <MirrorWorldProvider>
   <Component {...pageProps} />
    </MirrorWorldProvider>
  )
}

export default MyApp
