import React from 'react'
import { useParams } from "react-router-dom";


const EmployeeCard = () => {
      const { id } = useParams();

    return (
        <div>
        <div className='mt-1 border p-5'>
            id: {id}
        </div>
        </div>
    )
}

export default EmployeeCard
