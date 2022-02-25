import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import './NotFound.css';

const NotFound = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center not-found" >
            <h1 className="mb-3">Sorry!</h1>
            <img src={"astronaut.png"} alt="astronaut"/>
            <p className="fs-3">The page you are looking for is not available</p>
            <Link to="/">Go Home</Link>
        </Container>
    );
};

export default NotFound;
