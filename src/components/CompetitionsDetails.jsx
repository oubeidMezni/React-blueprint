import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import AddPlayer from './AddPlayer';
const CompetitionDetails = () => {
    const [competition, setCompetition] = useState('')
    const participants = useSelector(state =>
        state.reducer.participants
    )
    const isParticipateDisabled = competition.participants === 0;
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8080/Competitions/${id}`)
            .then((res) => setCompetition(res.data))
            .catch((err) => console.log(err));
    }, [id]);
    const [showAddPlayer, setShowAddPlayer] = useState(false);

    const handleParticipateClick = () => {
        setShowAddPlayer(true);
    };

    return (
        <div className='d-flex flex-column'>
            <h2>{competition.name}</h2>
            <p>Price:{competition.fees}</p>
            <p>Start Date: {competition.date}</p>
            <p>End Date: {competition.description}</p>
            <p>Participants: {competition.participants}</p>
            <Button className='mx-auto' variant='info' disabled={isParticipateDisabled} onClick={handleParticipateClick}>Participate</Button>
            {showAddPlayer ? <AddPlayer clicked={()=>setShowAddPlayer(false)} add={() => setCompetition({ ...competition, participants: competition.participants - 1 })} /> :
                <ListGroup as="ul" className='mx-auto mt-4'>
                    <ListGroup.Item as="li" active>
                        Username      </ListGroup.Item>
                    {participants.map(participant => {
                        return (
                            <ListGroup.Item as="li">{participant}</ListGroup.Item>

                        )
                    })}


                </ListGroup>}
        </div>
    );
};

export default CompetitionDetails;