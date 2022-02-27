import React from 'react';
import {Button, ButtonToolbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const CardPhoneButtons = (props) => {

    const id = props.id;
    const handleDelete = props.handleDelete;

    return (
        <div>
            <ButtonToolbar className="card-phone-button-toolbar">
                <Link to={`/phone/${id}`}>
                    <Button variant="dark"><i className="fa-solid fa-circle-info"/></Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(id)}><i
                    className="fa-solid fa-trash-can"/></Button>
            </ButtonToolbar>
        </div>
    );
};

export default CardPhoneButtons;
