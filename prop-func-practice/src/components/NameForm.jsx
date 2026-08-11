import React, { useState } from 'react'


const NameForm = ({onNameSubmit}) => {

    const [inputName, setInputName] = useState('');
    function handleNameFormSubmit(e) {
        e.preventDefault();
        onNameSubmit(inputName)
        setInputName('');
    }

    return (
        <div>
            <h2>Name From Input Form : {}</h2>
            <form onSubmit={handleNameFormSubmit}>
                <label htmlFor="name">Type Your Name</label>
                <input 
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    type="text" 
                    placeholder='Enter Name' />
                <button type="submit" disabled={e.target.value} >Submit Name</button>
            </form>
        </div>
    )
}

export default NameForm
