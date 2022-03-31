import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function Listtask() {
    const [isTrue, setIsTrue] = useState(false);
    const todolist = useSelector(state => state.todolist)
    return (
        <div >
            <Button style={{ width: '150px', marginBottom: '25px', borderRadius: "10px" }} onClick={() => setIsTrue(!isTrue)} variant="primary">{isTrue ? 'All the tasks' : 'Tasks not done'}</Button>
            {isTrue ? <div><h1 style={{ color: '#454140', fontWeight: '900' }}>Tasks not done</h1>{todolist.filter((el) => el.isDone !== true).map(el => <Task key={el.id} description={el.description} isDone={el.isDone} id={el.id}></Task>)}</div> : <div><h1 style={{ color: '#454140', fontWeight: '900' }}>All the tasks</h1>{todolist.map(el => <Task key={el.id} description={el.description} isDone={el.isDone} id={el.id}></Task>)} </div>}
        </div>
    )
}

export default Listtask;
