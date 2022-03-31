import React, { useDispatch } from 'react-redux'
import { delete_task, done, edit_task } from '../redux/Actions'
import { Button, Card } from 'react-bootstrap'
import { useState } from 'react'
function Task({ description, isDone, id }) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [task, setTask] = useState(description)

    return (
        <Card body style={{ backgroundColor: isDone ? '#f9ccac' : '#d9ecd0', borderRadius: '10px', margin: '5px', border: '1px solid#454140' }} >
            <h2 style={{ textDecoration: isDone && 'line-through', fontWeight: '700' }}>{edit ? <input type='text' placeholder='Edit task' onChange={(e) => setTask(e.target.value)} style={{borderRadius:'10px'}}></input> : description}</h2>
            <div>
                {edit && <Button style={{ width: '100px', margin: '5px', borderRadius: "10px" }} variant="primary" onClick={() => { dispatch(edit_task(task, id), setEdit(!edit)) }}>Save</Button>}
                {!edit && <Button style={{ width: '100px', margin: '5px', borderRadius: "10px" }} variant="primary" onClick={() => setEdit(!edit)}>Edit</Button>}
                <Button style={{ width: '100px', margin: '5px', borderRadius: "10px" }} onClick={() => dispatch(done(id))} variant="success">{isDone ? 'Re-Take' : 'Done'}</Button>
                <Button style={{ width: '100px', margin: '5px', borderRadius: "10px" }} onClick={() => dispatch(delete_task(id))} variant="danger">Delete</Button>
            </div>
        </Card>
    )
}

export default Task;