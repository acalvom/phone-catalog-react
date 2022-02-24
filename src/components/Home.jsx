import React from 'react';
import {Button, ButtonToolbar, Card, Container} from "react-bootstrap";
import './Home.css';

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

    return (
        <Container>
            <div className="d-flex flex-wrap justify-content-center">
                <Card className="card-phone">
                    <Card.Img variant="top" src="https://via.placeholder.com/200"/>
                    <Card.Body>
                        <div className="mb-2">
                            <Card.Title>{phoneList[0].name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{phoneList[0].manufacturer}</Card.Subtitle>
                            <Card.Text>{phoneList[0].price}€</Card.Text>
                        </div>
                        <div>
                            <ButtonToolbar className="card-phone-button-toolbar">
                                <Button variant="outline-dark">See details</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </ButtonToolbar>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-phone">
                    <Card.Img variant="top" src="https://via.placeholder.com/200"/>
                    <Card.Body>
                        <div className="mb-2">
                            <Card.Title>{phoneList[3].name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{phoneList[3].manufacturer}</Card.Subtitle>
                            <Card.Text>{phoneList[3].price}€</Card.Text>
                        </div>
                        <div>
                            <ButtonToolbar className="card-phone-button-toolbar">
                                <Button variant="outline-dark">See details</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </ButtonToolbar>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </Container>
    );
};

export default Home;

