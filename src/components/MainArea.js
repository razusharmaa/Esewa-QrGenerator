import React from 'react'
import InputArea from './InputArea'
import QrResult from './QrResult'

export default function MainArea({banking}) {

  const[page,setPage]=React.useState(1)

  const [name, setName] = React.useState("")
  const [number, setNumber] = React.useState("")

  const handleGenerate = (name, number) => {
    setName(name)
    setNumber(number)
      setPage(2)
  }
  const back2input=()=>{
    setPage(1)
  }

  const captlize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
 
  return (
    <>
  { page===1 && <InputArea onGenerate={handleGenerate} page={page} bankName={banking} CT={captlize}/>}
   { page===2 && <QrResult name1={name} number1={number} page={page} back={back2input} bankName={banking} CT={captlize}/>}
    </>
  )
}
