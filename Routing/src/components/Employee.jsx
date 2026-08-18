import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";


const Employee = () => {
    return (
        <div>
            <div>
                <Link to="10">Employee 10</Link>
                <Link to="20">Employee 20</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Employee
