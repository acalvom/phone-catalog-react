import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const ButtonAddPhone = () => {
    return (
        <div className="d-flex flex-wrap justify-content-end home-button-add">
            <Link to={'/add'}>
                <Button className="rounded-circle"><span className="fa-solid fa-plus"/></Button>
            </Link>
        </div>
    );
};

export default ButtonAddPhone;
