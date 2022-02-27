import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import PhoneList from "./PhoneList";
import Loading from "../utils/Loading";
import ButtonAddPhone from "../utils/ButtonAddPhone";
import './Home.css';

const Home = () => {

    const [phoneList, setPhoneList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const getPhoneList = async () => {
            try {
                setIsFetching(true);
                const response = await axios.get('/phones');
                setPhoneList(response.data);
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

        getPhoneList().then();
    }, []);

    return (
        <Container>
            <h1 className="home-header mb-4">Phone Catalog</h1>
            {isFetching && <Loading/>}
            {!isFetching &&<ButtonAddPhone/>}
            {!isFetching && phoneList && <PhoneList phoneList={phoneList}/>}
        </Container>
    );
};

export default Home;

