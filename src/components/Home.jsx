import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import './Home.css';
import PhoneList from "./PhoneList";
import axios from "axios";

const Home = () => {

    const phoneList = [
        {
            id: 0,
            name: "iPhone 7",
            manufacturer: "Apple",
            description: "lorem ipsum dolor sit amet consectetur.",
            color: "black",
            price: 769,
            imageFileName: "IPhone_7.png",
            screen: "4,7 inch IPS",
            processor: "A10 Fusion",
            ram: 2
        },
        {
            id: 1,
            name: "iPhone 13",
            manufacturer: "Apple",
            description: "lorem ipsum dolor sit amet consectetur.",
            color: "red",
            price: 1030,
            imageFileName: "IPhone_13.png",
            screen: "4,7 inch IPS",
            processor: "A10 Fusion",
            ram: 2
        },
        {
            id: 2,
            name: "Xiaomi Mi 11 Pro",
            manufacturer: "Xiaomi",
            description: "lorem ipsum dolor sit amet consectetur.",
            color: "white",
            price: 572,
            imageFileName: "Xiaomi_Mi13.png",
            screen: "6,81 inch",
            processor: "Snapdragon 888",
            ram: 8
        },
        {
            id: 3,
            name: "Samsung Galaxy S20 FE",
            manufacturer: "Samsung",
            description: "lorem ipsum dolor sit amet consectetur.",
            color: "pink",
            price: 487,
            imageFileName: "Galaxy_S20.png",
            screen: "6,5 inch",
            processor: "Exynos 990",
            ram: 6
        },
    ];

    useEffect(() => {
       const getPhoneList = async () => {
           const data = await axios.get('/phones');
           console.log(data);
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

