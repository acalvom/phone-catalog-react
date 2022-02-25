import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import './Home.css';
import PhoneList from "./PhoneList";
import axios from "axios";
import Loading from "../utils/Loading";

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
                console.log(e);
            } finally {
                setIsFetching(false);
                console.log('End of request');
            }
        }

        setTimeout(() => {
            getPhoneList().then();
        }, 5000);

        // getPhoneList().then();
    }, []);

    return (
        <Container>
            <h1 className="home-header mb-4">Phone Catalog</h1>
            {isFetching && <Loading/>}
            {!isFetching && phoneList && <PhoneList phoneList={phoneList}/>}
        </Container>
    );
};

export default Home;

