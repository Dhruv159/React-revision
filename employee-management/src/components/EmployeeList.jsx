import React from 'react';
import EmployeeCard from './EmployeeCard.jsx'

const EmployeeList = ({ employeesData, onDeleteEmployee }) => {

    return (
        <section className="employee-section">

            <div className="section-header">
                <h2>Employees</h2>

                <span className="employee-count">
                    {employeesData.length}
                </span>
            </div>

            <div className="employee-list">

                {employeesData.map((employee, index) => (
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        index={index}
                        onDeleteEmployee={onDeleteEmployee}
                    />
                ))}

            </div>

        </section>
    );
};

export default EmployeeList;