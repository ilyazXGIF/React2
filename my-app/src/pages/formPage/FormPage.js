import React from 'react';

function FormPage(props) {

    const sayHello = () => {
        alert('Hello World')
    }

    const getUsers = () =>{
        alert('Dastan + Anna + Amir')
    }

    const handleChange = (event) =>{

        console.log(event.target.value)
    }
    const handleBlur = (event) =>{
        console.log(event.target.value)
    }


    return (
        <>
        <h1>обработчик событий</h1>
            <button onClick={sayHello}>кнопка</button>
            <button onDoubleClick={getUsers}>get Users</button>
            <h1>----------------------------</h1>
            <input
            type='text'
            placeholder='on change'
            onChange={handleChange}
            /><input
            type='text'
            placeholder='on change'
            onChange={handleBlur}
            />
        </>
    );
}

export default FormPage;