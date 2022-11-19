import React from 'react';

function Button(props) {
    const hello=()=>{
        alert('Hello World')
    }
    return (
        <div>
            <button onClick={hello}>hello</button>
        </div>
    );
}

export default Button;