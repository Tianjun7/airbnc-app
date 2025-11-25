import Homepage from "../pages/Homepage"
import Properties from "../pages/Properties"
import { Routes, Route } from "react-router"
import './App.css'

function App() {
  return(
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/properties" element={<Properties/>}/>
    </Routes>
    
  )
}

export default App
