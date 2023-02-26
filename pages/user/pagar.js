// import { MirrorWorld } from "@mirrorworld/web3.js";
// import QrReader from "react-qr-reader";
// import { useMirrorWorld } from "@/lib/useMirrorWorld";
// import { useEffect, useState } from "react";
// import MainLayout from "@/components/layouts/MainLayout";


import { useMirrorWorld } from "@/lib/useMirrorWorld";
import MainLayout from "@/components/layouts/MainLayout";
import { useState } from "react";
import QrReaderComponent from "@/components/QrReaderComponent";

export default function Pagar() {
  const [qrData, setQrData] = useState(null);

  const handleScan = (data) => {
    setQrData(data);
    console.log(data);
  };
  
  const handleError = (error) => {
    console.error(error);
  };

  return (
    <MainLayout>
      <h1>Escanea un código QR</h1>
      {!qrData && <QrReaderComponent onScan={handleScan} onError={handleError} facingMode={"environment"} />}
      {qrData && (
        <div>
          <p>{qrData}</p>
          <button onClick={() => setQrData(null)}>Escanear de nuevo</button>
        </div>
      )}
    </MainLayout>
  );
}
