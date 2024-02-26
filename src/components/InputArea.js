import React, {useState,useEffect} from 'react'

export default function InputArea({ onGenerate }) {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')
    const [runError, setRunError] = useState(0)

    const handelonchange1 = (e) => {
        setName(e.target.value)
      }
    
      const handelonchange2 = (e) => {
        setNumber(e.target.value)
      }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!name || !number) {
        setError('Name and number cannot be empty.')
        setRunError(1)
      } else if (number.length !== 10) {
        setError('Number must be 10 digits.')
        setRunError(1)
      } else {
        setError('')
        onGenerate(name, number)
      }
    }

    const textControl = () => {
        if (runError === 0) {
          return "The number and name should match exactly as it is in esewa otherwise Qr code won't work."
        } else {
          return error
        }
      }
   
  useEffect(() => {
    if (runError === 1) {
      const timer = setTimeout(() => {
        setRunError(0)
      }, 1500)

      return () => clearTimeout(timer) // Clear the timeout if the component is unmounted
    }
  }, [runError])

  return (
    <div className='container'>

        <h2 className='my-2 text-center'>Esewa Qr Code Generator</h2>

    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input value={name} onChange={handelonchange1} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
    <input value={number} onChange={handelonchange2}  type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div id="emailHelp" className="form-text"><span className={`text-${runError === 0 ? 'warning' : 'danger'}`}>Note: </span>{textControl()}
</div>
  <button type="submit" className="btn btn-primary mt-3" >Generate</button>
</form>
</div>
  )
}
