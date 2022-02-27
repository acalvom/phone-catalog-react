import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import {Container} from "react-bootstrap";
import Loading from "../utils/Loading";
import PhoneDetailContent from "./PhoneDetailContent";
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
            <h2 className="phone-details-title"><i className="fa-solid fa-mobile"/> Phone details</h2>
            {isFetching && <Loading/>}
            {!isFetching && phoneDetails && <PhoneDetailContent phoneDetails={phoneDetails}/>}
        </Container>
    );
};

export default PhoneDetail;
