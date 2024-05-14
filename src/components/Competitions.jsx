import React from 'react';
import Competition from './Competition';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
const Competitions = () => {

    const [competitions, setCompetitions] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/Competitions')
            .then(response => {
                setCompetitions(response.data);
            })
            .catch(error => {
                console.error('Error fetching competitions:', error);
            });
    }, []);

    return (
        <div>
            <h1>Competition Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>fees</th>
                        <th>date</th>
                        <th>details</th>

                    </tr>
                </thead>
                <tbody>
                    {competitions.map((competition, index) => (
                        <Competition key={index} name={competition.name} fees={competition.fees} date={competition.date} id={competition.id} participants={competition.participants}/>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Competitions;