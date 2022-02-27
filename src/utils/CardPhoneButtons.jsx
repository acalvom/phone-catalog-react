import React from 'react';
import {Button, ButtonToolbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const CardPhoneButtons = (props) => {

    const id = props.id;
    const filename = props.filename;
    const handleDelete = props.handleDelete;

    return (
        <div>
            <ButtonToolbar className="card-phone-button-toolbar">
                <Link to={`/phone/${id}`}>
                    <Button className="info"><i className="fa-solid fa-circle-info"/></Button>
                </Link>
                <Button className="delete" onClick={() => handleDelete(id, filename)}><i
                    className="fa-solid fa-trash-can"/></Button>
            </ButtonToolbar>
        </div>
    );
};

export default CardPhoneButtons;
