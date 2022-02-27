import React from 'react';
import {Card} from "react-bootstrap";

const CardPhoneInfo = (props) => {

    const phone = props.phone;

    return (
        <div className="mb-2">
            <Card.Title>{phone.name}</Card.Title>
            <Card.Subtitle
                className="mb-2 text-warning">{phone.manufacturer}</Card.Subtitle>
            <Card.Text>{phone.price}€</Card.Text>
        </div>
    );
};

export default CardPhoneInfo;
