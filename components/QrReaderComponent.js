import { useState, useRef } from "react";
import QrReader from "react-qr-scanner";

const QrReaderComponent = ({ onScan }) => {
  const [facingMode, setFacingMode] = useState("environment");
  const previewRef = useRef(null);


  const handleToggleCamera = () => {
    setFacingMode(prev => (prev === 'user' ? 'environment' : 'user'));
}
  return (
    <>
      <QrReader
        facingMode={"environment"}
        onError={console.error}
        onScan={onScan}
        style={{ width: "100%" }}
        previewStyle={{ width: "100%" }}
        ref={previewRef}
      />
    </>
  );
};

export default QrReaderComponent;
