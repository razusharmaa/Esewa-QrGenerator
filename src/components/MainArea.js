import React from 'react'
import InputArea from './InputArea'
import QrResult from './QrResult'

export default function MainArea() {

  const[page,setPage]=React.useState(1)

  const [name, setName] = React.useState("")
  const [number, setNumber] = React.useState("")

  const handleGenerate = (name, number) => {
    setName(name)
    setNumber(number)
    
      setPage(2)
   
  }
 
  return (
    <>
  { page===1 && <InputArea onGenerate={handleGenerate} page={page}/>}
   { page===2 && <QrResult name1={name} number1={number} page={page}/>}
    </>
  )
}
