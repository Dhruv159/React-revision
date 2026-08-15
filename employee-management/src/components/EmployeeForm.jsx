import React, { useState } from 'react'

const EmployeeForm = ({onClose, onAddEmployee}) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        role: '',
        department: ''
    })

    const addEmployee = ($event) => {
        $event.preventDefault();
        const newForm = {
            ...form,
            id: Date.now()
        }
        onAddEmployee(newForm);
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <div>
                        <h2>Add Employee</h2>
                        <p>Enter employee details</p>
                    </div>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <form onSubmit={addEmployee}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter employee name"
                            value={form.name}
                            onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter employee email"
                            value={form.email}
                            onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" value={form.role} onChange={(e) =>setForm(prev => ({...prev, role: e.target.value}))}>
                            <option value="">Select role</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="HR Manager">HR Manager</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select id="department" value={form.department} onChange={(e) =>setForm(prev => ({...prev, department: e.target.value}))}>
                            <option value="">Select department</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Design">Design</option>
                            <option value="HR">HR </option>
                        </select>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="secondary-btn active:scale-95" onClick={onClose}>Cancel</button>
                        <button type="submit" className="primary-btn active:scale-95">Add Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeForm;