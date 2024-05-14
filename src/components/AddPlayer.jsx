import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AddParticipant } from '../Redux/actions';
const AddPlayer = (props) => {
    const [playerName, setPlayerName] = useState('');
    const dispatch = useDispatch();
    const participants = useSelector(state =>
        state.reducer.participants
    )
    const addParticipant = () => {
        if (participants.includes(playerName)) {
            alert('participant exists already')
        }
        else {
            dispatch(AddParticipant(playerName));
            props.add()
            props.clicked()
            setPlayerName('');
        }

    }
    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Player name:', playerName);
        setPlayerName('');
    };

    return (
        <div className='mx-auto mt-5'>
            <Form.Control
                label="Username"
                type="text"
                value={playerName}
                onChange={handleInputChange}
                placeholder="Username"
            />
            <Button variant='dark' onClick={() => addParticipant()}>Submit</Button>
        </div>

    );
};

export default AddPlayer;