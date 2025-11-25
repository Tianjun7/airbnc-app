import Header from "../components/Header"
import { Routes,Route } from "react-router"
import './App.css'

function App() {
  return(
  <>
    <Header />
    <Routes>
      <Route> path="/properties" </Route>
    </Routes>
  </>
  )
}

export default App
