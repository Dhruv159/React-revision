import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import EmployeeForm from './components/EmployeeForm';

const App = () => {

	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: 'Dhruv Sharma',
			email: 'dhruv@gmail.com',
			role: 'Frontend Developer',
			department: 'Engineering'
		},
		{
			id: 2,
			name: 'Rahul Kumar',
			email: 'rahul@gmail.com',
			role: 'Designer',
			department: 'Design'
		},
		{
			id: 3,
			name: 'Priya Singh',
			email: 'priya@gmail.com',
			role: 'HR Manager',
			department: 'HR'
		}
	]);
  	
	const addEmployee = (employee) => {
		setEmployees(prev => [
			...prev,
			employee
		]);
	};

	const deleteEmployee = (employeeId) => {
		setEmployees(prev =>
			prev.filter((_, i) => i !== employeeId)
		);
    }

	const [showForm, setShowForm] = useState(false);

	return (
		<div className="app">
			<Header onAddEmployee={() => setShowForm(true)}/>
			<main className="container">
				<Searchbar/>

				<EmployeeList employeesData = {employees} onDeleteEmployee={deleteEmployee}/>
			</main>

			{/* Form Render */}
			{showForm && (
                <EmployeeForm onClose={() => setShowForm(false)}
							  onAddEmployee={addEmployee}
				/>
            )}
		</div>
	);
};

export default App;