import { useState } from "react";

export const useAddTask = () => {
    const [listItems, setListItems] = useState([]);

    const handleSubmit = (setTaskValue) => (event) => {
        event.preventDefault();
        const content = new window.FormData(event.target).get('task');
        if (content === "") return
        const newListItems = [...listItems];
        newListItems.push({task:content,completed:false});
        setListItems([...newListItems]);
        setTaskValue("")
    }

    const handleDelete = (event) => {
        event.preventDefault();
        const newListItems = [...listItems];
        const elementDeleted = document.getElementById(`item${event.target.value}`)
        elementDeleted.classList.add("unmount")
        setTimeout(() => {
            newListItems.splice(event.target.value, 1)
            setListItems([...newListItems]);
            elementDeleted.classList.remove("unmount")
        },700)
    }

    const toggleCompleted = (event) => {
        const newListItems = [...listItems];
        newListItems[event.target.value].completed = !newListItems[event.target.value].completed;
        console.log(newListItems);
        setListItems([...newListItems])
    }


    return {listItems, handleSubmit, handleDelete, toggleCompleted}
}