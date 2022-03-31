import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { add_task } from '../redux/Actions';
import { Button, FormControl } from 'react-bootstrap';

function Addtask() {
    const dispatch = useDispatch();
    const [word, setWord] = useState('');


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '50px', marginBottom: '25px' }}>
            <FormControl type="search" placeholder="Add a task" className="me-2" aria-label="Search" onChange={(e) => setWord(e.target.value)} />
            <Button style={{ borderRadius: "10px", width: '200px' }} onClick={() => word === '' ? alert('Enter a task!') : dispatch(add_task(word))} variant="primary">Add</Button>
        </div>
    )
}

export default Addtask;