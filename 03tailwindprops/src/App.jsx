import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  let myObj=  {
    username: "hitesh",
    age: 21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4'>Tailwind test</h1>
    <Card channel="chaiaurcode" someObj={myObj}/>
    <Card />
    

    </>
  )
}

export default App
