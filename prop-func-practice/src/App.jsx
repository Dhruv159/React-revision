// import React from 'react'

// const App = () => {
//     let count = 0;
//     function onClickCounterButton() {
//         console.log(count)
//         count++;
//     }

//     return (
//         <div>
//             <h4>Current Count {count}</h4>
//             <button onClick={onClickCounterButton}>Click For Counter</button>
//         </div>
//     )
// }

// export default App

import React, { useState } from 'react'
import ProfileApp from './components/ProfileApp'

const App = () => {
    const [name, setName] = useState('Dhruv');
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }

    function handleNameSubmit(newName) {
        setName(newName);
    }

    function handleEnter(msg) {
        alert('Enter Pressed' + msg);
    }

    return (
        <div>
            <ProfileApp
                name={name}
                count={count}
                onIncrease={increase}
                onDecrease={decrease}
                onNameSubmit={handleNameSubmit}
                onEnter={handleEnter}
                message={message}
                setMessage={setMessage}
                onReset={handleReset}
            />
        </div>
    )
}

export default App
