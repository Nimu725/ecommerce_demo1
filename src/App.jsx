import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

import Sample1 from './components/Sample1.jsx'

function App() {

  return (
    <div>
      <Header />
      <Sample1/>
     
      <Footer />
    </div>
  )
}

export default App
