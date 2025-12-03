import Homepage from "../pages/Homepage"
import Properties from "../pages/Properties"
import Property from "../pages/Property"
import { Routes, Route } from "react-router"
import './App.css'

function App() {
  return(
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/properties" element={<Properties/>}/>
      <Route path='/properties/:id' element={<Property/>}/>
    </Routes>
    
  )
}

export default App
