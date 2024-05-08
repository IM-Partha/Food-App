import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Success from './pages/Success'
function App() {

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/success' element={<Success/>} />
          </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
