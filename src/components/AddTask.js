import { useState } from 'react'
 
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (text.trim() === '') {
            alert('Please add a task')
            return
        }

        if (day.trim() === '') {
            alert('Please add a day and date')
            return
        }

        onAdd({ text, day, reminder, editMode })

        setText('')
        setDay('')
        setReminder(false)
        setEditMode(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day And Time' value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            {//<div className='form-control form-control-check'>
               // <label>Set Reminder</label>
               /// <input type='checkbox' checked={reminder}
               // onChange={(e) => setReminder(e.currentTarget.checked)}
              //  />
           // </div>
        }

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask