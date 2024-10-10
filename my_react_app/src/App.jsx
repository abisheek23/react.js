import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample2_class from './component/Sample2'
import Sample1_class from './component/sample1'

function App() {
 return(
  <>
  <div>
    <Sample2_class/>
    <Sample1_class color='green'/>
  </div>
  </>
 )
}

export default App
