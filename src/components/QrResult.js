import React from 'react'
import logo from './esewa_logo.png'

export default function QrResult({name1,number1}) {

    const QrAPI = () => {
        console.log('Props in YourComponent: ', { name1, number1 })
        const data = {
          eSewa_id: number1,
          name: name1
        };
        
        const encodedData = encodeURIComponent(JSON.stringify(data));
        console.log(encodedData);
        
        return `http://api.qrserver.com/v1/create-qr-code/?data=${encodedData}&size=160x160`;
      };

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <h3>Your Generated Esewa Qr Code</h3>
      <img src={QrAPI()} className="img-thumbnail mb-2" style={{height:'160px',width:"160px"}} alt="..."/>
      <div className='my-3'>
        <img src={logo} className='logoStyle' alt="..." style={{height:"53px"}} />
        <h6 className='text-center mt-2'>{name1} <br/> {number1}</h6>
      </div>
      <p className='text-center'>Scan QR code to receive money</p>

    </div>
  )
}
