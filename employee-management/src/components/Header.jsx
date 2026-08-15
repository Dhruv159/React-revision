import React from 'react'

const Header = ({onAddEmployee}) => {
  return (
    <header className="header">
        <div>
            <h1>Employee Management</h1>
            <p>Manage your team members</p>
        </div>
    
        <button className="primary-btn active:scale-95" onClick={onAddEmployee}>+ Add Employee</button>
    </header>
  )
}

export default Header
