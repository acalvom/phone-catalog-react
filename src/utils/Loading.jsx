import React, {Fragment} from 'react';
import './Loading.css'
import {Spinner} from "react-bootstrap";

const Loading = () => {
    return (
        <Fragment>
            <div className="loading-spinner d-flex justify-content-center">
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div className="loading-span d-flex justify-content-center">
                <span>LOADING</span>
            </div>
        </Fragment>
    );
};

export default Loading;
