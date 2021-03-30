import { useState } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onEdit, saveEdit }) => {
    const [newText, setNewText] = useState(task.text)
    const [newDay, setNewDay] = useState(task.day)

    const edit = () => {
        return (
        <form className='add-form'>
        <div className='form-control'>
                <label>Task</label>
                <input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' value={newDay} onChange={(e) => setNewDay(e.target.value)} />
            </div>
                <button onClick={(e) => {e.preventDefault(); onEdit(task.id)}} 
                className='btn'> Cancel </button>
                <button onClick={(e) => {e.preventDefault(); saveEdit(task.id, newText, newDay)}} 
                className='btn'> Save </button>
        </form>)
    }

    const taskData = () => {
        return (
            <div className={`task ${task.reminder ? 'reminder' : ''}`}
             onDoubleClick={() => onToggle(task.id)} >
            <h3>{task.text} </h3>

            <FaTimes style={{ color: 'red', 
            cursor: 'pointer', float: 'right' }} onClick={() => onDelete(task.id)}/>

            <FaEdit style={{ cursor: 'pointer', float: 'right'}} onClick={() => onEdit(task.id)} />

            <p>{task.day}</p>
        </div>
        )
    }

    return (
        <>
        {task.editMode ? edit() : taskData()}
        </>
    )
}

export default Task