import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import {Container} from "react-bootstrap";
import Loading from "../utils/Loading";
import './PhoneDetails.css';


const PhoneDetail = () => {

    const {id} = useParams();
    const [phoneDetails, setPhoneDetails] = useState([]);
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        const getPhone = async (id) => {
            try {
                setIsFetching(true);
                const response = await axios.get('/phone/' + id);
                setPhoneDetails(response.data[0]);
            } catch (e) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e,
                    background: 'rgb(228 255 162)'
                })
            } finally {
                setIsFetching(false);
            }
        }

        getPhone(id).then();
    }, [id]);

    return (
        <Container>
            {isFetching && <Loading/>}
            {!isFetching && phoneDetails &&
            <div
                className=" phone-details d-flex flex-wrap flex-sm-row flex-column justify-content-center align-items-center overflow-auto">
                <img src="https://via.placeholder.com/300" alt={phoneDetails.name}/>
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
            }
        </Container>
    );
};

export default PhoneDetail;
