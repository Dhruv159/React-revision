import React from 'react';

const EmployeeCard = ({ employee, index ,onDeleteEmployee }) => {
    return (
        <div className="employee-card">

            <div className="employee-info">
                <div className="employee-name">
                    {employee.name}
                </div>

                <div className="employee-email">
                    {employee.email}
                </div>

                <div className="employee-role">
                    {employee.role}
                </div>
            </div>

            <div className="actions">
                <button className="secondary-btn">
                    Edit
                </button>

                <button className="delete-btn" onClick={() => {onDeleteEmployee(index)}}>
                    Delete
                </button>
            </div>

        </div>
    );
};

export default EmployeeCard;