import { useState, useRef } from "react";
import QrReader from "react-qr-scanner";

const QrReaderComponent = ({ onScan }) => {
  const [facingMode, setFacingMode] = useState("environment");
  const previewRef = useRef(null);

  const handleFacingMode = () => {
    const newFacingMode = facingMode === "user" ? "environment" : "user";
    setFacingMode(newFacingMode);
  };

  return (
    <>
      <QrReader
        facingMode={facingMode}
        onError={console.error}
        onScan={onScan}
        style={{ width: "100%" }}
        previewStyle={{ width: "100%" }}
        ref={previewRef}
      />
      <button onClick={handleFacingMode}>Cambiar Cámara</button>
    </>
  );
};

export default QrReaderComponent;
