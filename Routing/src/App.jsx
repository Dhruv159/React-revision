import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar";
import Employee from "./components/Employee";
import EmployeeCard from "./components/EmployeeCard";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="px-4">
		<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/about" element={<About/>}></Route>
				<Route path="/contact" element={<Contact/>}></Route>

				<Route path="/employee" element={<Employee/>}>
					<Route path=":id" element={<EmployeeCard/>}></Route>
				</Route>
      </Routes>
      </div>
    </>
  )
}

export default App
