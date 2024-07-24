import React, { useState } from 'react'


export const Form = ({handleSubmit}) => {

    const [taskValue, setTaskValue] = useState("")

    const handleChange = (event) => {
        const valor = event.target.value;
        setTaskValue(valor);
    }

    return (
        <form className='myForm' onSubmit={handleSubmit(setTaskValue)}>
            <input 
            value={taskValue} 
            onChange={handleChange}
            type="text" 
            name="task" 
            id="task" 
            placeholder='Beber agua, pasear al perro...'/>
            <button type='submit'>Añadir</button>
        </form>
    )
}
