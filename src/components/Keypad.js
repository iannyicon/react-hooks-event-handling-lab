// Code Keypad Component Here
import React from 'react';

function Keypad (){
    const hanldePasswordChange = (e) => {
        console.log('Entering password...');
    }
    return (
        <div>
            <input 
            type="password"
            onChange={hanldePasswordChange} />
        </div>
    )   
}

export default Keypad;