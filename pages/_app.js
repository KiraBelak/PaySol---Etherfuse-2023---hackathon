import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MirrorWorldProvider } from "@/lib/useMirrorWorld.js"
import { useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  
    if (isMobile && !isStandalone) {
      // Mostrar botón de instalación
      const banner = document.createElement('div');
      banner.className = 'p-4 bg-white fixed bottom-0 left-0 w-full z-50';
      banner.innerHTML = `
        <p>Instala nuestra aplicación en tu dispositivo móvil:</p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onclick="prompt()"
        >
          Instalar
        </button>
      `;
      document.body.appendChild(banner);
    }
  }, []);
  

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

