import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import './Home.css';
import PhoneList from "./PhoneList";
import axios from "axios";

const Home = () => {

    const [phoneList, setPhoneList] = useState([]);

    useEffect(() => {
        const getPhoneList = async () => {
            const response = await axios.get('/phones');
            setPhoneList(response.data);
        }
        getPhoneList().then();
    }, []);

    return (
        <Container>
            <h1 className="home-header">Phone Catalog</h1>
            {phoneList && <PhoneList phoneList={phoneList}/>}
        </Container>
    );
};

export default Home;

