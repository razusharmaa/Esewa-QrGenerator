import React,{useState,useEffect} from 'react'
import logo from './esewa_logo.png'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export default function QrResult({name1,number1,back}) {
  const [qrData, setQrData] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const QrAPI = () => {
      const data = {
        eSewa_id: number1,
        name: name1
      };
      const encodedData = encodeURIComponent(JSON.stringify(data));
      return `http://api.qrserver.com/v1/create-qr-code/?data=${encodedData}&size=160x160`;
    };
    fetch(QrAPI())
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQrData(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }, []);
  

  const handleImageLoad = () => {
    setLoading(false);
  }
  const downloadQR = () => {
    const node = document.querySelector('.generated-qr');
    html2canvas(node).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, `EsewaQR-${name1}.png`);
      });
    });
  };

  return (
    <div className='container d-flex flex-column  align-items-center'>
      <button onClick={back} type="button" className="btn my-3 btn-info align-self-start"><i className="fa-solid fa-arrow-left"></i> Back</button>
      <h3 className='my-1'>Your Generated Esewa Qr Code</h3>
      <div className='generated-qr  d-flex flex-column justify-content-center align-items-center' style={{height:"450px",width:"320px"}}>
      {loading && <div className="spinner-border text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
     { qrData && <img src={qrData} onLoad={handleImageLoad} className="img-thumbnail mb-2 mt-5" style={{height:'160px',width:"160px"}} alt="..."/>}
      <div className='my-3'>
        <img src={logo} className='logoStyle' alt="..." style={{height:"53px"}} />
        <h6 className='text-center mt-2'>{name1} <br/> {number1}</h6>
      </div>
      <p className='text-center'>Scan QR code to receive money</p>
      </div>

      <button type="button" onClick={downloadQR} className="btn btn-success mt-3">Download Qr</button>

    </div>
  )
}
