import React from 'react';
import { Link } from 'react-router-dom';

const Competition = ({ id, name, fees, date }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{fees}</td>
            <td>{date}</td>
            <td><Link to={`/CompetitionDetails/${id}`}>Details</Link></td>
        </tr>
    );
};

export default Competition;