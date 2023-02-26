import { useMirrorWorld } from "@/lib/useMirrorWorld";
import MainLayout from "@/components/layouts/MainLayout";
import { useState } from "react";
import QrReaderComponent from "@/components/QrReaderComponent";
import QrScanner from "react-qr-scanner";

export default function Pagar() {
  const [qrData, setQrData] = useState(null);
  const [facingMode, setFacingMode] = useState('environment');

  const handleScan = (data) => {
    setQrData(data);
    console.log(data);
  };

  const switchCamera = () => {
    setFacingMode(facingMode === 'user' ? 'environment' : 'user');
  }

  return (
    <MainLayout>
      <h1>Escanea un código QR</h1>
      { typeof window !== 'undefined' && !qrData && !qrData && (
        <QrScanner
          delay={300}
          onError={(err) => console.log(err)}
          onScan={handleScan}
          facingMode={facingMode}
          style={{ height: "100%", width: "100%" }}
        />
      )}
      {qrData && (
        <div>
          <p>{qrData}</p>
          <button onClick={() => setQrData(null)}>Escanear de nuevo</button>
        </div>
      )}
      <button onClick={switchCamera}>Cambiar cámara</button>
    </MainLayout>
  );
}



// import { useMirrorWorld } from "@/lib/useMirrorWorld";
// import MainLayout from "@/components/layouts/MainLayout";
// import { useState } from "react";
// import QrReaderComponent from "@/components/QrReaderComponent";

// export default function Pagar() {
//   const [qrData, setQrData] = useState(null);

//   const handleScan = (data) => {
//     setQrData(data);
//     console.log(data);
//   };
// const handleError = (error) => {
//   console.error(error);
// };

//   return (
//     <MainLayout>
//       <h1>Escanea un código QR</h1>
//       {typeof window !== 'undefined' && !qrData && <QrReaderComponent onScan={handleScan} onError={handleError} facingMode={"environment"} />}
//       {qrData && (
//         <div>
//           <p>{qrData}</p>
//           <button onClick={() => setQrData(null)}>Escanear de nuevo</button>
//         </div>
//       )}
//     </MainLayout>
//   );
// }

