import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Navbar from "./pages/components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App
