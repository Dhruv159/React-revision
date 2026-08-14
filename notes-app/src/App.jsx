import React, { useState } from 'react'

const App = () => {
	const [userName, setUserName] = useState('');
	const [details, setDetails] = useState('');

	const [task, setTask] = useState([]);

	const submitHandler = ($event) => {
		$event.preventDefault();
		setTask((prev) => [ ...prev , {name: userName, details: details}]);
		setUserName('');
		setDetails('');
	}

	const deleteNote = (index) => {
		setTask(prev => prev.filter((_, i) => i !==index))
	} 

	return (
		<div className='h-screen bg-black text-white '>
			<form onSubmit={(e) => {submitHandler(e)}} className='flex item-start justify-between p-10'>
				<div className='flex gap-4 w-1/2 items-start flex-col'>
					<input 
					type="text" 
					placeholder='Enter Notes Heading' 
					className='px-5 w-full py-2 border-2 outline-none rounded'
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					/>

					<textarea 
					type="text" 
					className='px-5 w-full h-20 py-2 border-2 outline-none rounded'
					placeholder='Write details'
					value={details}
					onChange={(e) => setDetails(e.target.value)}
					/>
					<button type="submit" className='bg-white active:scale-95 w-full text-black px-5 py-2 rounded'> + Add Note</button>
				</div>
			</form>

			<div className='flex flex-wrap p-10 gap-4'>
				{task.map((ele, index) => {
				return (
					<div key={index} className='h-32 w-32 rounded -2xl bg-white p-4'>
						<div className='flex flex-col gap-5'>
							<div>
								<h2 className='text-black font-bold'>{ele.name}</h2>
								<h4 className='text-black font-bold'>{ele.details}</h4>
							</div>
							<button onClick={() => deleteNote(index)} className='bg-amber-950 active:scale-95 w-full text-black px-5 py-2 rounded'>Delete</button>
						</div>
					</div>
				);
				})}
			</div>
		</div>
	)
}

export default App
