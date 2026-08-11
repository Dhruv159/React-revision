import React from 'react'
import NameForm from './NameForm';

const ProfileApp = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: 20 }}>
            <p>Name: {props.name}</p>
            <p>Counter: {props.count}</p>

            <button onClick={props.onIncrease}>Increase</button>
            <button onClick={props.onDecrease}>Decrease</button>
            <button onClick={props.onReset}>Reset</button>

            <hr />

            <NameForm onNameSubmit={props.onNameSubmit} />

            <hr />

            {/* <MessageBox
                message={props.message}
                setMessage={props.setMessage}
                onEnter={props.onEnter}
            /> */}
        </div>
    );
}

export default ProfileApp
