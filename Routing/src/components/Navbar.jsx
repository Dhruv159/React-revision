import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='flex gap-4 bg-sky-200 rounded-2xl px-5 py-2'>
			<Link to ="/">Home</Link>
			<Link to ="/about">About</Link>
			<Link to ="/contact">Contact</Link>
			<Link to ="/employee">Employee</Link>
		</div>
	)
}

export default Navbar