import QRCode from "react-qr-code";

export default function QRCodeComponent() {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px"  }}>
      <h2 style={{color: "black"}}>Scan QR Code</h2>

      <QRCode
        value="https://redskyadvancesolutions.com/"
        size={200}
      />
    </div>
  );
}