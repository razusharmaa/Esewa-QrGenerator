import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas'; 
export default function QrResult({ name1, number1, back,bankName,CT}) {
  const [qrData, setQrData] = useState(null);
  const [download,setDownload] = React.useState("Download Qr");
  const qrRef = useRef(null); 

  useEffect(() => {
    let data;
    if(bankName==='esewa'){
      data =  {
        eSewa_id: number1,
        name: name1,
      };
    }
    else{
      data = {
        Khalti_ID: number1,
        name: name1,
      };
    }
    setQrData(JSON.stringify(data));
  }, [name1,number1,bankName]);

  const downloadQR = () => {
    setDownload("Downloading...");
    if (qrRef.current) {
      html2canvas(qrRef.current, { scale: 1080 / qrRef.current.offsetHeight }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${bankName}QR-${name1}.jpg`;
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
      });
    }
    setTimeout(() => {
      setDownload("Download Qr");
    }, 1000);
  }
  

  return (
    <div className='container d-flex flex-column align-items-center'>
      <button onClick={back} type="button" className="btn my-3 btn-info align-self-start">
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      <h3 className='my-1'>Your Generated {CT(bankName)} Qr Code</h3>
      <div ref={qrRef} className='generated-qr d-flex flex-column justify-content-center align-items-center' style={{ height: "450px", width: "320px"}}>
        {qrData && <QRCode value={qrData} size={160} className='border' />} 
        <div className='my-3'>
          <img src={`${process.env.PUBLIC_URL}/images/${bankName}_logo.png`} className='logoStyle' alt="..." style={{ height: "53px" }} />
          <h6 className='text-center mt-2'>{name1} <br /> {number1}</h6>
        </div>
        <p className='text-center'>Scan QR code to receive money</p>
      </div>
      <button className={`btn btn-${download==='Download Qr'?"info":"success"} mb-4`} onClick={downloadQR} type="button"  >{download}</button>
    </div>
  );
}
