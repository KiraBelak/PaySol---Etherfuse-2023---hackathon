import { useMirrorWorld } from "@/lib/useMirrorWorld";
import MainLayout from "@/components/layouts/MainLayout";
import { useState, useRef, useEffect } from "react";
import QrReaderComponent from "@/components/QrReaderComponent";
import QrScanner from "react-qr-scanner";
import toast, { Toaster } from "react-hot-toast";



export default function Pagar() {
  const [qrData, setQrData] = useState(null);
  const [facingMode, setFacingMode] = useState("environment");
  const {transferSOL, user} = useMirrorWorld();
  const constraints = {
    audio: false,
    video: true,
    facingMode:{exact: facingMode},
  };

  // const handleScan = (data) => {
  //   setQrData(data);
  //   console.log(data);
  // };


    const videoRef = useRef(null);

    const handleError = (error) => {
      console.error(error);
    };

    async function peticion (data) {
      try{
      const res = transferSOL(data.sol.toString(), data.amount)
      .catch((error) => {
        console.error(error);
      });
      if (res) {
        console.log("Transferencia completada");
      }
      res.then(resultado => {
        console.log(resultado); // aquí puede acceder al resultado de la promesa
      }).catch(error => {
        console.log(error); // aquí puede manejar cualquier error que se haya producido durante la ejecución de la promesa
      });
        console.log(data);
    
        console.log(res); // Verificar la respuesta de la función
    
        toast.success("Código escaneado");
    } catch (error) {
      console.log(error);
      toast.error("Error al escanear el código");
    }
        if (qrData === "cancel") {
          setQrData(null); // Si se canceló, reiniciar el estado
          return;
        }
      };

  
    const handleScan = async (data) => {
      if (data) {
        const json = JSON.parse(data.text);
        peticion(json);
        setQrData(json.amount);

        
        
        // Esperar 5 segundos antes de escanear de nuevo
        setTimeout(() => {
          console.log("Escaneando de nuevo...");
          QrScanner.current?.openImageDialog();
        }, 5000);
      } else {
        console.log("No se ha escaneado nada");
      }
    };
    
    
  
  const handleCameraChange = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
  };
  

  return (
    <MainLayout>
       <Toaster position="bottom-center" />
      <h1>Escanea un código QR</h1>
      { typeof window !== 'undefined' && !qrData && !qrData && (
        <QrScanner
        delay={5000}
        constraints={constraints}
          onScan={handleScan}
      onError={handleError}
      videoRef={videoRef}
          style={{ height: "100%", width: "100%" }}
        />
      )
      }
      {qrData && (
       <div>
       <p>{qrData}</p>
       <button onClick={() => setQrData(null)}>Escanear de nuevo</button>
       <button onClick={() => setQrData("cancel")}>Cancelar</button>
     </div>
      )
      }
      <button onClick={handleCameraChange}>Cambiar cámara</button>
      </MainLayout>
  );
}
