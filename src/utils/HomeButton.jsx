import React from "react";
import {useHistory} from "react-router-dom";
import './HomeButton.css';

const HomeButton = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <div className="d-flex flex-column flex-wrap align-content-end mb-3">
            <button className="btn back-home-button" type="button" onClick={handleClick}>
                <i className="fa-solid fa-arrow-left-long"/>
            </button>
        </div>

    );
};

export default HomeButton;
