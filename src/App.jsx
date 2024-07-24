import React, { useState } from 'react'
import { List } from '../components/List'
import './App.css'
import { useAddTask } from '../hooks/useAddTask'
import { Form } from '../components/Form'

export const App = () => {
    
    const {listItems, handleDelete, handleSubmit, toggleCompleted} = useAddTask();

    return (
        <>
            <header>
                <h1>TO-DO LIST</h1>
                <Form handleSubmit={handleSubmit}/>
            </header>
            <main>
                <List listItems={listItems} handleDelete={handleDelete} toggleCompleted={toggleCompleted}/>
            </main>
        </>
    )
}
