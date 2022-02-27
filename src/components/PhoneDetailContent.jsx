import React from 'react';

const PhoneDetailContent = (props) => {

    const phoneDetails = props.phoneDetails;

    return (
        <div className="phone-details flex-sm-row">
            <img src={phoneDetails.imageFilePath} alt={phoneDetails.name}/>
            <div>
                <h2>{phoneDetails.name}</h2>
                <span>{phoneDetails.manufacturer}</span>
                <p className="my-1">{phoneDetails.description}</p>
                <p className="phone-details-price"><span>{phoneDetails.price} €</span></p>
                <ul>
                    <li><span className="fs-6">COLOR:</span> {phoneDetails.color}</li>
                    <li><span className="fs-6">PROCESSOR:</span> {phoneDetails.processor}</li>
                    <li><span className="fs-6">SCREEN:</span> {phoneDetails.screen}</li>
                    <li><span className="fs-6">RAM:</span> {phoneDetails.ram}</li>
                </ul>
            </div>
        </div>
    );
};

export default PhoneDetailContent;
