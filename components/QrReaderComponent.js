import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const QrReaderComponent = () => {
  const [qrCode, setQrCode] = useState("");

  const handleScan = (result) => {
    if (result) {
      setQrCode(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={"environment"}
      />
      {qrCode && <p>El código QR leído es: {qrCode}</p>}
    </div>
  );
};

export default QrReaderComponent;

