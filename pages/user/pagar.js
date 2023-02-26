import { transferSOL } from "@/lib/useMirrorWorld";
import MainLayout from "@/components/layouts/MainLayout";
import { useState, useRef, useEffect } from "react";
import QrReaderComponent from "@/components/QrReaderComponent";
import QrScanner from "react-qr-scanner";
import toast, { Toaster } from "react-hot-toast";


export default function Pagar() {
  const [qrData, setQrData] = useState(null);
  const [facingMode, setFacingMode] = useState("environment");
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
  
    const handleScan = async (data) => {
      if (data){
        transferSOL()
        
      toast.success("Código escaneado");
      console.log(data);
      }
      else{
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
        delay={300}
        constraints={constraints}
          onScan={handleScan}
      onError={handleError}
      videoRef={videoRef}
          style={{ height: "100%", width: "100%" }}
        />
      )}
      {qrData && (
        <div>
          <p>{qrData}</p>
          <button onClick={() => setQrData(null)}>Escanear de nuevo</button>
        </div>
      )}
      <button onClick={handleCameraChange}>Cambiar cámara</button>
      </MainLayout>
  );
}
