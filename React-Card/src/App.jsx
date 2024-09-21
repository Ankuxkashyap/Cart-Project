import { useState } from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import { Toaster

 } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <BrowserRouter>
          <Header />
        <div className="h-[92vh] overflow-auto">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster/>
    </div>
  )
}

export default App
